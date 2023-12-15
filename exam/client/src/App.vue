<template>
	<Header />
	<!-- key 속성 라우터 호출할때마다 페이지 리로드 -->
	<router-view :key="$route.fullPath" />
	<Footer />
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
