import { createRouter, createWebHistory } from 'vue-router';
import empList from '../views/EmpList.vue';
import empInfo from '../views/EmpInfo.vue';
import empInsert from '../views/EmpInsert.vue';
import empUpdate from '../views/EmpUpdate.vue';

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
	{
		path: '/empInsert',
		name: 'empInsert',
		component: empInsert,
	},
	{
		path: '/empUpdate',
		name: 'empUpdate',
		component: empUpdate,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
