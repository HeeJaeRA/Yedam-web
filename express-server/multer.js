const multer = require('multer');
const path = require('path');

const express = require('express');
const app = express();

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, 'uploads/');
	},
	filename: function (req, file, cb) {
		cb(null, new Date().valueOf() + path.basename(file.originalname));
	},
});

const upload = multer({ storage: storage });
// const upload = multer({ dest: 'uploads/', limits: { fileSize: 5 * 1024 * 1024 } });

app.post('/profile', upload.single('avatar'), (req, resp) => {
	console.log(req.file);
	console.log(req.body);
});

app.post('/photos', upload.array('photos', 12), (req, resp) => {
	for (let file of req.files) {
		console.log(file);
	}
});

app.listen(5500, () => {
	console.log('서버 실행');
});
