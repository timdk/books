<script lang="ts">
  export let olid: string;
  export let className: string = null;

  // We should use OLID or CoverID to avoid rate limiting
  // https://openlibrary.org/dev/docs/api/covers
  const src = `https://covers.openlibrary.org/b/olid/${olid}-M.jpg`;
</script>

<template>
    <img class={className} {src} alt=""/>
</template>

<style lang="scss">
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
</style>