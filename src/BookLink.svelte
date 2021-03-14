<script lang="ts">
  export let isbn: string | number;
  export let className: string = null;

  const href = `https://openlibrary.org/isbn/${isbn}`;
</script>

<a class={className} {href} target="_blank"><slot /></a>
