import * as url from "url";
import path from "path";
import fs from 'fs/promises';

const list = async () => {
    const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
    const folderPath = path.join(__dirname, "files");

    try {
        await fs.access(folderPath);
    } catch (err) {
        throw new Error("FS operation failed");
    }

    const files = await fs.readdir(folderPath);
    console.table(files);
};

await list();