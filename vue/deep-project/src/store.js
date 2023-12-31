import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';

const store = createStore({
	plugins: [
		createPersistedState({
			paths: ['cart'],
		}),
	],
	state() {
		return {
			cart: [
				{
					product_id: 1,
					product_name: '아이폰 거치대',
					category: 'A',
				},
			],
			count: 0,
		};
	},
	getters: {
		cartCount(state) {
			return state.cart.length;
		},
	},
	// mutations, actions를 통한 속성 업데이트 가능.
	// mutations는 동기식으로 처리 actions는 비동기식
	mutations: {
		increment(state) {
			state.count++;
		},
		addProduct(state, info) {
			state.cart.push(info);
		},
	},
	actions: {
		delay(context, info) {
			setTimeout(() => context.commit('addProduct', info), 2000);
		},
	},
});

export default store;
