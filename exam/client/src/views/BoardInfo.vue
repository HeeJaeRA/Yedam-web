<template>
	<table>
		<tr>
			<th>번호</th>
			<td>{{ boardInfo.NO }}</td>
			<th>작성일</th>
			<td class="wdate">{{ $dateFormat(boardInfo.CREATED_DATE) }}</td>
			<th>이름</th>
			<td class="wname">{{ boardInfo.WRITER }}</td>
		</tr>
		<tr>
			<th colspan="2">제목</th>
			<td colspan="4">{{ boardInfo.TITLE }}</td>
		</tr>
		<tr>
			<td class="bcontent" colspan="6">{{ boardInfo.CONTENT }}</td>
		</tr>
	</table>
	<br />
	<button @click="editBoard(boardInfo.NO)" class="btn btn-warning">수정</button>
	<br /><br />
	<template v-if="count != 0">
		<table>
			<tr>
				댓글 목록
			</tr>
			<tr :key="idx" v-for="(reply, idx) in reply">
				<td class="rcon">{{ reply.CONTENT }}{{ reply.WRITER }} {{ $dateFormat(reply.CREATED_DATE) }}</td>
			</tr>
		</table>
	</template>
	<template v-else>
		<p>댓글 목록이 없습니다.</p>
	</template>
</template>

<script>
import axios from 'axios';

export default {
	data() {
		return {
			searchNo: '',
			boardInfo: {},
			reply: [],
		};
	},
	created() {
		this.searchNo = this.$route.query.bno;
		this.getBoardInfo();
		this.getReply();
	},
	computed: {
		count() {
			return this.reply.length;
		},
	},
	methods: {
		async getBoardInfo() {
			let result = await axios.get(`/api/board/${this.searchNo}`).catch((err) => console.log(err));
			this.boardInfo = result.data;
		},
		editBoard(bno) {
			this.$router.push({ path: '/boardForm', query: { bno: bno } });
		},
		async getReply() {
			let result = await axios.get(`api/reply/${this.searchNo}`).catch((err) => console.log(err));
			this.reply = result.data;
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
th {
	background-color: aquamarine;
}
th,
td {
	width: 100px;
	border: 1px solid gray;
}
.wdate,
.wname {
	width: 250px;
}
.bcontent {
	height: 300px;
}
.rcon {
	width: 100%;
	height: 50px;
}
</style>
