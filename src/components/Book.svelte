<script lang="ts">
  import type Book from "./models/book";
  import BookLink from "./BookLink.svelte";

  export let book: Book;
  const { isbn, title, description, authors } = book;

  const imgSrc = `https://covers.openlibrary.org/b/isbn/${isbn}-S.jpg`;
</script>

<template>
  <div class="book">
    <div class="cover">
      <BookLink {isbn}>
        <img class="cover-img" src="https://via.placeholder.com/100x150.png" alt="" />
      </BookLink>
    </div>
    <div class="meta">
      <p class="title"><BookLink {isbn}>{title}</BookLink></p>
      <p class="author">{authors.join(', ')}</p>
    </div>
    <p class="description">{description}</p>
  </div>
</template>

<style lang="scss">
  .book {
    display: flex;
    align-items: flex-start;
    max-height: 150px;
    overflow: hidden;
    
    &:not(:last-child) { 
      margin-bottom: 15px;
    }
  }

  .cover {
    display: block;
    width: 150px;
    flex-shrink: 0;
  }

  .cover-img {
    height: 100%;
    width: auto;
  }

  .meta {
    flex-basis: 20%;
    margin: 0 15px;
  }

  .title {
    font-size: 18px;
    font-weight: bold;
  }

  .description {
    flex-basis: 50%;
  }
</style>
