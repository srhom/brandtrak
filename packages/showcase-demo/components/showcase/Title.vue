<template>
  <div class="title-main" :class="[align === 'left' ? 'left' : 'center']">
    <p>
      <span />
      {{ subtitle }}
    </p>
    <h2 class="display-2">
      {{ title }}
    </h2>
  </div>
</template>

<style lang="scss" scoped>
.title-main {
  display: block;
  margin: spacing(3, 0, 10);
  @include breakpoints-down(xs) {
    margin: spacing(3, 2, 10)
  }
  h2 {
    font-size: 2.75rem !important;
    font-weight: 700;
    font-family: Open Sans,sans-serif !important;
    @include breakpoints-down(xs) {
      font-size: 1.75rem !important;
    }
  }
  p {
    color: $light-text-secondary;
    font-weight: 700;
    font-family: Open Sans,sans-serif !important;
    text-transform: uppercase;
    display: inline-block;
    position: relative;
    span {
      background: #217892;
      display: inline-block;
      border-radius: 50%;
      width: 10px;
      height: 10px;
      top: 8px;
      left: -8px;
      position: relative;
      &:after {
        content: "";
        position: relative;
        display: inline-block;
        background: #5aaf27;
        border-radius: 50%;
        width: 10px;
        height: 10px;
        top: -8px;
        left: -7px;
      }
    }
  }
}
.center {
  text-align: center
}
.left {
  text-align: left
}
</style>

<script>
export default {
  props: {
    subtitle: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    align: {
      type: String,
      default: 'center'
    },
  }
}
</script>
