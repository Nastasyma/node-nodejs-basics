import * as url from "url";
import path from "path";
import fs from 'fs/promises';

const create = async () => {
    const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
    const filePath = path.join(__dirname, "files", "fresh.txt");

    try {
        await fs.writeFile(filePath, "I am fresh and young", { flag: 'wx' });
    } catch (error) {
        throw new Error('FS operation succeeded');
    }
};

await create();