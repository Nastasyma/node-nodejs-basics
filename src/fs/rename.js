import * as url from "url";
import path from "path";
import fs from "fs/promises";

const rename = async () => {
    const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
    const srcFile = path.join(__dirname, "files", "wrongFilename.txt");
    const destFile = path.join(__dirname, "files", "properFilename.md");

    try {
        await fs.rename(srcFile, destFile);
    } catch (err) {
        throw new Error("FS operation failed");
    }
};

await rename();