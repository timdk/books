<script lang="ts">
  import type Book from "../models/book";
  import BookLink from "./BookLink.svelte";
  import CoverImage from "./CoverImage.svelte";

  export let book: Book;
  const { isbn, olid, title, description, authors } = book;
</script>

<template>
  <div class="book">
    <div class="cover">
      <BookLink {isbn}>
        <CoverImage {olid} />
      </BookLink>
    </div>
    <div class="meta">
      <p class="title">
        <BookLink {isbn}>{title}</BookLink>
      </p>
      <p class="author">{authors.join(", ")}</p>
    </div>
    <p class="description">{description}</p>
  </div>
</template>

<style lang="scss">
  .book {
    display: flex;
    align-items: flex-start;
    height: 200px;
    overflow: hidden;

    &:not(:last-child) {
      margin-bottom: 15px;
    }
  }

  .cover {
    display: block;
    width: 200px;
    height: 100%;
    flex-shrink: 0;
  }

  .meta {
    flex-basis: 20%;
    margin: 0 15px;
  }

  .title {
    margin-bottom: 15px;
    font-size: 18px;
    font-weight: bold;
  }

  .description {
    position: relative;
    flex-basis: 50%;
    height: 100%;
    background: white;
    overflow: hidden;

    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      height: 50px;
      width: 100%;
      background: linear-gradient(transparent, white);
    }
  }
</style>
