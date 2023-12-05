<template>
	<div>
		<input type="text" v-model.number="content" />
		<p>{{ content }}</p>
		<button ref="cBtn" @click="plusCnt">더하기</button>
	</div>
</template>
<script>
export default {
	data() {
		return {
			content: '',
		};
	},
	methods: {
		plusCnt() {
			if (typeof this.content == 'number') {
				let sum = Number(this.content) + 100;
				this.content = sum;
			} else {
				alert('NaN');
			}
		},
	},
};
</script>
