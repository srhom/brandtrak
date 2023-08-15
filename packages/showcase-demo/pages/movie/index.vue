<template>
  <theme-wrapper theme="passion">
    <div>
      <div class="main-wrap">
        <header-main />
        <div class="container-wrap scroll-nav-content">
          <section id="home">
            <video-banner />
          </section>
          <div id="promotions">
            <promotions />
          </div>
          <section id="featured" class="space-top">
            <featured />
          </section>
          <section id="trending" class="space-top">
            <trending />
          </section>
          <section id="top" class="space-top">
            <categories />
          </section>
          <section id="all" class="space-top-short">
            <all-categories />
          </section>
          <section id="pricing" class="space-top">
            <pricing-plan />
          </section>
          <section id="faq" class="space-top">
            <faq />
          </section>
          <section id="news" class="space-top-short">
            <news-event />
          </section>
        </div>
        <div id="footer">
          <footer-with-deco />
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
  .theme--dark & {
    background-color: $dark-background-default;
  }
  .theme--light & {
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
import ThemeWrapper from '@/components/ThemeWrapper'
import Header from '@/components/movie/Header'
import VideoBanner from '@/components/movie/VideoBanner'
import Promotions from '@/components/movie/Promotions'
import Featured from '@/components/movie/Featured'
import Trending from '@/components/movie/Trending'
import Categories from '@/components/movie/Categories'
import AllCategories from '@/components/movie/AllCategories'
import PricingPlan from '@/components/movie/PricingPlan'
import Faq from '@/components/movie/Faq'
import NewsEvent from '@/components/movie/NewsEvent'
import FooterWithDeco from '@/components/movie/Footer/FooterWithDeco'
import Hidden from '@/components/movie/Hidden'
import PageNav from '@/components/movie/PageNav'
import Notification from '@/components/movie/Notification'
import brand from '@/assets/text/brand'

export default defineNuxtComponent({
  components: {
    ThemeWrapper,
    'header-main': Header,
    VideoBanner,
    Promotions,
    Featured,
    Trending,
    Categories,
    AllCategories,
    PricingPlan,
    Faq,
    NewsEvent,
    FooterWithDeco,
    PageNav,
    Hidden,
    Notification
  },
  head() {
    return {
      title: brand.movie.name + ' - Home Page'
    }
  }
})
</script>
