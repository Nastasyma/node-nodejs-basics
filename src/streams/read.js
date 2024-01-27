import * as url from "url";
import path from "path";
import fs from 'fs';

const read = async () => {
    const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
    const filePath = path.join(__dirname, "files", "fileToRead.txt");

    const stream = fs.createReadStream(filePath, "utf-8");

    stream.on("data", (chunk) => {
        process.stdout.write(chunk);
    });
};

await read();
