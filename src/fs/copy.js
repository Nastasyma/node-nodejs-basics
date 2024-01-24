import * as url from "url";
import path from "path";
import fs from "fs";

const copy = async () => {
    const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
    const srcFolder = path.join(__dirname, "files");
    const destFolder = path.join(__dirname, "files_copy");

    const folderExists = fs.existsSync(destFolder);
    if (folderExists) {
        throw new Error("FS operation failed");
    }

    fs.mkdir(destFolder, { recursive: true }, (err) => {
        if (err) {
            throw new Error("FS operation failed");
        }
        console.log('The folder "files-copy" has been created');
    });

    fs.readdir(srcFolder, (err, files) => {
        if (err) {
            throw new Error("FS operation failed");
        }
        files.forEach((file) => {
            fs.copyFile(path.join(srcFolder, file), path.join(destFolder, file), (err) => {
                if (err) {
                    throw new Error("FS operation failed");
                }
                console.log(`${file} was copied to "files-copy" folder`);
            });
        });
    });
};

await copy();
