<template>
	<br />
	<div class="container">
		<table>
			<!-- <caption>Total: {{ count }}</caption> -->
			<tr>
				<th>직원번호</th>
				<!-- <th>부서번호</th> -->
				<th>부서명</th>
				<th>생년월일</th>
				<th>이름</th>
				<th>성별</th>
				<th>입사일자</th>
				<!-- <th>발령일자</th> -->
				<!-- <th>급여</th> -->
			</tr>
			<tr :key="i" v-for="(emp, i) in empList" @click="moveEmpInfo(emp.emp_no)">
				<td>{{ emp.emp_no }}</td>
				<!-- <td>{{ emp.dept_no }}</td> -->
				<td>{{ emp.dept_name }}</td>
				<td>{{ $dateFormat(emp.birth_date) }}</td>
				<td>{{ emp.last_name + ' ' + emp.first_name }}</td>
				<td>{{ emp.gender == 'M' ? '남' : '여' }}</td>
				<td>{{ $dateFormat(emp.hire_date) }}</td>
				<!-- <td>{{ dataFormat(emp.from_date) }}</td> -->
				<!-- <td>{{ emp.salary }}</td> -->
			</tr>
		</table>
		<br />
		<nav aria-label="Page navigation example">
			<ul class="pagination justify-content-center">
				<li class="page-item disabled">
					<a class="page-link">Previous</a>
				</li>
				<li class="page-item"><a class="page-link" href="#">1</a></li>
				<li class="page-item"><a class="page-link" href="#">2</a></li>
				<li class="page-item"><a class="page-link" href="#">3</a></li>
				<li class="page-item">
					<a class="page-link" href="#">Next</a>
				</li>
			</ul>
		</nav>
	</div>
</template>
<script>
import axios from 'axios';
// const axios = require('axios').default;

export default {
	data() {
		return {
			empList: [],
		};
	},
	computed: {
		count() {
			return this.empList.length;
		},
	},
	created() {
		this.getEmpList();
	},
	methods: {
		async getEmpList() {
			let result = await axios.get('/api/employees').catch((err) => {
				console.log(err);
			});
			let list = result.data;
			this.empList = list;
		},
		moveEmpInfo(Enum) {
			this.$router.push({ path: '/empInfo', query: { num: Enum } });
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
