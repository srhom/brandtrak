<template>
  <div
    :class="{ extend: extended }"
    class="title-icon-deco"
  >
    <v-icon :icon="'mdi-'+icon" class="icon" />
    <h3>
      {{ text }}
    </h3>
  </div>
</template>

<style lang="scss" scoped>
@import './title-style';
</style>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
    extended: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      default: 'mdi-app',
    },
  },
};
</script>
