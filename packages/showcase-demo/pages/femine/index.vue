<template>
  <theme-wrapper theme="femine">
    <div>
      <div class="main-wrap scroll-nav-content">
        <main-header />
        <section id="home">
          <banner-nav />
        </section>
        <section id="about">
          <about />
          <timeline />
          <counter />
        </section>
        <div class="grey-bg">
          <div class="deco-wrap">
            <decoration />
            <section id="services">
              <services />
            </section>
            <section id="my-work" class="space-top-short space-bottom-short">
              <gallery />
            </section>
          </div>
          <section id="testimonials">
            <testimonials />
          </section>
          <div class="deco-wrap bottom">
            <decoration />
            <section id="blog" class="space-top-short">
              <blog />
            </section>
            <section id="contact" class="space-top">
              <main-footer />
            </section>
          </div>
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
  @include palette-text-primary;
  .v-theme--dark & {
    background-color: $dark-background-default;
  }
  .v-theme--light & {
    background-color: $light-background-paper;
  }
}
.grey-bg {
  padding-top: $spacing10;
}
.space-bottom {
  margin-bottom: section-margin(6px);
  @include breakpoints-down(sm) {
    margin-bottom: section-margin($spacing1 * 0.5);
  }
}
.space-bottom-short {
  margin-bottom: section-margin($spacing1 * 0.5);
}
.space-top {
  margin-top: section-margin(6px);
  @include breakpoints-down(sm) {
    margin-top: section-margin(3px);
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
.deco-wrap {
  position: relative;
  &.bottom :deep(.inner-parallax) {
    top: -1500px;
  }
}
.bottom-deco {
  top: -200px;
  position: absolute;
  width: 100%;
  height: calc(100% + 200px);
}
</style>

<script>
import { onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import ThemeWrapper from '@/components/ThemeWrapper'
import Header from '@/components/femine/Header'
import BannerNav from '@/components/femine/BannerNav'
import About from '@/components/femine/About'
import Timeline from '@/components/femine/Timeline'
import Decoration from '@/components/femine/Parallax/Decoration'
import Services from '@/components/femine/Services'
import Gallery from '@/components/femine/Gallery'
import Counter from '@/components/femine/Counter'
import Testimonials from '@/components/femine/Testimonials'
import Blog from '@/components/femine/Blog'
import Footer from '@/components/femine/Footer'
import Hidden from '@/components/femine/Hidden'
import PageNav from '@/components/femine/PageNav'
import Notification from '@/components/femine/Notification'
import brand from '@/assets/text/brand'
import { setDark } from '@/composables/uiTheme';
import { defineNuxtComponent, useRouter, useCookie } from '#app';

export default defineNuxtComponent({
  components: {
    ThemeWrapper,
    'main-header': Header,
    About,
    BannerNav,
    Timeline,
    Counter,
    Decoration,
    Services,
    Gallery,
    Testimonials,
    Blog,
    'main-footer': Footer,
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
      title: brand.femine.name + ' -  Luxi Theme Profile',
    }
  },
  mounted() {
    setDark();
  }
});
</script>
