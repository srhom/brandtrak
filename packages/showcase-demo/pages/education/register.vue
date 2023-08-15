<template>
  <theme-wrapper theme="smart">
    <div>
      <register-form />
    </div>
  </theme-wrapper>
</template>

<script>
import ThemeWrapper from '@/components/ThemeWrapper'
import brand from '@/assets/text/brand'
import RegisterForm from '@/components/education/Forms/Register'

export default defineNuxtComponent({
  components: {
    ThemeWrapper,
    RegisterForm
  },
  head() {
    return {
      title: brand.education.name + ' - Register'
    }
  }
});
</script>
