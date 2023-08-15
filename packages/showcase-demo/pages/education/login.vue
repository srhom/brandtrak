<template>
  <theme-wrapper theme="smart">
    <div>
      <login-form />
    </div>
  </theme-wrapper>
</template>

<script>
import ThemeWrapper from '@/components/ThemeWrapper'
import brand from '@/assets/text/brand'
import LoginForm from '@/components/education/Forms/Login'

export default defineNuxtComponent({
  components: {
    ThemeWrapper,
    LoginForm
  },
  head() {
    return {
      title: brand.education.name + ' - Login'
    }
  }
});
</script>
