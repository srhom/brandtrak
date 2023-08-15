<template>
  <div :class="[theme, (colorTheme || theme) + '-var']">
    <slot />
    <theme-palette
      :selected-color="colorTheme || theme"
      :change-color="changeColor"
      :theme-list="palette"
    /> 
  </div>
</template>

<script>
import { palette } from '@/config/theme'
import ThemePalette from './ThemePalette'

export default {
  components: {
    ThemePalette
  },
  props: {
    theme: {
      type: String,
      required: true
    }
  },
  data: () => ({
    palette: palette,
    colorTheme: null
  }),
  methods: {
    changeColor(colorName) {
      this.colorTheme = colorName;
    }
  },
}
</script>
