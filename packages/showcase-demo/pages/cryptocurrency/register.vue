<template>
  <theme-wrapper theme="money">
    <gradient-deco />
    <div>
      <register-form />
    </div>
  </theme-wrapper>
</template>

<script>
import GradientDeco from '@/components/crypto/GradientDeco'
import ThemeWrapper from '@/components/ThemeWrapper'
import brand from '@/assets/text/brand';
import RegisterForm from '@/components/crypto/Forms/Register';
import { defineNuxtComponent } from '#app';

export default defineNuxtComponent({
  components: {
    ThemeWrapper,
    GradientDeco,
    RegisterForm,
  },
  head() {
    return {
      title: brand.crypto.name + ' - Register',
    };
  },
});
</script>
