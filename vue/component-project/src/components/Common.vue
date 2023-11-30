<!-- eslint-disable vue/multi-word-component-names -->
<template>
	<div></div>
</template>
<script>
export default {
	components: [],
	data() {
		return {
			testData: '',
			today: new Date(),
		};
	},
	computed: {
		AfterYear() {
			return this.today.setFullYear(this.today.getFullYear() + 1);
		},
	},
	methods: {
		test() {
			console.log(this.testData, this.$data);
		},
	},
	watch: {},
	created() {},
	mounted() {},
};
</script>
<style></style>
