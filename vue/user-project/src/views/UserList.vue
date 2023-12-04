<template>
	<div class="container">
		<table>
			<!-- <caption>Total: {{ count }}</caption> -->
			<tr>
				<th>유저번호</th>
				<th>아이디</th>
				<th>이름</th>
				<th>성별</th>
				<th>나이</th>
				<th>가입일자</th>
			</tr>
			<tr :key="i" v-for="(user, i) in userList" @click="moveUserInfo(user.user_no)">
				<td>{{ user.user_no }}</td>
				<td>{{ user.user_id }}</td>
				<td>{{ user.user_name }}</td>
				<td>{{ user.user_gender }}</td>
				<td>{{ user.user_age }}</td>
				<td>{{ dataFormat(user.join_date) }}</td>
			</tr>
		</table>
	</div>
</template>
<script>
import axios from 'axios';
// const axios = require('axios').default;

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
			// http://localhost:3001/node/users
			let result = await axios.get('/node/users').catch((err) => {
				console.log(err);
			});
			let list = result.data;
			this.userList = list;
		},
		moveUserInfo(Unum) {
			// push({name: 'route name 속성', params: 'REST 방식'})
			this.$router.push({ path: '/userInfo', query: { userNo: Unum } });
		},
		dataFormat(value) {
			// let date = value.split('T')[0];
			// return date;

			let date = new Date(value);
			let year = date.getFullYear();
			let month = ('0' + (date.getMonth() + 1)).slice(-2);
			let day = ('0' + date.getDate()).slice(-2);

			return `${year}년 ${month}월 ${day}일`;
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
