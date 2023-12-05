<template>
	<div>
		<PageTitle title="Hello, vue" />
		<!-- <PageContent
			:title="header"
			:count="10"
			:writer="['Edward']"
			:regdate="'2023-12-05'"
			:content="{ first: 'Node.js', second: 'Vue.js' }"
		/> -->
		<PageContent v-bind="info" @update-cnt="handler" />
		<hr />
		<RefComponent ref="child" />
		<br />
		<button @click="childHandler">자식 제어</button>
	</div>
</template>
<script>
import PageTitle from './PageTitle.vue';
import PageContent from './PageContent.vue';
import RefComponent from './RefComponent.vue';

export default {
	data() {
		return {
			header: '',
			info: {
				title: 'Today is',
				count: 10,
				writer: 'Hong',
				regdate: '2023-12-05',
				content: '내용 없음',
			},
		};
	},
	components: {
		PageTitle,
		PageContent,
		RefComponent,
	},
	methods: {
		handler(value) {
			alert(value);
			this.info.count = value;
		},
		childHandler() {
			// this.$refs.child.content = '100';
			this.$refs.child.content = 100;
			this.$refs.child.plusCnt();
			this.$refs.child.$refs.cBtn.click();
		},
	},
};
</script>
