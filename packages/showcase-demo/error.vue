<template>
  <theme-wrapper theme="violeta">
    <v-app>
      <div class="dedicated-page">
        <Error
          error-code="errObj.statusCode"
          :text="$t('common.404')"
        />
      </div>
    </v-app>
  </theme-wrapper>
</template>

<style lang="scss" scoped>
.dedicated-page {
  @include palette-background-paper;
}
</style>

<script>
import brand from './assets/text/brand';
import ThemeWrapper from './components/ThemeWrapper';
import Error from './components/agency/Error';
import { useHead, useError, defineNuxtComponent } from '#app';

export default defineNuxtComponent({
  components: {
    ThemeWrapper,
    Error,
  },
  setup() {
    const error = useError();
    const errObj = error._object.error;
    useHead({
      title: errObj.statusCode === 404
        ? `${brand.showcase.name} - Not Found`
        : `${brand.showcase.name} - An error occurred`,
    });
  },
});
</script>
