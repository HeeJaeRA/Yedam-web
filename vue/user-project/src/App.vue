<template>
	<div>
		<Header />
		<router-view />
	</div>
</template>
<script>
import Header from './layouts/header.vue';
export default {
	components: {
		Header,
	},
};
</script>
