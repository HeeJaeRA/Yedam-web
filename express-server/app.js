const express = require('express');
const fs = require('fs');
const userRouter = require('./user');

const app = express();

app.use('/user', userRouter);
app.use('/public', express.static('images'));

// app.use(function (err, req, resp, next) {
// 	resp.status(500).json({ Status: resp.statusCode, Err: err.errMessage });
// });
app.get('/error', (req, resp, next) => {
	next(new Error('process fail, check data'));
});

const jsonFile = fs.readFileSync('db.json');
const jsonData = JSON.parse(jsonFile);
const getData = (target, where) => {
	let data = jsonData[target];
	if (Array.isArray(data)) {
		let list = data;
		for (let obj of list) {
			if (obj.id == where) {
				data = obj;
			}
		}
	}
	return data;
};

app.get('/', (req, resp) => {
	resp.send('Server Connect');
});

app.get('/posts', (req, resp) => {
	let posts = getData('posts');
	resp.send(posts);
});

app.get('/posts/:id', (req, resp) => {
	let post = getData('posts', req.params.id);
	resp.send(post);
});

app.get('/comments', (req, resp) => {
	let comments = getData('comments');
	resp.send(comments);
});

app.get('/comments/:id', (req, resp) => {
	let comment = getData('comments', req.params.id);
	resp.send(comment);
});

app.get('/profile', (req, resp) => {
	let profile = getData('profile');
	resp.send(profile);
});

app.route('/emps')
	.get((req, resp) => {
		resp.send('사원 전체 조회');
	})
	.post((req, resp) => {
		resp.send('사원 등록');
	})
	.put((req, resp) => {
		resp.send('사원 수정');
	})
	.delete((req, resp) => {
		resp.send('사원 삭제');
	});

app.listen(3000, () => {
	console.log('서버가 실행됩니다');
	console.log('http://localhost:3000');
});
