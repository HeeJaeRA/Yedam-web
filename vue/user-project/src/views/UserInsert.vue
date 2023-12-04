<template>
	<div class="container">
		<div class="row">
			<table class="table">
				<tr>
					<th class="text-right table-primary">아이디</th>
					<td class="text-center"><input type="text" v-model="userInfo.user_id" /></td>
				</tr>
				<tr>
					<th class="text-right table-primary">비밀번호</th>
					<td class="text-center"><input type="password" v-model="userInfo.user_pwd" /></td>
				</tr>
				<tr>
					<th class="text-right table-primary">이름</th>
					<td class="text-center"><input type="text" v-model="userInfo.user_name" /></td>
				</tr>
				<tr>
					<th class="text-right table-primary">성별</th>
					<td class="text-center">
						<input type="radio" v-model="userInfo.user_gender" value="M" />남자
						<input type="radio" v-model="userInfo.user_gender" value="F" />여자
					</td>
				</tr>
				<tr>
					<th class="text-right table-primary">나이</th>
					<td class="text-center"><input type="number" v-model="userInfo.user_age" /></td>
				</tr>
				<tr>
					<th class="text-right table-primary">가입일자</th>
					<td class="text-center"><input type="date" v-model="userInfo.join_date" /></td>
				</tr>
			</table>
		</div>
		<div class="row">
			<button class="btn btn-success" @click="addUser">저장</button>
		</div>
	</div>
</template>
<script>
import axios from 'axios';

export default {
	data() {
		return {
			userInfo: {
				user_id: '',
				user_pwd: '',
				user_name: null,
				user_gender: null,
				user_age: null,
				join_date: '',
			},
		};
	},
	created() {
		this.userInfo.join_date = this.getToday();
	},
	methods: {
		async addUser() {
			if (!this.validation()) return;

			let datas = {
				data: this.userInfo,
			};
			let result = await axios(`/node/users`, {
				method: 'post',
				headers: {
					'Content-Type': 'application/json',
				},
				data: JSON.stringify(datas),
			}).catch((err) => console.log(err));

			console.log(result.data);

			if (result.data.insertId == 0) {
				alert(`등록 실패\n${result.data.message}`);
			} else {
				alert('등록 성공');
				this.$router.push({ name: 'userList' });
			}
		},
		getToday() {
			let today = new Date();
			let year = today.getFullYear();
			let month = ('0' + (today.getMonth() + 1)).slice(-2);
			let day = ('0' + today.getDate()).slice(-2);

			return `${year}-${month}-${day}`;
		},
		validation() {
			if (this.userInfo.user_id == '') {
				alert('아이디를 입력하세요');
				return false;
			}
			if (this.userInfo.user_pwd == '') {
				alert('비밀번호를 입력하세요');
				return false;
			}

			return true;
		},
	},
};
</script>
