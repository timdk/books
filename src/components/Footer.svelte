<script>
  import githubLogo from '../assets/github-logo.png';
</script>

<template>
  <footer>
    <a class="github-link" href="https://github.com/timdk/books" target="_blank" title="View this project on GitHub">
      <img src="{githubLogo}" alt="GitHub Logo" />
    </a>
  </footer>
</template>

<style lang="scss">
  footer {
    margin: 20px 0;
    text-align: center;
  }
  
  .github-link {
    opacity: 0.6;
    transition: opacity 0.2s ease;
  
    &:hover {
      opacity: 1;
    }
  }
</style>