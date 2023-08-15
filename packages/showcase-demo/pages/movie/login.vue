<template>
  <theme-wrapper theme="passion">
    <div>
      <login-form />
    </div>
  </theme-wrapper>
</template>

<script>
import brand from '@/assets/text/brand'
import ThemeWrapper from '@/components/ThemeWrapper'
import LoginForm from '@/components/movie/Forms/Login'

export default defineNuxtComponent({
  components: {
    ThemeWrapper,
    LoginForm
  },
  head() {
    return {
      title: brand.movie.name + ' - Login'
    }
  }
})
</script>
