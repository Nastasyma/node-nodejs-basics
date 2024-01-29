import * as url from "url";
import path from "path";
import { fork } from "child_process";

const spawnChildProcess = async (args) => {
    const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
    const scriptPath = path.join(__dirname, "files", "script.js");

    const child = fork(scriptPath, args, { silent: true });

    process.stdin.pipe(child.stdin);
    child.stdout.pipe(process.stdout);
};

spawnChildProcess(["arg1", "arg2", "arg3", "arg4"]);

