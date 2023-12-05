<template>
	<table>
		<tr>
			<th>제목</th>
			<td>{{ title }}</td>
			<th>조회수</th>
			<td>{{ readCnt }}</td>
		</tr>
		<tr>
			<th>작성자</th>
			<td>{{ writer }}</td>
			<th>작성일자</th>
			<!-- mixin method -->
			<td>{{ $dateFormat(regdate, 'yyyy년 MM월 dd일') }}</td>
		</tr>
		<tr>
			<th>내용</th>
			<td colspan="3">{{ content }}</td>
		</tr>
		<tr>
			<td colspan="4">
				<button @click="updateCnt">새로고침</button>
			</td>
		</tr>
	</table>
</template>
<script>
// import AppMix from '../mixin';
export default {
	// props: ['title', 'count', 'writer', 'regdate', 'content'],
	// mixins: [AppMix],
	props: {
		title: {
			type: String,
			default: '제목',
		},
		count: {
			type: Number,
			default: 0,
		},
		writer: {
			type: [String, Object],
			default: function () {
				return { first: 'Edward', second: 'Ian' };
			},
		},
		regdate: {
			required: true,
			validator: function (value) {
				let format = /[0-9][0-9][0-9][0-9]-[0-9][0-9]-[0-9][0-9]/;
				return value.match(format) != null;
			},
		},
		content: String,
	},
	computed: {
		readCnt() {
			return this.count + 1;
		},
	},
	// watch: {
	// 	readCnt() {
	// 		this.$emit('update-cnt', this.readCnt);
	// 	},
	// },
	methods: {
		updateCnt() {
			this.$emit('update-cnt', this.readCnt);
		},
	},
};
</script>
