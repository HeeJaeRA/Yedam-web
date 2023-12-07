import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import BoardList from '../views/BoardList.vue';
import BoardInfo from '../views/BoardInfo.vue';
import BoardForm from '../views/BoardForm.vue';

const routes = [
	{
		path: '/',
		name: 'home',
		component: HomeView,
	},
	{
		path: '/boardList',
		name: 'boarList',
		component: BoardList,
	},
	{
		path: '/boardInfo',
		name: 'boardInfo',
		component: BoardInfo,
	},
	{
		path: '/boardForm',
		name: 'boardForm',
		component: BoardForm,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
