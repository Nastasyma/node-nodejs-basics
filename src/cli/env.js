const parseEnv = () => {
    let output = '';
    for (const key in process.env) {
        if (key.startsWith('RSS_')) {
            output += `${key}=${process.env[key]}; `;
        }
    }
    console.log(output.trim());
};

parseEnv();