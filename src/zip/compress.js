import * as url from "url";
import path from "path";
import fs from 'fs';
import zlib from 'zlib';

const compress = async () => {
    const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
    const srcFile = path.join(__dirname, "files", 'fileToCompress.txt');
    const destFile = path.join(__dirname, "files", 'archive.gz');

    const gzip = zlib.createGzip();
    const input = fs.createReadStream(srcFile);
    const output = fs.createWriteStream(destFile);

    input.pipe(gzip).pipe(output);
};

await compress();