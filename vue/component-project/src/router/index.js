import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import DataBinding from '../views/DataBinding.vue';
import ListBinding from '../views/ListBinding.vue';
import IfBinding from '../views/IfBinding.vue';
import EventBinding from '../views/OnEvent.vue';
import Option from '../views/Options.vue';

const routes = [
	{
		path: '/',
		name: 'home',
		component: HomeView,
	},
	{
		path: '/about',
		name: 'about',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
	},
	{
		path: '/databinding',
		name: 'databinding',
		component: DataBinding,
	},
	{
		path: '/listbinding',
		name: 'listbinding',
		component: ListBinding,
	},
	{
		path: '/ifbinding',
		name: 'ifbinding',
		component: IfBinding,
	},
	{
		path: '/event',
		name: 'event',
		component: EventBinding,
	},
	{
		path: '/option',
		name: 'option',
		component: Option,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
