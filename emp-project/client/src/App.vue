<template>
	<div>
		<Header />
		<router-view />
		<Footer />
	</div>
</template>

<script>
import Header from './layouts/header.vue';
import Footer from './layouts/footer.vue';
export default {
	components: {
		Header,
		Footer,
	},
};
</script>
<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}
</style>
