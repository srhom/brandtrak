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
      const { default: WAVES } = await import('vanta/dist/vanta.waves.min');

      WAVES({
        el: '#vantaRef',
        THREE: THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200,
        minWidth: 200,
        scale: 1,
        scaleMobile: 1,
        color: '#212121'
      })
    }
  },
}
</script>
