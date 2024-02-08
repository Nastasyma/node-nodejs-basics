const parseArgs = () => {
    // console.log(process.argv);

    let output = '';

    const args = process.argv.slice(2);
    for (let i = 0; i < args.length; i += 2) {
        output += `${args[i].replace(/^--/, '')} is ${args[i + 1]}, `;
    }
    console.log(output.slice(0, -2));
};

parseArgs();