import * as url from "url";
import path from "path";
import fs from 'fs/promises';

const read = async () => {
    const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
    const filePath = path.join(__dirname, "files", "fileToRead.txt");

    try {
        await fs.access(filePath);
        const content = await fs.readFile(filePath, "utf-8");
        console.log(content);
    } catch (err) {
        throw new Error("FS operation failed");
    }
};

await read();