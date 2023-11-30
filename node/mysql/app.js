require('dotenv').config({ path: './db/mysql.env' });
const express = require('express');
const app = express();
const mysql = require('./db.js');

app.use(express.json({ limit: '50mb' }));

app.listen(3000, () => {
	console.log('서버 시작');
});

app.get('/customers', async (req, resp) => {
	let result = await mysql.query('customerList');
	resp.send(result);
});

app.get('/customers/:id', async (req, resp) => {
	let result = await mysql.query('customerInfo', req.params.id);
	resp.send(result[0]);
});

app.post('/customers', async (req, resp) => {
	let result = await mysql.query('customerInsert', req.body.param);
	resp.send(result);
});

app.put('/customers/:id', async (req, resp) => {
	let data = [req.body.param, req.params.id];
	let result = await mysql.query('customerUpdate', data);
	resp.send(result);
});

app.delete('/customers/:id', async (req, resp) => {
	let result = await mysql.query('customerDelete', req.params.id);
	resp.send(result);
});
