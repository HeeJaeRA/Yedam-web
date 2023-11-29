require('dotenv').config({ path: './db/test.env' });
const express = require('express');
const app = express();
const mysql = require('./db');

app.use(express.json({ limit: '50mb' }));

app.listen(3001, () => {
	console.log('서버 시작');
});

app.get('/users', async (req, resp) => {
	let result = await mysql.query('userList');
	resp.send(result);
});

app.get('/users/:user_id', async (req, resp) => {
	let result = await mysql.query('userInfo', req.params.user_id);
	resp.send(result[0]);
});

app.post('/users', async (req, resp) => {
	let result = await mysql.query('userInsert', req.body.data);
	resp.send(result);
});

app.put('/users/:user_id', async (req, resp) => {
	let data = [req.body.data, req.params.user_id];
	let result = await mysql.query('userUpdate', data);
	resp.send(result);
});

app.delete('/users/:user_id', async (req, resp) => {
	let result = await mysql.query('userDelete', req.params.user_id);
	resp.send(result);
});
