<template>
  <theme-wrapper theme="joker">
    <div>
      <div class="main-wrap">
        <main-header />
        <div class="container-wrap scroll-nav-content">
          <section id="home">
            <banner />
          </section>
          <section id="counter">
            <counter />
          </section>
          <section id="feature" class="space-top">
            <feature />
          </section>
          <section id="showcase">
            <showcase />
          </section>
          <section id="testimonials">
            <testimonials />
          </section>
          <section id="faq" class="space-top-short">
            <faq />
          </section>
          <section class="space-top-short">
            <company-logo />
          </section>
          <section class="space-top-short">
            <news-event />
          </section>
        </div>
        <footer-with-deco />
        <hidden point="mdDown">
          <page-nav />
        </hidden>
        <hidden point="mdDown">
          <notification />
        </hidden>
      </div>
    </div>
  </theme-wrapper>
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
  @include breakpoints-down(sm) {
    margin-bottom: section-margin($spacing1 * 0.5);
  }
}
.space-top {
  margin-top: section-margin($spacing1);
  @include breakpoints-down(md) {
    margin-top: section-margin(6px);
  }
  @include breakpoints-down(sm) {
    margin-top: section-margin($spacing1 * 0.5);
  }
}
.space-top-short {
  margin-top: section-margin($spacing1 * 0.5);
  @include breakpoints-down(sm) {
    margin-top: section-margin(2px);
  }
}
.space-bottom-short {
  margin-bottom: section-margin($spacing1 * 0.5);
  @include breakpoints-down(sm) {
    margin-bottom: section-margin(2px);
  }
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
import ThemeWrapper from '@/components/ThemeWrapper'
import Header from '@/components/mobile-apps/Header'
import Banner from '@/components/mobile-apps/Banner'
import Counter from '@/components/mobile-apps/Counter'
import Feature from '@/components/mobile-apps/Feature'
import Showcase from '@/components/mobile-apps/Showcase'
import Testimonials from '@/components/mobile-apps/Testimonials'
import Faq from '@/components/mobile-apps/Faq'
import CompanyLogo from '@/components/mobile-apps/CompanyLogo'
import NewsEvent from '@/components/mobile-apps/NewsEvent'
import FooterWithDeco from '@/components/mobile-apps/Footer/FooterWithDeco'
import Hidden from '@/components/mobile-apps/Hidden'
import PageNav from '@/components/mobile-apps/PageNav'
import Notification from '@/components/mobile-apps/Notification'
import brand from '@/assets/text/brand'
import { defineNuxtComponent, useRouter, useCookie } from '#app';

export default defineNuxtComponent({
  components: {
    'main-header': Header,
    ThemeWrapper,
    Banner,
    Counter,
    Feature,
    Showcase,
    Testimonials,
    CompanyLogo,
    Faq,
    NewsEvent,
    FooterWithDeco,
    PageNav,
    Hidden,
    Notification
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
      title: brand.mobile.name + ' - Home Page',
    }
  }
})
</script>
