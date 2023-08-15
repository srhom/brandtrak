<template>
  <div>
    <register-form />
  </div>
</template>

<script>
import brand from '@/assets/text/brand';
import RegisterForm from '@/components/Forms/Register';

export default {
  components: {
    RegisterForm,
  },
  head() {
    return {
      title: brand.crypto.name + ' - Register',
    };
  },
};
</script>
