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
					<td class="text-center">{{ $dateFormat(empInfo.birth_date) }}</td>
				</tr>
				<tr>
					<th class="text-right table-primary">이름</th>
					<td class="text-center">{{ empInfo.last_name + ' ' + empInfo.first_name }}</td>
				</tr>
				<tr>
					<th class="text-right table-primary">성별</th>
					<td class="text-center">{{ genderFormat }}</td>
				</tr>
				<tr>
					<th class="text-right table-primary">입사일자</th>
					<td class="text-center">{{ $dateFormat(empInfo.hire_date) }}</td>
				</tr>
				<tr>
					<th class="text-right table-primary">발령일자</th>
					<td class="text-center">{{ $dateFormat(empInfo.from_date) }}</td>
				</tr>
				<tr>
					<th class="text-right table-primary">급여</th>
					<td class="text-center">{{ salFormat }}</td>
				</tr>
			</table>
		</div>
		<div class="row">
			<button @click="editEmp(empInfo.emp_no)" class="btn btn-warning">수정</button>
			<router-link to="/empList" class="btn btn-success">목록으로</router-link>
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
			today: '',
		};
	},
	created() {
		this.searchNo = this.$route.query.num;
		this.getEmpInfo();
		this.fireDay();
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
		salFormat() {
			return String(this.empInfo.salary).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
		},
	},
	methods: {
		fireDay() {
			let firedate = new Date();
			this.today = this.dateFormat(firedate);
		},
		dateFormat(value) {
			let date = new Date(value);
			let year = date.getFullYear();
			let month = ('0' + (date.getMonth() + 1)).slice(-2);
			let day = ('0' + date.getDate()).slice(-2);

			return `${year}-${month}-${day}`;
		},
		async getEmpInfo() {
			let result = await axios.get(`/api/employees/${this.searchNo}`).catch((err) => console.log(err));
			this.empInfo = result.data;
		},
		async deleteEmp(empNo) {
			// let date = prompt('퇴사 날짜');
			// console.log(date);
			let result = await axios
				.delete(`/api/employees/${empNo}`, { data: { data: this.today } })
				.catch((err) => console.log(err));
			// console.log(result);
			// console.log(result.data.length);
			let count = result.data.length;
			if (count == 2) {
				alert('삭제 성공');
				this.$router.push({ name: 'empList' });
			} else {
				alert('삭제 실패');
			}
		},
		editEmp(Enum) {
			this.$router.push({ path: '/empUpdate', query: { num: Enum } });
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
