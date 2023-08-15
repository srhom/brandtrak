<template>
  <theme-wrapper theme="fresh">
    <div>
      <div class="main-wrap">
        <main-header />
        <div class="container-wrap scroll-nav-content">
          <oval-top />
          <section id="home">
            <video-banner />
          </section>
          <section
            id="about"
            class="space-top-short"
          >
            <about />
          </section>
          <dots-parallax />      
          <section
            id="facility"
            class="space-top"
          >
            <facilities />
          </section>
          <section
            id="our-expertise"
            :class="[isTablet ? 'space-top-short' : 'space-top']"
          >
            <expertise />
          </section>
          <section
            id="ask-doctors"
            :class="[isMobile ? 'space-top-short' : 'space-top']"
          >
            <ask-doctors />
          </section>
          <section
            id="testimonials"
            class="space-top-short"
          >
            <testimonials />
          </section>
          <section class="space-top-short" id="call-to-action">
            <call-action />
          </section>
          <section class="space-top-short" id="clinics">
            <clinics />
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
  overflow: hidden;
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
    margin-top: $spacing6;
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
import Header from '@/components/medical/Header'
import VideoBanner from '@/components/medical/VideoBanner'
import About from '@/components/medical/About'
import Facilities from '@/components/medical/Facilities'
import Expertise from '@/components/medical/Expertise'
import Testimonials from '@/components/medical/Testimonials'
import AskDoctors from '@/components/medical/AskDoctors'
import CallAction from '@/components/medical/CallAction'
import Clinics from '@/components/medical/Clinics'
import Footer from '@/components/medical/Footer'
import Hidden from '@/components/medical/Hidden'
import PageNav from '@/components/medical/PageNav'
import Notification from '@/components/medical/Notification'
import DotsParallax from '@/components/medical/Parallax/Dots'
import OvalTop from '@/components/medical/Parallax/OvalTop'
import brand from '@/assets/text/brand'
import { defineNuxtComponent, useRouter, useCookie } from '#app';

export default defineNuxtComponent({
  components: {
    'main-header': Header,
    ThemeWrapper,
    DotsParallax,
    OvalTop,
    VideoBanner,
    About,
    Facilities,
    Expertise,
    Testimonials,
    AskDoctors,
    CallAction,
    Clinics,
    PageNav,
    Hidden,
    Notification,
    'main-footer': Footer
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
      title: brand.medical.name + ' - Home Page'
    }
  }
});
</script>
