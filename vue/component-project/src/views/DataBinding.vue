<template>
	<div>
		<h1>{{ title + ' !!!' }}</h1>
		<h2 v-bind:name="'sample'" v-text="title"></h2>
		<p v-html="tagList"></p>
		<!-- <p v-text="tagList"></p> -->
		<hr />
		<input type="text" v-model="valueModel" />
		<p>{{ typeof valueModel }}</p>
		<input type="number" v-model.lazy="numberModel" />
		<!-- <input v-model.number="numberModel" /> -->
		<p>{{ numberModel + 10000 }}</p>
		<select v-model="selModel">
			<option value="spring">봄</option>
			<option value="summer">여름</option>
			<option value="winter">겨울</option>
		</select>
		<p>{{ selModel }}</p>
		<textarea v-model="textModel"></textarea>
		<hr />
		<input type="checkbox" v-model="chData" true-value="진짜" false-value="가짜" />
		<p>{{ chData }}</p>
		<div>
			<label><input type="checkbox" value="서울" v-model="city" />서울</label>
			<label><input type="checkbox" value="대구" v-model="city" />대구</label>
			<label><input type="checkbox" value="부산" v-model="city" />부산</label>
			<p>{{ city[0] }}</p>
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {
			title: 'Hello, Vue.js',
			tagList: '<strong>Vue</strong>',
			valueModel: 'Korea',
			numberModel: 0,
			selModel: 'winter',
			textModel: '크아아악 투명드래곤이 울부짖었다',
			chData: '',
			city: [],
		};
	},
};
</script>
