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
			<p>{{ city }}</p>
		</div>
		<div>
			<label><input type="radio" value="독서" v-model="hobby" />독서</label>
			<label><input type="radio" value="영화" v-model="hobby" />영화</label>
			<label><input type="radio" value="운동" v-model="hobby" />운동</label>
			<p>{{ hobby }}</p>
		</div>
		<hr />
		<p>하아아안라아아아보오오옹</p>
		<img v-bind:style="styleData" v-bind:src="imgUrl" />
		<!-- <img v-bind:style="[backSetting, addStyle]" v-bind:src="imgUrl" /> -->
		<hr />
		<div class="container" v-bind:class="{ active: isActive, 'text-red': hasError }">Class Binding First</div>
		<br />
		<div class="container" v-bind:class="myClass">Class Binding Second</div>
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
			hobby: '운동',
			imgUrl: './assets/han.jpg',
			styleData: {
				backgroundColor: 'skyblue',
				width: '150px',
				height: '200px',
			},
			// backSetting: 'background-color:skyblue; width:150px; ', addStyle: 'height:200px',
			isActive: true,
			// hasError: false,
			myClass: 'active',
		};
	},
	computed: {
		hasError() {
			return !this.isActive;
		},
	},
};
</script>
<style scoped>
.container {
	width: 100%;
	height: 100px;
}

.active {
	background-color: aquamarine;
	font-weight: bold;
}

.text-red {
	color: red;
}
</style>
