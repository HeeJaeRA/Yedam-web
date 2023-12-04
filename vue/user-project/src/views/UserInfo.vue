<template>
	<div class="container">
		<div class="row">
			<table class="table">
				<tr>
					<th class="text-right table-primary">유저번호</th>
					<td class="text-center">{{ userInfo.user_no }}</td>
				</tr>
				<tr>
					<th class="text-right table-primary">아이디</th>
					<td class="text-center">{{ userInfo.user_id }}</td>
				</tr>
				<tr>
					<th class="text-right table-primary">비밀번호</th>
					<td class="text-center">{{ userInfo.user_pwd }}</td>
				</tr>
				<tr>
					<th class="text-right table-primary">이름</th>
					<td class="text-center">{{ userInfo.user_name }}</td>
				</tr>
				<tr>
					<th class="text-right table-primary">성별</th>
					<td class="text-center">{{ genderFormat }}</td>
				</tr>
				<tr>
					<th class="text-right table-primary">나이</th>
					<td class="text-center">{{ userInfo.user_age }}</td>
				</tr>
				<tr>
					<th class="text-right table-primary">가입일자</th>
					<td class="text-center">{{ joinDate }}</td>
				</tr>
			</table>
		</div>
		<div class="row">
			<button @click="editUser(userInfo.user_no)" class="btn btn-warning">수정</button>
			<router-link to="/" class="btn btn-success">목록으로</router-link>
			<button @click="deleteUser(userInfo.user_no)" class="btn btn-danger">삭제</button>
		</div>
	</div>
</template>
<script>
import axios from 'axios';

export default {
	data() {
		return {
			searchNo: '',
			userInfo: {},
		};
	},
	created() {
		this.searchNo = this.$route.query.userNo;
		this.getUserInfo();
	},
	computed: {
		joinDate() {
			let date = new Date(this.userInfo.join_date);
			let year = date.getFullYear();
			let month = ('0' + (date.getMonth() + 1)).slice(-2);
			let day = ('0' + date.getDate()).slice(-2);
			return `${year}년 ${month}월 ${day}일`;
		},
		genderFormat() {
			// return this.userInfo.user_gender == 'M' ? '남' : '여';

			if (this.userInfo.user_gender == 'M') {
				return '남';
			} else if (this.userInfo.user_gender == 'F') {
				return '여';
			} else {
				return '';
			}
		},
	},
	methods: {
		async getUserInfo() {
			let result = await axios.get(`/node/users/${this.searchNo}`).catch((err) => console.log(err));
			this.userInfo = result.data;
		},
		async deleteUser(userNo) {
			let result = await axios.delete(`/node/users/${userNo}`).catch((err) => console.log(err));
			let count = result.data.affectedRows;
			if (count == 0) {
				alert('삭제 실패');
			} else {
				alert('삭제 성공');
				this.$router.push({ name: 'userList' });
			}
		},
		editUser(Unum) {
			this.$router.push({ path: '/userUpdate', query: { userNo: Unum } });
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
