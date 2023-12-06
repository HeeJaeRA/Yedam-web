<template>
	<div class="container">
		<div class="row">
			<table class="table">
				<tr>
					<th class="text-right table-primary">직원번호</th>
					<td class="text-center"><input type="text" v-model="emp_no" @input="getEmpNo()" /></td>
					<!-- <td>{{ 'emp번호' + empInfo.emp_no }}</td>
					<td>{{ 'dept번호' + deptInfo.emp_no }}</td>
					<td>{{ 'sal번호' + salInfo.emp_no }}</td> -->
				</tr>
				<tr>
					<th class="text-right table-primary">부서명</th>
					<td class="text-center">
						<select v-model="deptInfo.dept_no">
							<option v-for="(dept, index) in depts" :key="index" :value="dept.dept_no">
								{{ dept.dept_name }}
							</option>
						</select>
					</td>
					<!-- <td>{{ '번호' + deptInfo.dept_no }}</td> -->
				</tr>
				<tr>
					<th class="text-right table-primary">생년월일</th>
					<td class="text-center"><input type="date" v-model="empInfo.birth_date" /></td>
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
						<input type="radio" v-model="empInfo.gender" value="M" />남자
						<input type="radio" v-model="empInfo.gender" value="F" />여자
					</td>
				</tr>
				<tr>
					<th class="text-right table-primary">입사일자</th>
					<td class="text-center"><input type="date" v-model="empInfo.hire_date" /></td>
				</tr>
				<tr>
					<th class="text-right table-primary">발령일자</th>
					<td class="text-center"><input type="date" v-model="from_date" @input="getFromdate()" /></td>
					<!-- <td>{{ 'dept날짜' + deptInfo.from_date }}</td>
					<td>{{ 'sal날짜' + salInfo.from_date }}</td> -->
				</tr>
				<tr>
					<th class="text-right table-primary">급여</th>
					<td class="text-center"><input type="text" v-model="salInfo.salary" /></td>
				</tr>
			</table>
		</div>
		<div class="row">
			<button class="btn btn-success" @click="addEmp">저장</button>
		</div>
	</div>
</template>
<script>
import axios from 'axios';

export default {
	data() {
		return {
			emp_no: '',
			from_date: '',
			empInfo: {
				emp_no: '',
				birth_date: '',
				first_name: '',
				last_name: '',
				gender: '',
				hire_date: '',
			},
			deptInfo: {
				emp_no: '',
				dept_no: '',
				from_date: '',
				to_date: '9999-01-01',
			},
			salInfo: {
				emp_no: '',
				salary: '',
				from_date: '',
				to_date: '9999-01-01',
			},
			depts: '',
		};
	},
	created() {
		this.empInfo.hire_date = this.getToday();
		this.getDept();
	},
	methods: {
		async getDept() {
			let result = await axios.get(`/api/dept`).catch((err) => console.log(err));
			this.depts = result.data;
		},
		async addEmp() {
			if (!this.validation()) return;

			let datas = {
				emp: this.empInfo,
				dept: this.deptInfo,
				sal: this.salInfo,
			};
			let result = await axios.post(`/api/employees/`, datas).catch((err) => console.log(err));

			let count = result.data.length;

			if (count == 3) {
				alert('등록 성공');
				this.$router.push({ name: 'empList' });
			} else {
				alert(`등록 실패\n${result.data.message}`);
			}
		},
		getEmpNo() {
			this.empInfo.emp_no = this.emp_no;
			this.deptInfo.emp_no = this.emp_no;
			this.salInfo.emp_no = this.emp_no;
		},
		getFromdate() {
			this.deptInfo.from_date = this.from_date;
			this.salInfo.from_date = this.from_date;
		},
		getToday() {
			let today = new Date();
			let year = today.getFullYear();
			let month = ('0' + (today.getMonth() + 1)).slice(-2);
			let day = ('0' + today.getDate()).slice(-2);

			return `${year}-${month}-${day}`;
		},
		validation() {
			if (this.empInfo.emp_no == '') {
				alert('직원번호를 입력하세요');
				return false;
			}

			return true;
		},
	},
};
</script>
