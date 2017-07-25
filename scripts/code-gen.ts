const codes = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '2', '3', '4', '5', '6', '7', '8', '9'];

async function run() {
    while (1) {
        await sleep();
        const code = generateCode();
        pbcopy(code);
    }
}

function sleep(): Promise<any> {
    return new Promise((resolve) => {
        setTimeout(resolve, 500)
    });
}

function generateCode(): string {
    return [1, 2, 3, 4, 5].map(i => codes[Math.floor(Math.random() * codes.length)]).join('');
}

function pbcopy(data) {
    var proc = require('child_process').spawn('pbcopy');
    proc.stdin.write(data); proc.stdin.end();
}
run();