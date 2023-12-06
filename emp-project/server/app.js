require('dotenv').config({ path: './db/employee.env' });
const express = require('express');
const app = express();
const mysql = require('./db.js');

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true }));

app.listen(3000, () => {
	console.log('서버 시작: 포트 번호 3000');
});

app.get('/employees', async (req, resp) => {
	let result = await mysql.query('employeeList');
	resp.send(result);
});

app.get('/employees/:num', async (req, resp) => {
	let result = await mysql.query('employeeInfo', req.params.num);
	resp.send(result[0]);
});

app.post('/employees', async (req, resp) => {
	let emp = await mysql.query('employeeInsert', req.body.emp);
	let dept = await mysql.query('deptInsert', req.body.dept);
	let sal = await mysql.query('salaryInsert', req.body.sal);
	resp.send([emp, dept, sal]);
});

app.put('/employees/:num', async (req, resp) => {
	let data = [req.body.data, req.params.num];
	let result = await mysql.query('employeeUpdate', data);
	resp.send(result);
});

app.delete('/employees/:num', async (req, resp) => {
	let data = [req.body.data, req.params.num];
	let dept = await mysql.query('deptDelete', data);
	let sal = await mysql.query('salDelete', data);
	resp.send([dept, sal]);
});
