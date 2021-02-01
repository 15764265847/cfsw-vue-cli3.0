import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/home.vue';

const router = createRouter({
	history: createWebHistory('/'),
	routes: [{
		name: 'home',
		path: '/',
		component: Home
	}]
});

export default router;
