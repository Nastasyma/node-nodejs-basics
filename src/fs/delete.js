import * as url from "url";
import path from "path";
import fs from 'fs/promises';

const remove = async () => {
    const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
    const filePath = path.join(__dirname, "files", "fileToRemove.txt");

    try {
        await fs.access(filePath);
        await fs.unlink(filePath);
    } catch (err) {
        throw new Error("FS operation failed");
    }
};

await remove();