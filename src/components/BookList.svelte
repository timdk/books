<script>
	import { filteredBooks } from '../stores';
	import Book from "./Book.svelte";
</script>

<template>
	<section class="book-list">
		{#each $filteredBooks as book}
			<Book {book} />
		{/each}
	</section>
</template>	

<style>
	.book-list {
		padding: 15px;
		background-color: #fff;
		border-radius: 5px;
		border: 1px solid #bdbdbd;
	}
</style>