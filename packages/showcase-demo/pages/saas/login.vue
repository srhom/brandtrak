<template>
  <theme-wrapper theme="violeta">
    <div>
      <login-form />
    </div>
  </theme-wrapper>
</template>

<script>
import brand from '@/assets/text/brand';
import LoginForm from '@/components/saas/Forms/Login';
import ThemeWrapper from '@/components/ThemeWrapper';
import { defineNuxtComponent } from '#app';

export default defineNuxtComponent({
  components: {
    ThemeWrapper,
    LoginForm,
  },
  head() {
    return {
      title: brand.saas.name + ' - Login',
    };
  },
});
</script>
