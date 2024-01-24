const parseEnv = () => {
    const results = [];
    for (const key in process.env) {
        if (key.startsWith('RSS_')) {
            results.push(`${key}=${process.env[key]}`);
        }
    }
    const output = results.join('; ');
    console.log(output);
};

parseEnv();