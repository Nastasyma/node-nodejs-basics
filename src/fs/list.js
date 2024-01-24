import fs from 'fs/promises';

const list = async () => {
    const folderPath = new URL("files", import.meta.url);

    try {
        await fs.access(folderPath);
    } catch (err) {
        throw new Error("FS operation failed");
    }

    const files = await fs.readdir(folderPath);
    console.table(files);
};

await list();