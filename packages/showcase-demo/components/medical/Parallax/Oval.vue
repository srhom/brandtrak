<template>
  <div class="parallax-wrap">
    <div class="inner-parallax">
      <div class="figure">
        <div v-if="loaded">
          <scroll-parallax :speed="0.15">
            <div class="parallax-oval parallax-primary"></div>
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
