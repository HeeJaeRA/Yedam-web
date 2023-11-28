const express = require('express');
const session = require('express-session');
const cors = require('cors');

const app = express();

const defaultParser = express.urlencoded({ extended: false });

const jsonParser = express.json();

app.use(defaultParser);

app.post('/info', (req, resp) => {
	resp.send('Welcome, ' + req.body.name);
});

app.post('/message', jsonParser, (req, resp) => {
	resp.send('Message: ' + req.body.message);
});

app.listen(5000, () => {
	console.log('서버 시작');
});

let sessionSetting = session({
	secret: 'secret key',
	resave: false,
	saveUninitialized: true,
	cookie: {
		httpOnly: true,
		secure: false,
		maxAge: 60000,
	},
});

app.use(sessionSetting);

const corsOptions = {
	origin: 'http://172.30.1.7:5000',
	// origin: 'http://192.168.0.47:5000',
	optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.get('/', (req, resp) => {
	resp.send(req.session);
});

app.post('/login', (req, resp) => {
	const { id, pw } = req.body;

	req.session.user = id;
	req.session.pw = pw;
	req.session.save(function (err) {
		if (err) throw err;
		resp.redirect('/');
	});
});

app.get('/logout', (req, resp) => {
	req.session.destroy();
	resp.redirect('/');
});
