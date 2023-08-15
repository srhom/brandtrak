<template>
  <theme-wrapper theme="violeta">
    <div>
      <div class="main-wrap">
        <main-header />
        <div class="container-wrap scroll-nav-content">
          <section id="home">
            <banner />
          </section>
          <section>
            <company-logo />
          </section>
          <section :class="!isMobile && 'space-top-short'">
            <counter />
          </section>
          <section id="feature" :class="isMobile ? 'space-top-short' : 'space-top'">
            <feature />
          </section>
          <section id="testimonials" class="space-bottom-testi">
            <testimonials />
          </section>
          <section id="pricing" class="space-top">
            <pricing-plan />
          </section>
          <section id="faq" class="space-top-short">
            <faq />
          </section>
          <section class="space-top-short space-bottom-short">
            <news-event />
          </section>
        </div>
        <section id="footer">
          <footer-with-deco />
        </section>
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
  @include breakpoints-down(sm) {
    margin-bottom: section-margin(6px);
  }
}
.space-bottom-testi {
  @include breakpoints-up(md) {
    margin-bottom: section-margin($spacing1);
  }
}
.space-bottom-short {
  margin-bottom: section-margin($spacing1 * 0.5);
}
.space-top {
  margin-top: section-margin($spacing1);
  @include breakpoints-down(sm) {
    margin-top: section-margin(6px);
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
import ThemeWrapper from '@/components/ThemeWrapper'
import Header from '@/components/saas/Header';
import Banner from '@/components/saas/Banner';
import CompanyLogo from '@/components/saas/CompanyLogo';
import Counter from '@/components/saas/Counter';
import Feature from '@/components/saas/Feature';
import Testimonials from '@/components/saas/Testimonials';
import PricingPlan from '@/components/saas/PricingPlan';
import Faq from '@/components/saas/Faq';
import NewsEvent from '@/components/saas/NewsEvent';
import FooterWithDeco from '@/components/saas/Footer/FooterWithDeco';
import Hidden from '@/components/saas/Hidden';
import PageNav from '@/components/saas/PageNav';
import Notification from '@/components/saas/Notification';
import brand from '@/assets/text/brand';
import { defineNuxtComponent, useRouter, useCookie } from '#app';

export default defineNuxtComponent({
  components: {
    ThemeWrapper,
    'main-header': Header,
    Banner,
    CompanyLogo,
    Counter,
    Feature,
    Testimonials,
    PricingPlan,
    Faq,
    NewsEvent,
    FooterWithDeco,
    PageNav,
    Hidden,
    Notification,
  },
  head() {
    return {
      title: brand.saas.name + ' - Home Page',
    };
  },
  computed: {
    isTablet() {
      const mdDown = this.$vuetify.display.mdAndDown;
      return mdDown;
    },
    isMobile() {
      const smDown = this.$vuetify.display.smAndDown;
      return smDown;
    },
  },
});
</script>
