<template>
  <div class="parallax-wrap dots-wrap">
    <div class="inner-parallax">
      <div class="figure">
        <div v-if="loaded">
          <scroll-parallax :speed="0.5">
            <svg
              fill="#cccccc"
              width="845px"
              height="1099px"
              class="parallax-vertical parallax-dot"
            >
              <use xlink:href="/images/decoration/dot-deco.svg#dot" />
            </svg>
          </scroll-parallax>
          <scroll-parallax :speed="0.3">
            <svg
              fill="#cccccc"
              width="902px"
              height="1042px"
              class="parallax-vertical parallax-triangle"
            >
              <use xlink:href="/images/decoration/triangle-deco.svg#triangle" />
            </svg>
          </scroll-parallax>
        </div>
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
