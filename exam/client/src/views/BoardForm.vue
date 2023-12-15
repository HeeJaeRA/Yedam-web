<template>
	<div>
		<table>
			<tr>
				<th>No.</th>
				<td>
					<input type="number" v-model="boardInfo.NO" readonly />
				</td>
			</tr>
			<tr>
				<th>제목</th>
				<td>
					<input type="text" v-model="boardInfo.TITLE" />
				</td>
			</tr>
			<tr>
				<th>작성자</th>
				<td>
					<input type="text" v-model="boardInfo.WRITER" />
				</td>
			</tr>
			<tr>
				<th>내용</th>
				<td>
					<input type="text" class="bcon" v-model="boardInfo.CONTENT" />
				</td>
			</tr>
			<tr>
				<th>작성일자</th>
				<td>
					<input type="text" v-model="boardInfo.CREATED_DATE" />
				</td>
			</tr>
		</table>
		<button class="btn btn-success" @click="isUpdated ? boardUpdate() : boardInsert()">저장</button>
	</div>
</template>
<script>
import axios from 'axios';

export default {
	data() {
		return {
			isUpdated: false,
			searchNo: '',
			boardInfo: {},
		};
	},
	created() {
		this.searchNo = this.$route.query.bno;

		if (this.searchNo > 0) {
			this.getBoardInfo();
			this.isUpdated = true;
		} else {
			this.boardInfo.CREATED_DATE = this.getToday();
		}
	},
	methods: {
		async getBoardInfo() {
			let result = await axios.get(`/api/board/${this.searchNo}`).catch((err) => console.log(err));
			this.boardInfo = result.data;
			this.boardInfo.CREATED_DATE = this.$dateFormat(this.boardInfo.CREATED_DATE);
		},
		getToday() {
			return this.$dateFormat('');
		},

		async boardInsert() {
			let data = {
				param: this.boardInfo,
			};
			let result = await axios.post('/api/board', data);
			if (result.data.affectedRows > 0) {
				let num = result.data.insertId;
				alert('등록 성공\n게시글 번호: ' + num);
			} else {
				alert('등록 실패');
			}
		},

		async boardUpdate() {
			let data = {
				param: {
					TITLE: this.boardInfo.TITLE,
					WRITER: this.boardInfo.WRITER,
					CONTENT: this.boardInfo.CONTENT,
					CREATED_DATE: this.boardInfo.CREATED_DATE,
				},
			};
			let result = await axios.put(`/api/board/${this.boardInfo.NO}`, data);
			if (result.data.changedRows > 0) {
				alert('수정 성공');
			} else {
				alert('수정 실패');
			}
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
.bcon {
	width: 700px;
	height: 300px;
}
</style>
