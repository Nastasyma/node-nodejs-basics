import * as url from "url";
import path from "path";
import fs from 'fs';

const write = async () => {
    const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
    const filePath = path.join(__dirname, "files", "fileToWrite.txt");

    const stream = fs.createWriteStream(filePath);

    process.stdin.pipe(stream);
};

await write();