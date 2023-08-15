<template>
  <theme-wrapper theme="cloud">
    <div>
      <contact />
    </div>
  </theme-wrapper>
</template>

<script>
import ThemeWrapper from '@/components/ThemeWrapper'
import Contact from '@/components/hosting/Forms/Contact';
import brand from '@/assets/text/brand';

export default defineNuxtComponent({
  components: {
    ThemeWrapper,
    Contact
  },
  head() {
    return {
      title: brand.hosting.name + ' - Contact',
    };
  },
});
</script>
