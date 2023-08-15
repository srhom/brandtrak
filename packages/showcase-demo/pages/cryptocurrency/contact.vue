<template>
  <theme-wrapper theme="money">
    <gradient-deco />
    <div>
      <contact />
    </div>
  </theme-wrapper>
</template>

<script>
import ThemeWrapper from '@/components/ThemeWrapper'
import GradientDeco from '@/components/crypto/GradientDeco'
import Contact from '@/components/crypto/Forms/Contact';
import brand from '@/assets/text/brand';
import { defineNuxtComponent } from '#app';

export default defineNuxtComponent({
  components: {
    GradientDeco,
    ThemeWrapper,
    Contact,
  },
  head() {
    return {
      title: brand.crypto.name + ' - Contact',
    };
  },
});
</script>
