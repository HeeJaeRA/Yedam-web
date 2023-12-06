<template>
	<div class="container">
		<div class="row">
			<table class="table">
				<tr>
					<th class="text-right table-primary">직원번호</th>
					<td class="text-center"><input type="text" v-model="empInfo.emp_no" readonly /></td>
				</tr>
				<tr>
					<th class="text-right table-primary">부서명</th>
					<td class="text-center">
						<select v-model="empInfo.dept_no">
							<option v-for="(dept, index) in depts" :key="index" :value="dept.dept_no">
								{{ dept.dept_name }}
							</option>
						</select>
					</td>
				</tr>
				<tr>
					<th class="text-right table-primary">생년월일</th>
					<td class="text-center"><input type="date" v-model="empInfo.birth_date" readonly /></td>
				</tr>
				<tr>
					<th class="text-right table-primary">성</th>
					<td class="text-center"><input type="text" v-model="empInfo.first_name" /></td>
				</tr>
				<tr>
					<th class="text-right table-primary">이름</th>
					<td class="text-center"><input type="text" v-model="empInfo.last_name" /></td>
				</tr>
				<tr>
					<th class="text-right table-primary">성별</th>
					<td class="text-center">
						<input type="radio" v-model="empInfo.gender" value="M" onclick="return false;" />남자
						<input type="radio" v-model="empInfo.gender" value="F" onclick="return false;" />여자
					</td>
				</tr>
				<tr>
					<th class="text-right table-primary">입사일자</th>
					<td class="text-center"><input type="date" v-model="empInfo.hire_date" readonly /></td>
				</tr>
				<tr>
					<th class="text-right table-primary">발령일자</th>
					<td class="text-center"><input type="date" v-model="empInfo.from_date" /></td>
				</tr>
				<tr>
					<th class="text-right table-primary">급여</th>
					<td class="text-center"><input type="text" v-model="empInfo.salary" /></td>
				</tr>
			</table>
		</div>
		<div class="row">
			<button class="btn btn-success" @click="editEmp">수정</button>
		</div>
	</div>
</template>
<script>
import axios from 'axios';

export default {
	data() {
		return {
			searchNo: '',
			empInfo: {},
			depts: '',
		};
	},
	created() {
		this.searchNo = this.$route.query.num;
		this.getEmpInfo();
		this.getDept();
	},
	methods: {
		async getDept() {
			let result = await axios.get(`/api/dept`).catch((err) => console.log(err));
			this.depts = result.data;
		},
		async getEmpInfo() {
			let result = await axios.get(`/api/employees/${this.searchNo}`).catch((err) => console.log(err));
			this.empInfo = result.data;
			let hireDate = this.dateFormat(this.empInfo.hire_date);
			this.empInfo.hire_date = hireDate;
			let birthDate = this.dateFormat(this.empInfo.birth_date);
			this.empInfo.birth_date = birthDate;
		},
		dateFormat(value) {
			let date = new Date(value);
			let year = date.getFullYear();
			let month = ('0' + (date.getMonth() + 1)).slice(-2);
			let day = ('0' + date.getDate()).slice(-2);

			return `${year}-${month}-${day}`;
		},
		async editEmp() {
			let datas = {
				data: {
					birth_date: this.empInfo.birthDate,
					first_name: this.empInfo.first_name,
					last_name: this.empInfo.last_name,
				},
			};

			let result = await axios.put(`/api/employees/${this.empInfo.emp_no}`, datas);

			if (result.data.changedRows == 0) {
				alert(`수정 실패\n${result.data.message}`);
			} else {
				alert('수정 성공');
				this.$router.push({ path: '/empInfo', query: { num: this.empInfo.emp_no } });
			}
		},
	},
};
</script>
