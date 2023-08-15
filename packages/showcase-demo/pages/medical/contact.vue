<template>
  <theme-wrapper theme="fresh">
    <div class="main-wrap">
      <decoration />
      <contact />
    </div>
  </theme-wrapper>
</template>

<style scoped lang="scss">
.main-wrap {
  position: relative;
  .v-theme--dark & {
    background-color: $dark-background-default;
  }
  .v-theme--light & {
    background-color: $light-background-paper;
  }
}
</style>

<script>
import ThemeWrapper from '@/components/ThemeWrapper'
import Contact from '@/components/medical/Forms/Contact'
import Decoration from '@/components/medical/Forms/Decoration'
import brand from '@/assets/text/brand'

export default {
  components: {
    Contact,
    ThemeWrapper,
    Decoration
  },
  head() {
    return {
      title: brand.medical.name + ' - Contact'
    }
  }
}
</script>
