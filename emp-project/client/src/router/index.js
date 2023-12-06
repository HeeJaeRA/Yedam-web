import { createRouter, createWebHistory } from 'vue-router';
import empList from '../views/EmpList.vue';
import empInfo from '../views/EmpInfo.vue';

const routes = [
	{
		path: '/',
		name: 'empList',
		component: empList,
	},
	{
		path: '/empInfo',
		name: 'empInfo',
		component: empInfo,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
