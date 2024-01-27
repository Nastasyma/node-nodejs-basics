import { Transform } from 'stream';
const transform = async () => {
    process.stdin.pipe(new Transform({
        transform(chunk, _, callback) {
            callback(null, chunk.toString().split('').reverse().join(''));
        }
    })).pipe(process.stdout);
};

await transform();