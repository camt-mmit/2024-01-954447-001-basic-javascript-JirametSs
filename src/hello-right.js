import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter the size: ', (size) => {
    const n = parseInt(size);

    if (isNaN(n) || n < 1) {
        console.log('Please enter a valid positive integer.');
    } else {
        for (let i = 1; i <= n; i++) {
            console.log(' '.repeat(n - i) + '*'.repeat(i));
        }
    }

    rl.close();
});