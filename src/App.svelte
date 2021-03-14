<script>
	import Book from "./Book.svelte";
	import bookData from "../data/data.json";
</script>

<template>
	<h1>Books</h1>

	{#each Object.entries(bookData) as [isbn, book]}
		<Book {isbn} {book} />
	{/each}
</template>

<style>
	:global(p) {
		margin: 0;
	}
</style>
