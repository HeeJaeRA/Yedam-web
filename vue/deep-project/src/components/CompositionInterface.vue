<!-- Composition API 예제 -->
<template>
	<h3>{{ title }}</h3>
	<p>저자: {{ author.name }}</p>
	<template v-if="isWrite">
		<p :key="idx" v-for="(info, idx) in author.books">
			{{ info }}
		</p>
	</template>
	<p v-else>아직 출간한 책이 없습니다</p>
	<button @click="addBookInfo">+</button>
</template>

<script setup>
import { reactive, ref, computed, watch } from 'vue';

const author = reactive({
	name: 'John Doe',
	books: ['Vue 2 - Advanced Guide', 'Vue 3 - Basic Guide', 'Vue 4 - The Mystery'],
}); // data(): { return { author: } }

const title = ref('제목'); // title.value

const isWrite = computed(() => {
	return author.books.length > 0 ? 'T' : 'F';
});

watch(author.books, (info) => {
	console.log(info[info.length - 1]);
});

const addBookInfo = () => {
	let info = 'Node.js - Javascript Runtime';
	author.books.push(info);
};
</script>
