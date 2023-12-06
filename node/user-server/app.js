require('dotenv').config({ path: './db/test.env' });
const express = require('express');
const app = express();
const mysql = require('./db');

app.use(express.json({ limit: '50mb' }));

app.use(express.static('dist'));

app.listen(3001, () => {
	console.log('서버 시작');
});

app.get('/', (req, resp) => {
	resp.sendFile('/dist/index.html');
});

app.get('/node/users', async (req, resp) => {
	let result = await mysql.query('userList');
	resp.send(result);
});

app.get('/node/users/:userNo', async (req, resp) => {
	let result = await mysql.query('userInfo', req.params.userNo);
	resp.send(result[0]);
});

app.post('/node/users', async (req, resp) => {
	let result = await mysql.query('userInsert', req.body.data);
	resp.send(result);
});

app.put('/node/users/:userNo', async (req, resp) => {
	let data = [req.body.data, req.params.userNo];
	let result = await mysql.query('userUpdate', data);
	resp.send(result);
});

app.delete('/node/users/:userNo', async (req, resp) => {
	let result = await mysql.query('userDelete', req.params.userNo);
	resp.send(result);
});
