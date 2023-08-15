<template>
  <theme-wrapper theme="smart">
    <div>
      <contact />
    </div>
  </theme-wrapper>
</template>

<script>
import ThemeWrapper from '@/components/ThemeWrapper'
import Contact from '@/components/education/Forms/Contact'
import brand from '@/assets/text/brand'

export default defineNuxtComponent({
  components: {
    Contact,
    ThemeWrapper
  },
  head() {
    return {
      title: brand.education.name + ' - Contact'
    }
  }
});
</script>
