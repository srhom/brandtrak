<template>
  <theme-wrapper theme="cloud">
    <div>
      <register-form />
    </div>
  </theme-wrapper>
</template>

<script>
import ThemeWrapper from '@/components/ThemeWrapper'
import brand from '@/assets/text/brand'
import RegisterForm from '@/components/hosting/Forms/Register'

export default defineNuxtComponent({
  components: {
    ThemeWrapper,
    RegisterForm
  },
  head() {
    return {
      title: brand.hosting.name + ' - Register'
    };
  },
});
</script>
