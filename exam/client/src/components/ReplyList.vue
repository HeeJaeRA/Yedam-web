<template>
	<div class="card">
		<div class="card-header">댓글 목록</div>
		<div class="card-body">
			<ul class="list-group">
				<li class="list-group-item" :key="idx" v-for="(reply, idx) in replyList">
					<div class="container">
						<div class="row text-start">
							{{ reply.content }}
						</div>
						<div class="row">
							<div class="col-9 text-end">
								{{ reply.writer }}
							</div>
							<div class="col-3 text-center">
								{{ $dateFormat(reply.created_date) }}
							</div>
						</div>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import axios from 'axios';

export default {
	props: ['bno'],
	data() {
		return {
			replyList: [],
		};
	},
	created() {
		this.getReplyList();
	},
	methods: {
		async getReplyList() {
			let result = await axios.get(`api/reply?bno=${this.bno}`).catch((err) => console.log(err));
			this.replyList = result.data;
		},
	},
};
</script>
