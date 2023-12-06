<template>
	<div class="container">
		<div class="row">
			<table class="table">
				<tr>
					<th class="text-right table-primary">직원번호</th>
					<td class="text-center">{{ empInfo.emp_no }}</td>
				</tr>
				<tr>
					<th class="text-right table-primary">부서번호</th>
					<td class="text-center">{{ empInfo.dept_no }}</td>
				</tr>
				<tr>
					<th class="text-right table-primary">부서명</th>
					<td class="text-center">{{ empInfo.dept_name }}</td>
				</tr>
				<tr>
					<th class="text-right table-primary">생년월일</th>
					<td class="text-center">{{ dataFormat(empInfo.birth_date) }}</td>
				</tr>
				<tr>
					<th class="text-right table-primary">이름</th>
					<td class="text-center">{{ empInfo.first_name + ' ' + empInfo.last_name }}</td>
				</tr>
				<tr>
					<th class="text-right table-primary">성별</th>
					<td class="text-center">{{ genderFormat }}</td>
				</tr>
				<tr>
					<th class="text-right table-primary">입사일자</th>
					<td class="text-center">{{ dataFormat(empInfo.hire_date) }}</td>
				</tr>
				<tr>
					<th class="text-right table-primary">발령일자</th>
					<td class="text-center">{{ dataFormat(empInfo.from_date) }}</td>
				</tr>
				<tr>
					<th class="text-right table-primary">급여</th>
					<td class="text-center">{{ empInfo.salary }}</td>
				</tr>
			</table>
		</div>
		<div class="row">
			<button @click="editEmp(empInfo.emp_no)" class="btn btn-warning">수정</button>
			<router-link to="/" class="btn btn-success">목록으로</router-link>
			<button @click="deleteEmp(empInfo.emp_no)" class="btn btn-danger">삭제</button>
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
		};
	},
	created() {
		this.searchNo = this.$route.query.num;
		this.getEmpInfo();
	},
	computed: {
		genderFormat() {
			if (this.empInfo.gender == 'M') {
				return '남';
			} else if (this.empInfo.gender == 'F') {
				return '여';
			} else {
				return '';
			}
		},
	},
	methods: {
		async getEmpInfo() {
			let result = await axios.get(`/api/employees/${this.searchNo}`).catch((err) => console.log(err));
			console.log(result.data);
			this.empInfo = result.data;
		},
		async deleteEmp(empNo) {
			let datas = { data: '2023-12-06' };
			let result = await axios.delete(`/api/employees/${empNo}`, datas).catch((err) => console.log(err));
			console.log(result);
			// let count = result.data.changedRows;
			// if (count == 0) {
			// 	alert('삭제 실패');
			// } else {
			// 	alert('삭제 성공');
			// 	this.$router.push({ name: 'empList' });
			// }
		},
		editEmp(Enum) {
			this.$router.push({ path: '/empUpdate', query: { num: Enum } });
		},
		dataFormat(value) {
			let date = new Date(value);
			let year = date.getFullYear();
			let month = ('0' + (date.getMonth() + 1)).slice(-2);
			let day = ('0' + date.getDate()).slice(-2);
			return `${year}-${month}-${day}`;
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
