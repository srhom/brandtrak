<template>
  <div>
    <contact />
  </div>
</template>

<script>
import Contact from '@/components/Forms/Contact';
import brand from '@/assets/text/brand';

export default {
  components: {
    Contact,
  },
  head() {
    return {
      title: brand.crypto.name + ' - Contact',
    };
  },
};
</script>
