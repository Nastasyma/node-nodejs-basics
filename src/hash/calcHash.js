import fs from "fs/promises";
import crypto from "crypto";

const calculateHash = async () => {
    const filePath = new URL("files/fileToCalculateHashFor.txt", import.meta.url);

    try {
        await fs.access(filePath);

        const content = await fs.readFile(filePath, "utf-8");
        const hash = crypto.createHash("sha256").update(content).digest("hex");

        console.log(hash);
    } catch (err) {
        throw err;
    }
};

await calculateHash();