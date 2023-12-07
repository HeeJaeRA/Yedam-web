import { createRouter, createWebHistory } from 'vue-router';
import mainPage from '../views/MainComponent.vue';
import empList from '../views/EmpList.vue';
import empInfo from '../views/EmpInfo.vue';
import empInsert from '../views/EmpInsert.vue';
import empUpdate from '../views/EmpUpdate.vue';
import empForm from '../views/EmpFormView.vue';

const routes = [
	{
		path: '/empForm',
		name: 'empForm',
		component: empForm,
	},
	{
		path: '/',
		name: 'mainPage',
		component: mainPage,
	},
	{
		path: '/empList',
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
