const express = require('express');

const app = express();

const getData = async () => {
	return await fetch('db.json').then((res) => res.json());
};

let db = getData();

app.get('/', (req, resp) => {
	resp.send('Server Connect');
});

app.get('/posts', (req, resp) => {
	res.send(db['posts']);
});

app.listen(3000, () => {
	console.log('서버가 실행됩니다');
	console.log('http://localhost:3000');
});
