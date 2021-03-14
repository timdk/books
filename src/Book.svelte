<script lang="ts">
  import type Book from "./models/book";
  import BookLink from "./BookLink.svelte";

  export let book: Book;
  export let isbn: string;

  const imgSrc = `http://covers.openlibrary.org/b/isbn/${isbn}-S.jpg`;
</script>

<template>
  <div class="book">
    <BookLink {isbn}><img src={imgSrc} alt="" /></BookLink>
    <div class="meta">
      <p class="title"><BookLink {isbn}>{book.title}</BookLink></p>
      <p class="author">{book.authors.join(', ')}</p>
    </div>
    <p class="description">{book.description}</p>
  </div>
</template>

<style lang="scss">
  .book {
    display: flex;
    align-items: flex-start;
    padding: 15px;
  }

  .meta {
    margin: 0 15px;
  }

  .title {
    font-size: 18px;
    font-weight: bold;
  }
</style>
