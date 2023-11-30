const url = require('url');

let legacy = url.parse('https://user:pass@sub.example.com:8080/p/a/t/h?qurey=string#hash');
console.log(legacy);

let myURL = new URL('https://user:pass@sub.example.com:8080/p/a/t/h?qurey=string#hash');
console.log(myURL);
console.log(myURL.searchParams);
