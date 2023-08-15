<template>
  <theme-wrapper theme="joker">
    <div>
      <contact />
    </div>
  </theme-wrapper>
</template>

<script>
import ThemeWrapper from '@/components/ThemeWrapper'
import Contact from '@/components/mobile-apps/Forms/Contact'
import brand from '@/assets/text/brand'
import { defineNuxtComponent } from '#app';

export default defineNuxtComponent({
  components: {
    ThemeWrapper,
    Contact
  },
  head() {
    return {
      title: brand.mobile.name + ' - Contact'
    }
  }
})
</script>
