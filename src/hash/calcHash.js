import fs from "fs/promises";
import * as url from "url";
import path from "path";
import crypto from "crypto";

const calculateHash = async () => {
    const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
    const filePath = path.join(__dirname, "files", "fileToCalculateHashFor.txt");

    try {
        await fs.access(filePath);

        const content = await fs.readFile(filePath, "utf-8");
        const hash = crypto.createHash("sha256").update(content).digest("hex");

        console.log(hash);
    } catch (err) {
        throw err;
    }
};

await calculateHash();