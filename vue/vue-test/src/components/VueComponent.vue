<template>
	<div>
		<label><input type="text" v-model="msg" /></label>
		<p>{{ msg }}</p>
	</div>
</template>

<script>
export default {
	name: 'VueComponent',
	data() {
		return {
			msg: '',
		};
	},
};
</script>

<style scoped>
p {
	background-color: papayawhip;
	text-align: center;
}
</style>
