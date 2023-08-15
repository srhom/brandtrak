<template>
  <theme-wrapper theme="ocean">
    <decoration />
    <contact />
  </theme-wrapper>
</template>

<script>
import ThemeWrapper from '@/components/ThemeWrapper'
import Contact from '@/components/agency/Forms/Contact';
import Decoration from '@/components/agency/Forms/Decoration';
import brand from '@/assets/text/brand';
import { defineNuxtComponent } from '#app';

export default defineNuxtComponent({
  components: {
    ThemeWrapper,
    Contact,
    Decoration,
  },
  head() {
    return {
      title: brand.agency.name + ' - Contact',
    };
  },
});
</script>
