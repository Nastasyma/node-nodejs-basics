import fs from 'fs/promises';
import { access } from 'node:fs';

const remove = async () => {
    const filePath = new URL("files/fileToRemove.txt", import.meta.url);

    access(filePath, (err) => {
        if (err) {
            throw new Error("FS operation failed");
        }

        fs.unlink(filePath, (err) => {
            if (err) {
                throw new Error("FS operation failed");
            }
        });
    });
};

await remove();