<template>
	<div>
		<form method="addCart">
			<label> 제품ID : <input type="text" v-model="productInfo.product_id" /> </label>
			<label> 제품명 : <input type="text" v-model="productInfo.product_name" /> </label>
			<label>
				카테고리 :
				<input type="radio" value="A" v-model="productInfo.category" /> A
				<input type="radio" value="B" v-model="productInfo.category" /> B
			</label>
			<button type="button" @click="addCart">추가</button>
			<button type="button" @click="delayAdd">느리게 추가</button>
		</form>
		<label>전체 항목: {{ total }}</label>
		<table>
			<thead>
				<tr>
					<th>카테고리</th>
					<th>제품ID</th>
					<th>제품명</th>
				</tr>
			</thead>
			<tbody>
				<tr :key="idx" v-for="(info, idx) in productList">
					<td>{{ info.category }}</td>
					<td>{{ info.product_id }}</td>
					<td>{{ info.product_name }}</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
export default {
	data() {
		return {
			productInfo: {
				product_id: '',
				product_name: '',
				category: '',
			},
		};
	},
	computed: {
		productList() {
			return this.$store.state.cart;
		},
		total() {
			return this.$store.getters.cartCount;
		},
	},
	methods: {
		addCart() {
			let cloneObj = Object.assign({}, this.productInfo);
			this.productInfo = {
				product_id: '',
				product_name: '',
				category: '',
			};
			this.$store.commit('addProduct', cloneObj);
		},
		delayAdd() {
			let cloneObj = Object.assign({}, this.productInfo);
			this.productInfo = {
				product_id: '',
				product_name: '',
				category: '',
			};
			this.$store.dispatch('delay', cloneObj);
		},
	},
};
</script>

<style scoped></style>
