<template>
  <theme-wrapper theme="grayscale">
    <div>
      <div class="main-wrap">
        <header-main />
        <div class="container-wrap scroll-nav-content">
          <section id="home">
            <video-banner />
            <div id="promotions">
              <promotions />
            </div>
          </section>
          <section id="all-new" class="space-top">
            <new-products />
          </section>
          <section id="trending" class="space-top">
            <trending />
          </section>
          <section id="categories" class="space-top">
            <categories />
          </section>
          <section id="featured" class="space-top-short">
            <featured-products />
          </section>
          <section id="testimonials" class="space-top">
            <testimonials />
          </section>
          <section id="blog">
            <blog />
          </section>
          <section id="feature" class="space-top-short">
            <feature />
          </section>
        </div>
        <section id="footer" class="space-top">
          <footer-main />
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
  .v-theme--dark & {
    background-color: $dark-background-default;
  }
  .v-theme--light & {
    background-color: $light-background-paper;
  }
}
.space-bottom {
  margin-bottom: section-margin(6px);
  @include breakpoints-down(sm) {
    margin-bottom: section-margin(3px);
  }
  @include breakpoints-down(xs) {
    margin-bottom: section-margin(2px);
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
  @include breakpoints-down(xs) {
    margin-top: section-margin(2px);
  }
}
.space-top-short {
  margin-top: section-margin($spacing1 * 0.5);
  @include breakpoints-down(sm) {
    margin-top: section-margin(3px);
  }
  @include breakpoints-down(xs) {
    margin-top: section-margin(2px);
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
import Header from '@/components/fashion/Header'
import VideoBanner from '@/components/fashion/VideoBanner'
import Promotions from '@/components/fashion/Promotions'
import NewProducts from '@/components/fashion/NewProducts'
import Trending from '@/components/fashion/Trending'
import Categories from '@/components/fashion/Categories'
import FeaturedProducts from '@/components/fashion/FeaturedProducts'
import Testimonials from '@/components/fashion/Testimonials'
import Blog from '@/components/fashion/Blog'
import Feature from '@/components/fashion/Feature'
import Footer from '@/components/fashion/Footer'
import Hidden from '@/components/fashion/Hidden'
import PageNav from '@/components/fashion/PageNav'
import Notification from '@/components/fashion/Notification'
import brand from '@/assets/text/brand'
import { defineNuxtComponent, useRouter, useCookie } from '#app';

export default defineNuxtComponent({
  components: {
    ThemeWrapper,
    'header-main': Header,
    VideoBanner,
    Promotions,
    NewProducts,
    Trending,
    Categories,
    FeaturedProducts,
    Testimonials,
    Blog,
    Feature,
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
      title: brand.fashion.name + ' - Home Page'
    }
  }
})
</script>
