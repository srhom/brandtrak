<template>
  <theme-wrapper theme="cloud">
    <div>
      <div class="main-wrap">
        <main-header />
        <div class="container-wrap scroll-nav-content">
          <section id="home">
            <banner />
          </section>
          <div id="promotion">
            <promotion />
          </div>
          <section id="feature">
            <feature />
          </section>
          <section id="benefit">
            <benefit />
          </section>
          <particles-canvas />
          <section id="pricing" class="space-top-short">
            <pricing-plan />
          </section>
          <section id="testimonials" class="space-top-short">
            <testimonials />
          </section>
        </div>
        <section id="footer" class="space-top">
          <footer-with-counter />
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
.space-bottom-short {
  margin-bottom: section-margin($spacing1 * 0.5);
}
.space-top {
  margin-top: section-margin($spacing1);
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
import Header from '@/components/hosting/Header'
import Banner from '@/components/hosting/Banner'
import Promotion from '@/components/hosting/Promotion'
import Feature from '@/components/hosting/Feature'
import Benefit from '@/components/hosting/Benefit'
import PricingPlan from '@/components/hosting/PricingPlan'
import ParticlesCanvas from '@/components/hosting/ParticlesCanvas'
import Testimonials from '@/components/hosting/Testimonials'
import Hidden from '@/components/hosting/Hidden'
import PageNav from '@/components/hosting/PageNav'
import FooterWithCounter from '@/components/hosting/Footer/FooterWithCounter'
import Notification from '@/components/hosting/Notification'
import brand from '@/assets/text/brand'
import { defineNuxtComponent, useRouter, useCookie } from '#app';

export default defineNuxtComponent({
  components: {
    ThemeWrapper,
    'main-header': Header,
    Banner,
    Promotion,
    Feature,
    Benefit,
    ParticlesCanvas,
    PricingPlan,
    Testimonials,
    FooterWithCounter,
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
  computed: {
    isTablet() {
      const mdDown = this.$vuetify.display.mdAndDown;
      return mdDown;
    },
    isMobile() {
      const smDown = this.$vuetify.display.smAndDown;
      return smDown;
    }
  },
  head() {
    return {
      title: brand.hosting.name + ' - Home Page',
    }
  }
});
</script>
