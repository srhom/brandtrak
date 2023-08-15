<template>
  <theme-wrapper theme="cloud">
    <div>
      <login-form />
    </div>
  </theme-wrapper>
</template>

<script>
import ThemeWrapper from '@/components/ThemeWrapper'
import brand from '@/assets/text/brand'
import LoginForm from '@/components/hosting/Forms/Login'

export default defineNuxtComponent({
  components: {
    ThemeWrapper,
    LoginForm
  },
  head() {
    return {
      title: brand.hosting.name + ' - Login',
    };
  },
});
</script>
