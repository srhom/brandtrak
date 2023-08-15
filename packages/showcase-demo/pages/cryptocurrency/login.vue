<template>
  <theme-wrapper theme="money">
    <gradient-deco />
    <div>
      <login-form />
    </div>
  </theme-wrapper>
</template>

<script>
import GradientDeco from '@/components/crypto/GradientDeco'
import ThemeWrapper from '@/components/ThemeWrapper'
import brand from '@/assets/text/brand';
import LoginForm from '@/components/crypto/Forms/Login';
import { defineNuxtComponent } from '#app';

export default defineNuxtComponent({
  components: {
    ThemeWrapper,
    GradientDeco,
    LoginForm,
  },
  head() {
    return {
      title: brand.crypto.name + ' - Login',
    };
  },
});
</script>
