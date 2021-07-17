<script>
  import { filterValue } from '../stores';
</script>

<template>
  <label class="filter">
    <input class="input" type="text" placeholder="Filter" bind:value={$filterValue} />
  </label>
</template>

<style lang="scss">
  .filter {
    width: 100%;
    max-width: 1000px;
    height: 40px;
    margin: 0 auto 30px;
  }

  .input {
    width: 100%;
    height: 100%;
    padding: 0 15px;
    border: 1px solid #bdbdbd;
    border-radius: 30px;
    outline: none;
    overflow: hidden;
  }
</style>
