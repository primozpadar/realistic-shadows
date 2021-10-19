<script lang="ts">
  import { shadow, imageUrl } from "../store";
</script>

<div class="controller">
  <div class="row">
    <input type="number" bind:value={$shadow.x} />
    <input type="number" bind:value={$shadow.y} />
    <input type="number" bind:value={$shadow.spread} />
    <input type="number" bind:value={$shadow.blur} />
  </div>
  <div class="row">
    <input type="text" bind:value={$imageUrl} />
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

    input {
      padding: 0.6rem;
      outline: none;
      width: 100%;
      color: var(--teal);
      background: var(--gray);
      border: 1px solid var(--teal);
      font-weight: bold;
      border-radius: 0.2rem;
    }
  }
</style>
