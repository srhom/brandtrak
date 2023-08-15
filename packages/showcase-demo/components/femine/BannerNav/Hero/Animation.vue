<template>
  <div class="illustration" id="vantaRef" />
</template>

<style lang="scss" scoped>
@import './hero-style.scss';
</style>

<script>
import * as THREE from 'three';

export default {
  async mounted() {
    if (process.client) {
      window.THREE = THREE;
      const { default: BIRDS } = await import('vanta/dist/vanta.birds.min');

      BIRDS({
        el: '#vantaRef',
        THREE: THREE,
        mouseControls: false,
        touchControls: true,
        gyroControls: false,
        minHeight: 500,
        minWidth: 200,
        scale: 1,
        scaleMobile: 1
      })
    }
  },
}
</script>
