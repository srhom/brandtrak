<template>
  <div class="main-wrap">
    <main-header />
    <div class="container-wrap scroll-nav-content">
      <section id="home">
        <banner />
      </section>
      <section id="promotions">
        <promotion />
      </section>
      <section id="feature" class="space-top-short-md-down">
        <feature />
      </section>
      <section id="benefit" class="space-top-short">
        <benefit />
      </section>
      <section id="testimonials" class="space-top">
        <testimonials />
      </section>
      <section id="faq" class="space-top">
        <faq />
      </section>
    </div>
    <footer-with-counter />
    <hidden point="mdDown">
      <page-nav />
    </hidden>
    <hidden point="mdDown">
      <notification />
    </hidden>
  </div>
</template>

<style scoped lang="scss">
@function section-margin($margin) {
  @return $margin * 20;
}
.main-wrap {
  position: relative;
  width: 100%;
  overflow: hidden;
  @include palette-text-primary;
  .v-theme--dark & {
    background-color: $dark-background-default;
  }
  .v-theme--light & {
    background-color: $light-background-paper;
  }
}
.space-bottom {
  margin-bottom: section-margin($spacing1);
  @include breakpoints-down(md) {
    margin-bottom: section-margin(6px);
  }
}
.space-top {
  margin-top: section-margin($spacing1);
  @include breakpoints-down(md) {
    margin-top: section-margin(6px);
  }
}
.space-bottom-short {
  margin-bottom: section-margin($spacing1 * 0.5);
}
.space-top-short-md-down {
  @include breakpoints-between(md, lg) {
    margin-top: section-margin($spacing1 * 0.5);
  }
}
.space-top-short {
  margin-top: section-margin($spacing1 * 0.5);
}
.container-wrap {
  margin-top: -40px;
  > section {
    position: relative;
  }
}
</style>

<script>
import { onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import Header from '@/components/Header';
import Banner from '@/components/Banner';
import Promotion from '@/components/Promotion';
import Feature from '@/components/Feature';
import Benefit from '@/components/Benefit';
import Testimonials from '@/components/Testimonials';
import Faq from '@/components/Faq';
import FooterWithCounter from '@/components/Footer/FooterWithCounter';
import Hidden from '@/components/Hidden';
import PageNav from '@/components/PageNav';
import Notification from '@/components/Notification';
import brand from '@/assets/text/brand';
import { defineNuxtComponent, useRouter, useCookie } from '#app';

export default defineNuxtComponent({
  components: {
    'main-header': Header,
    Banner,
    Promotion,
    Feature,
    Benefit,
    Testimonials,
    Faq,
    FooterWithCounter,
    PageNav,
    Hidden,
    Notification,
  },
  setup() {
    // push route to the stored cookie languages only for index page
    const router = useRouter();
    const storedLang = useCookie('i18n_redirected');
    const i18nLocale = useI18n();

    const defaultLocale = '/' + i18nLocale.fallbackLocale.value;
    onMounted(() => {
      const rootUrl = document.location.pathname === '/' || document.location.pathname === defaultLocale;
      if (storedLang.value && rootUrl) {
        router.push({ path: `/${storedLang.value}` });
      }
    });
  },
  head() {
    return {
      title: brand.crypto.name + ' - Home Page',
    };
  },
});
</script>
