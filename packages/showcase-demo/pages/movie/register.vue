<template>
  <theme-wrapper theme="passion">
    <div>
      <register-form />
    </div>
  </theme-wrapper>
</template>

<script>
import brand from '@/assets/text/brand'
import ThemeWrapper from '@/components/ThemeWrapper'
import RegisterForm from '@/components/movie/Forms/Register'

export default defineNuxtComponent({
  components: {
    ThemeWrapper,
    RegisterForm
  },
  head() {
    return {
      title: brand.movie.name + ' - Register'
    }
  }
});
</script>
