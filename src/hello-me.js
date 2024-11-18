import { argv } from 'node:process';
// node src/hello-me.js Pachara
// The first argument is node.
// The sencod argument is src/hello-me.js.
// The third argument is your_name.
const name = argv[2];
console.info(`Hello ${name}`);