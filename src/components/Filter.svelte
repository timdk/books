<script>
  import { filterValue } from '../stores';
</script>

<template>
  <label class="filter">
    <input class="input" type="text" placeholder="Filter" bind:value={$filterValue} />
  </label>
</template>

<style>
  .filter {
    width: 100%;
    height: 30px;
    margin-bottom: 15px;
    border: 1px solid #bdbdbd;
    border-radius: 30px;
    overflow: hidden;
  }

  .input {
    width: 100%;
    height: 100%;
    padding: 0 15px;
    border: none;
    outline: none;
  }
</style>
