const process = require('process');

console.log(process.env);
console.log(process.env.JAVA_HOME);

const os = require('os');

console.log(os);
console.log(os.cpus());
console.log(os.tmpdir());
