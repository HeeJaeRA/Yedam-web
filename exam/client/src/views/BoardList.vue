<template>
	<div>
		<table>
			<tr>
				<th>No.</th>
				<th class="title">제목</th>
				<th class="writer">작성자</th>
				<th>작성일자</th>
				<th>댓글수</th>
			</tr>
			<tr :key="idx" v-for="(board, idx) in boardList" @click="moveBoardInfo(board.NO)">
				<td>{{ board.NO }}</td>
				<td>{{ board.TITLE }}</td>
				<td>{{ board.WRITER }}</td>
				<td>{{ $dateFormat(board.CREATED_DATE) }}</td>
				<td>{{ board.c_length }}</td>
			</tr>
		</table>
	</div>
</template>

<script>
import axios from 'axios';

export default {
	data() {
		return {
			boardList: [],
		};
	},
	created() {
		this.getBoardList();
	},
	methods: {
		async getBoardList() {
			let result = await axios.get('/api/board').catch((err) => {
				console.log(err);
			});
			let list = result.data;
			this.boardList = list;
		},
		moveBoardInfo(Bno) {
			this.$router.push({ path: '/boardInfo', query: { bno: Bno } });
		},
	},
};
</script>

<style scoped>
table {
	margin: 0 auto;
}
tr {
	height: 50px;
}
th,
td {
	width: 200px;
}
.title {
	width: 400px;
}
.writer {
	width: 300px;
}
</style>
