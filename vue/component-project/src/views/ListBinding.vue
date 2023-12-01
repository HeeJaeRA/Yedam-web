<template>
	<div>
		<button v-on:click="addData">+</button>
		<button v-on:click="minusData">-</button>
		<table>
			<thead>
				<tr>
					<th>제품명</th>
					<th>가격</th>
					<th>카테고리</th>
					<th>배송료</th>
					<th>삭제</th>
				</tr>
			</thead>
			<tbody>
				<!-- <tr v-for="item in productList"> -->
				<tr :key="i" v-for="(item, i) in productList">
					<td>{{ item.product_name }}</td>
					<td>{{ item.price }}</td>
					<td>{{ item.category }}</td>
					<td>{{ item.delivery_price }}</td>
					<td><button v-on:click="delData(i)">X</button></td>
				</tr>
			</tbody>
		</table>
	</div>
</template>
<script>
let data = [
	{
		product_name: '기계식 키보드',
		price: 25000,
		category: '노트북/태블릿',
		delivery_price: 5000,
	},
	{
		product_name: '무선마우스',
		price: 12000,
		category: '노트북/태블릿',
		delivery_price: 5000,
	},
	{
		product_name: '아이패드',
		price: 725000,
		category: '노트북/태블릿',
		delivery_price: 5000,
	},
	{
		product_name: '태블릿거치대',
		price: 32000,
		category: '노트북/태블릿',
		delivery_price: 5000,
	},
	{
		product_name: '무선충전기',
		price: 42000,
		category: '노트북/태블릿',
		delivery_price: 5000,
	},
];

export default {
	data() {
		return {
			productList: data,
		};
	},
	methods: {
		addData() {
			let obj = {
				product_name: '제품명',
				price: 0,
				category: '카테고리',
				delivery_price: 0,
			};

			this.productList.push(obj);

			// let index = this.productList.length;
			// this.productList[index] = obj;
		},
		minusData() {
			this.productList.pop();
		},
		delData(i) {
			this.productList.splice(i, 1);
		},
	},
};
</script>

<style scoped>
table {
	font-family: Arial, Helvetica, sans-serif;
	border-collapse: collapse;
	width: 100%;
}
td,
th {
	border: 1px solid black;
	text-align: center;
	padding: 8px;
}
</style>
