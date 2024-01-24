import * as url from "url";
import path from "path";
import fs from "fs/promises";

const copy = async () => {
    const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
    const srcFolder = path.join(__dirname, "files");
    const destFolder = path.join(__dirname, "files_copy");

    try {
        await fs.access(srcFolder);
        await fs.mkdir(destFolder);

        const files = await fs.readdir(srcFolder);
        files.forEach(async (file) => {
            await fs.copyFile(path.join(srcFolder, file), path.join(destFolder, file));
        })
    } catch (err) {
        throw new Error("FS operation failed");
    }
};

await copy();