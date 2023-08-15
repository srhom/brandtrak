<template>
  <div class="parallax-wrap">
    <div v-if="loaded">
      <div class="banner-parallax-wrap">
        <scroll-parallax :speed="0.15">
          <div class="figure">
            <svg
              fill="#cccccc"
              width="845"
              height="1099"
              class="parallax-vertical parallax-dot"
            >
              <use xlink:href="/images/decoration/dot-deco.svg#dot" />
            </svg>
          </div>
        </scroll-parallax>
        <scroll-parallax :speed="0.15">
          <div class="figure">
            <div class="parallax-vertical parallax-circle">
              <img src="/images/showcase/deco-circle.svg" alt="deco" />
            </div>
          </div>
        </scroll-parallax>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import './parallax-style.scss';
</style>

<script>
export default {
  data() {
    return {
      loaded: false
    }
  },
  mounted() {
    this.loaded = true
  }
}
</script>
