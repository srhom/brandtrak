<template>
  <theme-wrapper theme="greenleaf">
    <div>
      <div class="main-wrap">
        <header-main />
        <div class="container-wrap scroll-nav-content">
          <section id="home">
            <video-banner />
          </section>
          <section id="services" class="space-top-short">
            <services />
          </section>
          <section id="project" :class="[isMobile ? 'space-top-short' : 'space-top']">
            <project />
          </section>
          <section id="featured" :class="[isMobile ? 'space-top-short' : 'space-top']">
            <featured />
          </section>
          <section id="about">
            <div :class="[isTablet ? 'space-top-short' : 'space-top']">
              <about />
            </div>
            <div class="space-top-short">
              <team />
            </div>
            <div>
              <counter />
            </div>
          </section>
          <div id="blog" class="space-top-short">
            <blog />
          </div>
          <section id="subscribe" class="space-top-short">
            <subscribe-form />
          </section>
          <footer-main />
        </div>
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
  .v-theme--dark & {
    background-color: $dark-background-default;
  }
  .v-theme--light & {
    background-color: $light-background-paper;
  }
}
.space-bottom {
  padding-bottom: section-margin($spacing1);
  @include breakpoints-down(md) {
    padding-bottom: section-margin(6px);
  }
}
.space-bottom-short {
  padding-bottom: section-margin($spacing1 * 0.5);
}
.space-top {
  padding-top: section-margin($spacing1);
  @include breakpoints-down(md) {
    padding-top: section-margin(6px);
  }
}
.space-top-short {
  padding-top: section-margin($spacing1 * 0.5);
}
.container-wrap {
  > section {
    position: relative;
  }
}
</style>

<script>
import { onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import ThemeWrapper from '@/components/ThemeWrapper'
import Header from '@/components/architect/Header'
import VideoBanner from '@/components/architect/VideoBanner'
import Services from '@/components/architect/Services'
import Project from '@/components/architect/Project'
import Featured from '@/components/architect/Featured'
import About from '@/components/architect/About'
import Team from '@/components/architect/Team'
import Counter from '@/components/architect/Counter'
import Blog from '@/components/architect/Blog'
import SubscribeForm from '@/components/architect/SubscribeForm'
import Footer from '@/components/architect/Footer'
import Hidden from '@/components/architect/Hidden'
import PageNav from '@/components/architect/PageNav'
import Notification from '@/components/architect/Notification'
import brand from '@/assets/text/brand'
import { defineNuxtComponent, useRouter, useCookie } from '#app';

export default defineNuxtComponent({
  components: {
    ThemeWrapper,
    'header-main': Header,
    VideoBanner,
    Services,
    Project,
    Featured,
    About,
    Team,
    Counter,
    Blog,
    SubscribeForm,
    'footer-main': Footer,
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
      title: brand.architect.name + ' - Home Page'
    }
  },
  computed: {
    isTablet() {
      const mdDown = this.$vuetify.display.mdAndDown
      return mdDown;
    },
    isMobile() {
      const xsDown = this.$vuetify.display.xsAndDown
      return xsDown;
    }
  }
});
</script>
