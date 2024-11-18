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
            const spacesBefore = ' '.repeat(n - i); 
            const spacesInside = i === 1 ? '' : ' '.repeat(2 * i - 3); 
            console.log(spacesBefore + '*' + (i > 1 ? spacesInside + '*' : ''));
        }

        for (let i = n - 1; i >= 1; i--) {
            const spacesBefore = ' '.repeat(n - i);
            const spacesInside = i === 1 ? '' : ' '.repeat(2 * i - 3); 
            console.log(spacesBefore + '*' + (i > 1 ? spacesInside + '*' : ''));
        }
    }

    rl.close();
});

