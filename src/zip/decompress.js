import * as url from "url";
import path from "path";
import fs from 'fs';
import zlib from 'zlib';

const decompress = async () => {
    const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
    const srcFile = path.join(__dirname, "files", 'archive.gz');
    const destFile = path.join(__dirname, "files", 'fileToCompress.txt');

    const gunzip = zlib.createGunzip();
    const input = fs.createReadStream(srcFile);
    const output = fs.createWriteStream(destFile);

    input.pipe(gunzip).pipe(output);
};

await decompress();