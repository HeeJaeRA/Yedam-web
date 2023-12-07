module.exports = {
	employeeList: `select e.emp_no, d.dept_no, h.dept_name, e.birth_date, e.first_name, e.last_name, e.gender, e.hire_date, d.from_date, d.to_date, s.salary 
	from employees AS e join dept_emp AS d on e.emp_no = d.emp_no join departments AS h on d.dept_no = h.dept_no join salaries AS s on d.emp_no = s.emp_no 
	WHERE d.to_date = CAST('9999-01-01' AS DATE) AND s.to_date = CAST('9999-01-01' AS DATE) 
	ORDER BY e.emp_no DESC LIMIT 0 , 10 `,

	employeeInfo: `select e.emp_no, d.dept_no, h.dept_name, e.birth_date, e.first_name, e.last_name, e.gender, e.hire_date, d.from_date, d.to_date, s.salary 
	from employees AS e join dept_emp AS d on e.emp_no = d.emp_no join departments AS h on d.dept_no = h.dept_no join salaries AS s on d.emp_no = s.emp_no 
	WHERE d.to_date = CAST('9999-01-01' AS DATE) AND s.to_date = CAST('9999-01-01' AS DATE) 
	AND e.emp_no = ? `,

	deptList: `select * from departments order by dept_no`,

	employeeInsert: `INSERT INTO employees SET ?`,
	deptInsert: `INSERT INTO dept_emp SET ?`,
	salaryInsert: `INSERT INTO salaries SET ?`,

	// 사원정보만 수정
	employeeUpdate: `UPDATE employees SET ? WHERE emp_no = ?`,

	// to_date 변경
	deptDelete: `UPDATE dept_emp SET to_date = ? WHERE emp_no = ?;`,
	salDelete: `UPDATE salaries SET to_date = ? WHERE emp_no = ?;`,
};
