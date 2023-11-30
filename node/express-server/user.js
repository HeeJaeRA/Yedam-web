const express = require('express');
const router = express.Router();

router.get('/', (req, resp) => {
	resp.send('회원 정보 조회');
});

router.post('/insert', (req, resp) => {
	resp.send('회원 등록');
});

router.put('/update', (req, resp) => {
	resp.send('회원 수정');
});

router.delete('/delete', (req, resp) => {
	resp.send('회원 삭제');
});

module.exports = router;
