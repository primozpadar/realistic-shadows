<script lang="ts">
  import Image from "./lib/Image.svelte";
  import Controller from "./lib/Controller.svelte";
  import RepoLink from "./lib/RepoLink.svelte";
</script>

<h1 class="title">realistic shadow</h1>
<Image />
<Controller />
<RepoLink />

<style lang="less" global>
  :root {
    --teal: rgb(0, 173, 181);
    --grey: rgb(57, 62, 70);
    --grey-dark: #222831;
    --white: rgb(255, 255, 255);

    --radius: 0.6rem;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    font-family: sans-serif;
  }

  body {
    background: var(--grey-dark);
  }

  #app {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4rem;
  }

  .title {
    color: var(--teal);
    letter-spacing: 2px;
  }
</style>
