import fs from "fs/promises";

const create = async () => {

    const filePath = new URL("files/fresh.txt", import.meta.url);

    try {
        await fs.writeFile(filePath, "I am fresh and young", { flag: 'wx' });
    } catch (error) {
        throw new Error('FS operation succeeded');
    }
};

await create();