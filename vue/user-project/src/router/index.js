import { createRouter, createWebHistory } from 'vue-router';
import userList from '../views/UserList.vue';
import userInfo from '../views/UserInfo.vue';
import userInsert from '../views/UserInsert.vue';
import userUpdate from '../views/UserUpdate.vue';

const routes = [
	{
		path: '/',
		name: 'userList',
		component: userList,
	},
	{
		path: '/userInfo',
		name: 'userInfo',
		component: userInfo,
	},
	{
		path: '/userInsert',
		name: 'userInsert',
		component: userInsert,
	},
	{
		path: '/userUpdate',
		name: 'userUpdate',
		component: userUpdate,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
