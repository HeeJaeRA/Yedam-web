import { createRouter, createWebHistory } from 'vue-router';
import userList from '../views/UserList.vue';

const routes = [
	{
		path: '/',
		name: 'userList',
		component: userList,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
