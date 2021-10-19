<script lang="ts">
  export let value: number | string = "";
  export let label: string;
</script>

<div class="input-wrapper">
  <label for={label}>{label}</label>
  <input name={label} {...$$props} bind:value />
</div>

<style lang="less">
  .input-wrapper {
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
