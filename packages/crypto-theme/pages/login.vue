<template>
  <div>
    <login-form />
  </div>
</template>

<script>
import brand from '@/assets/text/brand';
import LoginForm from '@/components/Forms/Login';

export default {
  components: {
    LoginForm,
  },
  head() {
    return {
      title: brand.crypto.name + ' - Login',
    };
  },
};
</script>
