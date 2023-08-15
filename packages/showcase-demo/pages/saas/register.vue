<template>
  <theme-wrapper theme="violeta">
    <div>
      <register-form />
    </div>
  </theme-wrapper>
</template>

<script>
import brand from '@/assets/text/brand';
import RegisterForm from '@/components/saas/Forms/Register';
import ThemeWrapper from '@/components/ThemeWrapper';
import { defineNuxtComponent } from '#app';

export default defineNuxtComponent({
  components: {
    RegisterForm,
    ThemeWrapper,
  },
  head() {
    return {
      title: brand.saas.name + ' - Register',
    };
  },
});
</script>
