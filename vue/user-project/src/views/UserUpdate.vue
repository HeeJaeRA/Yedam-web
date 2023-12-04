<template>
	<div class="container">
		<div class="row">
			<table class="table">
				<tr>
					<th class="text-right table-primary">유저번호</th>
					<td class="text-center">
						<input type="text" v-model="userInfo.user_no" readonly />
					</td>
				</tr>
				<tr>
					<th class="text-right table-primary">아이디</th>
					<td class="text-center">
						<input type="text" v-model="userInfo.user_id" readonly />
					</td>
				</tr>
				<tr>
					<th class="text-right table-primary">비밀번호</th>
					<td class="text-center">
						<input type="text" v-model="userInfo.user_pwd" />
					</td>
				</tr>
				<tr>
					<th class="text-right table-primary">이름</th>
					<td class="text-center">
						<input type="text" v-model="userInfo.user_name" />
					</td>
				</tr>
				<tr>
					<th class="text-right table-primary">성별</th>
					<td class="text-center">
						<input type="radio" v-model="userInfo.user_gender" value="M" onclick="return false;" />남자
						<input type="radio" v-model="userInfo.user_gender" value="F" onclick="return false;" />여자
					</td>
				</tr>
				<tr>
					<th class="text-right table-primary">나이</th>
					<td class="text-center">
						<input type="number" v-model="userInfo.user_age" readonly />
					</td>
				</tr>
				<tr>
					<th class="text-right table-primary">가입일자</th>
					<td class="text-center">
						<input type="date" v-model="userInfo.join_date" readonly />
					</td>
				</tr>
			</table>
		</div>
		<div class="row">
			<button class="btn btn-success" @click="editUser">수정</button>
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
	methods: {
		async getUserInfo() {
			let result = await axios.get(`/node/users/${this.searchNo}`).catch((err) => console.log(err));
			this.userInfo = result.data;
			let newDate = this.dateFormat(this.userInfo.join_date);
			this.userInfo.join_date = newDate;
		},
		dateFormat(value) {
			let date = new Date(value);
			let year = date.getFullYear();
			let month = ('0' + (date.getMonth() + 1)).slice(-2);
			let day = ('0' + date.getDate()).slice(-2);

			return `${year}-${month}-${day}`;
		},
		async editUser() {
			if (!this.validation()) return;

			let datas = { data: this.userInfo };

			let result = await axios.put(`/node/users/${this.userInfo.user_no}`, datas);

			if (result.data.changedRows == 0) {
				alert(`수정 실패\n${result.data.message}`);
			} else {
				alert('수정 성공');
				this.$router.push({ path: '/userInfo', query: { userNo: this.userInfo.user_no } });
			}
		},
		validation() {
			if (this.userInfo.user_pwd == '') {
				alert('비밀번호를 입력하세요');
				return false;
			}

			return true;
		},
	},
};
</script>
