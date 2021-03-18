<script>
	import Filter from './components/Filter.svelte';
	import BookList from './components/BookList.svelte';
</script>

<svelte:head>
	<title>Books</title>
	<meta name="robots" content="noindex nofollow" />
	<html lang="en" />
</svelte:head>

<template>
	<main>
		<h1>Books</h1>
		<Filter />
		<BookList />
	</main>
</template>

<style lang="scss">
	:global(html) {
		background: #f3f3f3;
	}

	:global(p) {
		margin: 0;
	}

	main {
		max-width: 1100px;
		margin-left: auto;
		margin-right: auto;
		padding-left: 15px;
		padding-right: 15px;
	}
</style>
