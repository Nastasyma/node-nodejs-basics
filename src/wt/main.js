import * as url from "url";
import path from "path";
import { Worker } from "worker_threads";
import { cpus } from "os";

const performCalculations = async () => {
    const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
    const filePath = path.join(__dirname, "./worker.js");

    const runWorker = (data) =>
        new Promise((resolve, reject) => {
            const worker = new Worker(filePath, { workerData: data });

            worker.on("message", (data) => {
                resolve({ status: "resolved", data });
            });

            worker.on("error", () => {
                reject({ status: "error", data: null });
            });
        });

    const results = await Promise.all(cpus().map((_, i) => runWorker(10 + i)));

    console.log(results);
};

await performCalculations();