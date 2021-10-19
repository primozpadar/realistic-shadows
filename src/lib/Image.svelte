<script lang="ts">
  import { shadow, imageUrl } from "../store";
  import { css } from "@emotion/css";
  import { derived } from "svelte/store";

  const realShadowCss = derived(
    [imageUrl, shadow],
    ([$imageUrl, $shadow]) => css`
      background: url(${$imageUrl}) no-repeat center;
      transform: scale(${$shadow.spread / 100 + 1})
        translate(${$shadow.x}px, ${$shadow.y}px);
      filter: blur(${$shadow.blur}px);
    `
  );

  const normalShadowCss = derived(
    shadow,
    ($shadow) => css`
      filter: drop-shadow(
        ${$shadow.x}px ${$shadow.y}px ${$shadow.blur}px #000000
      );
    `
  );
</script>

<div class="wrapper">
  <div class="img-wrapper">
    <div class="img-real-shadow {$realShadowCss}" />
    <img class="img" src={$imageUrl} alt="" />
  </div>
  <div class="img-wrapper">
    <img class="img {$normalShadowCss}" src={$imageUrl} alt="" />
  </div>
</div>

<style lang="less">
  .wrapper {
    background: var(--white);
    padding: 6rem 4rem;
    border-radius: var(--radius);
    display: flex;
    filter: drop-shadow(0px 4px 20px rgba(0, 0, 0, 0.6));

    .img-wrapper {
      width: 400px;
      height: 400px;
      position: relative;

      &:first-child {
        margin-right: 6rem;
      }
    }

    .img {
      position: absolute;
      top: 0;
      z-index: 100;
      object-fit: contain;
      width: 400px;
      height: 400px;
    }

    .img-real-shadow {
      z-index: 10;
      content: " ";
      background-size: contain;
      width: 100%;
      height: 100%;
    }
  }
</style>
