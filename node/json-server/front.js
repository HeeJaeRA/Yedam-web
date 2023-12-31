// 전체조회
fetch('http://localhost:3000/posts')
	.then((res) => res.json())
	.then((data) => console.log('list', data))
	.catch((err) => console.log(err));

// 단건조회
fetch('http://localhost:3000/posts/1')
	.then((res) => res.json())
	.then((data) => console.log('info', data))
	.catch((err) => console.log(err));

// 등록
fetch('http://localhost:3000/posts', {
	method: 'post',
	headers: {
		'content-type': 'application/json',
	},
	body: JSON.stringify({
		userId: 2,
		id: 4,
		title: 'Have a nice day',
		body: 'et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut',
	}),
})
	.then((res) => res.json())
	.then((result) => console.log('insert', result));

// 수정
fetch('http://localhost:3000/posts/4', {
	method: 'put',
	headers: {
		'content-type': 'application/json',
	},
	body: JSON.stringify({
		userId: 3,
		title: 'Hello, World!',
		body: 'et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut',
	}),
})
	.then((res) => res.json())
	.then((data) => console.log('update', data));

// 삭제
fetch('http://localhost:3000/posts/4', {
	method: 'delete',
})
	.then((res) => res.json())
	.then((data) => console.log('delete', data));
