<template>
  <theme-wrapper theme="violeta">
    <div>
      <contact />
    </div>
  </theme-wrapper>
</template>

<script>
import Contact from '@/components/saas/Forms/Contact';
import brand from '@/assets/text/brand';
import ThemeWrapper from '@/components/ThemeWrapper';
import { defineNuxtComponent } from '#app';

export default defineNuxtComponent({
  components: {
    Contact,
    ThemeWrapper,
  },
  head() {
    return {
      title: brand.saas.name + ' - Contact',
    };
  },
});
</script>
