<template>
  <theme-wrapper theme="ocean">
    <div id="home-container">
      <div class="main-wrap">
        <main-header />
        <div class="container-wrap scroll-nav-content">
          <square-parallax />
          <section id="home">
            <video-banner />
          </section>
          <section
            id="about"
            :class="[isTablet ? 'space-top-short' : 'space-top']"
          >
            <about />
          </section>
          <dots-parallax />
          <section
            id="services"
            class="space-top"
          >
            <services />
          </section>
          <section
            id="our-expertise"
            :class="[isTablet ? 'space-top-short' : 'space-top']"
          >
            <expertise />
          </section>
          <section
            id="testimonials"
            :class="[isMobile ? 'space-top-short' : 'space-top']"
          >
            <testimonials />
          </section>
          <section id="case-studies">
            <case-studies />
          </section>
          <section id="call-to-action" class="space-top-short">
            <call-action />
          </section>
          <section id="address" class="space-top-short">
            <map-address />
          </section>
        </div>
        <hidden point="mdDown">
          <page-nav />
        </hidden>
        <main-footer />
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
  @include palette-text-primary;
  .v-theme--dark & {
    background-color: $dark-background-default;
  }
  .v-theme--light & {
    background-color: $light-background-paper;
  }
}
.space-top {
  margin-top: section-margin($spacing1);
  @include breakpoints-down(md) {
    margin-top: section-margin(6px);
  }
  @include breakpoints-down(xs) {
    margin-top: section-margin($spacing1 * 0.5);
  }
}
.space-bottom-short {
  margin-bottom: section-margin($spacing1 * 0.5);
}
.space-top-short {
  margin-top: section-margin($spacing1 * 0.5);
}
.container-wrap {
  @include breakpoints-up(md) {
    padding-top: $spacing6;
  }
  section {
    position: relative;
  }
}
</style>

<script>
import { onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import ThemeWrapper from '@/components/ThemeWrapper'
import Header from '@/components/agency/Header';
import SquareParallax from '@/components/agency/Parallax/Square';
import VideoBanner from '@/components/agency/VideoBanner';
import About from '@/components/agency/About';
import Services from '@/components/agency/Services';
import Expertise from '@/components/agency/Expertise';
import Testimonials from '@/components/agency/Testimonials';
import CaseStudies from '@/components/agency/CaseStudies';
import CallAction from '@/components/agency/CallAction';
import MapAddress from '@/components/agency/MapAddress';
import Footer from '@/components/agency/Footer';
import Hidden from '@/components/agency/Hidden';
import PageNav from '@/components/agency/PageNav';
import Notification from '@/components/agency/Notification';
import DotsParallax from '@/components/agency/Parallax/Dots';
import brand from '@/assets/text/brand';
import { defineNuxtComponent, useRouter, useCookie } from '#app';

export default defineNuxtComponent({
  components: {
    ThemeWrapper,
    'main-header': Header,
    SquareParallax,
    DotsParallax,
    VideoBanner,
    About,
    Services,
    Expertise,
    Testimonials,
    CaseStudies,
    CallAction,
    MapAddress,
    PageNav,
    Hidden,
    Notification,
    'main-footer': Footer,
  },
  head() {
    return {
      title: brand.agency.name + ' - Home Page',
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
