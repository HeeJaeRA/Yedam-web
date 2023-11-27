const fs = require('fs');

const data = 'Hello, world!';

fs.writeFileSync('./sample.txt', data, 'utf-8');

// fs.writeFile('./sample.txt', data, 'utf-8', (err) => {
// 	if (err) {
// 		throw err;
// 	}
// 	console.log('파일 쓰기 완료');
// });

fs.readFile('./sample.txt', 'utf-8', (err, data) => {
	if (err) {
		throw err;
	}
	console.log(data);
});
