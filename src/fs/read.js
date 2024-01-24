import fs from 'fs/promises';

const read = async () => {
    const filePath = new URL("files/fileToRead.txt", import.meta.url);

    try {
        await fs.access(filePath);
        const content = await fs.readFile(filePath, "utf-8");
        console.log(content);
    } catch (err) {
        throw new Error("FS operation failed");
    }
};

await read();