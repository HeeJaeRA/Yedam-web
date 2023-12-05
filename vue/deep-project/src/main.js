import { createApp } from 'vue';
import App from './App.vue';
import mixin from './mixin';

createApp(App)
	.mixin(mixin)
	.directive('focus', {
		mounted(el, binding, vnode, prevVNode) {
			console.log('mounted', el, binding, vnode, prevVNode);
			if (binding.value) {
				el.focus();
			}
		},
		updated(el, binding, vnode, prevVNode) {
			console.log('updated', el, binding, vnode, prevVNode);
			if (binding.value) {
				el.focus();
			}
		},
	})
	.mount('#app');
