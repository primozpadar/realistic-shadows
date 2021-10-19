<script lang="ts">
  import { shadow, imageUrl } from "../store";
  import Input from "./Input.svelte";
</script>

<div class="controller">
  <div class="row">
    <Input type="number" label="X" bind:value={$shadow.x} />
    <Input type="number" label="Y" bind:value={$shadow.y} />
    <Input type="number" label="Spread" bind:value={$shadow.spread} />
    <Input type="number" label="Blur" bind:value={$shadow.blur} />
  </div>
  <div class="row">
    <Input type="text" label="Image URL" bind:value={$imageUrl} />
  </div>
  <p>
    Try /parrot.jpeg, /palms.jpeg or /portrait.jpeg or paste in any other URL
    ...
  </p>
</div>

<style lang="less" scoped>
  .controller {
    width: 460px;
    color: var(--teal);
    border: 1px solid var(--grey);
    padding: 2rem;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
    border-radius: var(--radius);

    .row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 1rem;

      &:not(:last-child) {
        margin-bottom: 1.4rem;
      }
    }
  }
</style>
