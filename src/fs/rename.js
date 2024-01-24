import * as url from "url";
import path from "path";
import fs from "fs/promises";

const rename = async () => {
    const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
    const srcFile = path.join(__dirname, "files", "wrongFilename.txt");
    const destFile = path.join(__dirname, "files", "properFilename.md");

    const fileExists = fs.existsSync(srcFile);
    if (!fileExists) {
        throw new Error("FS operation failed");
    }

    const destFileExists = fs.existsSync(destFile);
    if (destFileExists) {
        throw new Error("FS operation failed");
    }

    await fs.rename(srcFile, destFile, (err) => {
        if (err) {
            throw new Error("FS operation failed");
        }
    })
};

await rename();