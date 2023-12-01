<template>
	<div>
		<button type="button" v-on:click="increaseCounter">Add 1</button>
		<input v-model.number="num" />
		<button type="button" @click="setCount(num, $event), msg()">Add {{ num }}</button>
		<p>The Counter is {{ counter }}</p>
	</div>
	<hr />
	<form @click.stop="msg('form')">
		Form
		<div @click.stop="msg('div')">
			Div
			<p @click.stop="msg('p')">P <a @click.prevent.stop="msg('a')" href="http://naver.com">네이버</a></p>
		</div>
	</form>
</template>
<script>
export default {
	data() {
		return {
			counter: 0,
			num: 1,
		};
	},
	methods: {
		increaseCounter(e) {
			console.log(e);
			this.counter++;
		},
		setCount(value, e) {
			console.log(e);
			this.counter = this.counter + value;
		},
		msg(msg) {
			alert(`${msg} 클릭`);
		},
	},
};
</script>
<style scoped>
form,
form * {
	margin: 10px;
	border: 5px solid yellowgreen;
}
</style>
