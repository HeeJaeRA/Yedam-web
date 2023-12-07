require('dotenv').config({ path: './db/exam.env' });
const express = require('express');
const app = express();
const mysql = require('./db.js');

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true }));

app.listen(3000, () => {
	console.log('서버 시작: 포트 번호 3000');
});

app.get('/board', async (req, rep) => {
	let result = await mysql.query('boardList');
	rep.send(result);
});

app.get('/board/:bno', async (req, rep) => {
	let result = await mysql.query('boardInfo', req.params.bno);
	rep.send(result[0]);
});

app.post('/board', async (req, rep) => {
	let result = await mysql.query('boardInsert', req.body.param);
	rep.send(result);
});

app.put('/board/:bno', async (req, rep) => {
	let data = [req.body.param, req.params.bno];
	let result = await mysql.query('boardUpdate', data);
	rep.send(result);
});

app.get('/reply/:bno', async (req, rep) => {
	let result = await mysql.query('replyList', req.params.bno);
	rep.send(result);
});
