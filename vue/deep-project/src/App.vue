<template>
	<div>
		<input type="text" v-model.lazy="selected" v-focus="isFocused" />
		<component v-bind:is="selected"></component>
	</div>
</template>

<script>
import PropsCom from './components/PropsComponent.vue';
import SlotCom from './components/TextModal.vue';
import ComAPI from './components/CompositionInterface.vue';

export default {
	name: 'App',
	data() {
		return {
			selected: 'PropsCom',
			isFocused: true,
		};
	},
	components: {
		PropsCom,
		SlotCom,
		ComAPI,
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
	margin-top: 60px;
}
table {
	margin: 0 auto;
	padding: 3px;
}
tr,
th {
	width: 200px;
	height: 30px;
}
</style>
