<template>
	<div class="container">
		<table>
			<tr>
				<th>아이디</th>
				<th>이름</th>
				<th>성별</th>
				<th>나이</th>
				<th>가입일자</th>
			</tr>
			<tr :key="i" v-for="(user, i) in userList">
				<td>{{ user.user_id }}</td>
				<td>{{ user.user_name }}</td>
				<td>{{ user.user_gender }}</td>
				<td>{{ user.user_age }}</td>
				<td>{{ user.join_date }}</td>
			</tr>
		</table>
	</div>
</template>
<script>
// import axios from 'axios';
const axios = require('axios').default;
export default {
	data() {
		return {
			userList: [],
		};
	},
	computed: {
		count() {
			return this.userList.length;
		},
	},
	created() {
		this.getUserList();
	},
	methods: {
		async getUserList() {
			let result = await axios.get('/users').catch((err) => {
				console.log(err);
			});
			let list = result.data;
			this.userList = list;
		},
	},
};
</script>
<style scoped>
table {
	font-family: Arial, Helvetica, sans-serif;
	border-collapse: collapse;
	width: 100%;
}
td,
th {
	border: 1px solid black;
	text-align: center;
	padding: 8px;
}
</style>
