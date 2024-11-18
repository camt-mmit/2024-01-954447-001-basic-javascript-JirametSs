import readline from 'readline';

function calculateGrade(score) {
    if (score >= 80) {
        return 'A';
    } else if (score >= 70) {
        return 'B';
    } else if (score >= 60) {
        return 'C';
    } else if (score >= 50) {
        return 'D';
    } else {
        return 'F';
    }
}

// Create an interface to take input from the user
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter your score: ', (input) => {
    const score = parseFloat(input);

    if (isNaN(score)) {
        console.log('Please enter a valid number.');
    } else {
        const grade = calculateGrade(score);
        console.log(`Your grade is ${grade}.`);
    }

    rl.close();
});