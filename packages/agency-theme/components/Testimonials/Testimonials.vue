<template>
  <div class="root">
    <square-parallax :loaded="loaded" />
    <div v-if="loaded" class="carousel">
      <splide
        ref="splide"
        :options="slickOptions"
      >
        <splide-slide
          v-for="(item, index) in testiContent"
          :key="index"
          class="item"
        >
          <testimonial-card
            :avatar="item.avatar"
            :title="item.title"
            :name="item.name"
            :text="item.text"
            :star="item.rating"
          />
        </splide-slide>
        <splide-slide class="item">
          <div class="item-props-last" />
        </splide-slide>
      </splide>
    </div>
    <div class="floating-title">
      <v-container class="fixed-width">
        <div class="title">
          <title-icon
            :text="$t('agencyLanding.testimonial_title')"
            icon="format-quote-close"
          />
        </div>
      </v-container>
    </div>
    <company-logo />
  </div>
</template>

<style lang="scss" scoped>
@import './testi-style.scss';
</style>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import imgAPI from '@/assets/images/imgAPI';
import TestimonialCard from '../Cards/Testimonial';
import TitleIcon from '../Title/WithIcon';
import CompanyLogo from '../CompanyLogo';
import SquareParallax from '../Parallax/SingleSquare';

export default {
  components: {
    Splide,
    SplideSlide,
    TestimonialCard,
    TitleIcon,
    CompanyLogo,
    SquareParallax,
  },
  data() {
    return {
      loaded: false,
      testiContent: [
        {
          text: 'Sed imperdiet enim ligula, vitae viverra justo porta vel.',
          avatar: imgAPI.avatar[10],
          name: 'John Doe',
          title: 'Chief Digital Officer',
          rating: 5,
        },
        {
          text:
            'Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.',
          avatar: imgAPI.avatar[1],
          name: 'Jean Doe',
          title: 'Chief Digital Officer',
          rating: 4,
        },
        {
          text:
            'Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.',
          avatar: imgAPI.avatar[2],
          name: 'Jena Doe',
          title: 'Graphic Designer',
          rating: 4,
        },
        {
          text: 'Sed imperdiet enim ligula, vitae viverra justo porta vel.',
          avatar: imgAPI.avatar[3],
          name: 'Jovelin Doe',
          title: 'Senior Graphic Designer',
          rating: 3,
        },
        {
          text:
            'Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.',
          avatar: imgAPI.avatar[4],
          name: 'Jihan Doe',
          title: 'CEO Software House',
          rating: 5,
        },
        {
          text:
            'Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.',
          avatar: imgAPI.avatar[6],
          name: 'Jovelin Doe',
          title: 'Senior Graphic Designer',
          rating: 5,
        },
        {
          text:
            'Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.',
          avatar: imgAPI.avatar[7],
          name: 'John Doe',
          title: 'Senior Graphic Designer',
          rating: 4,
        },
        {
          text: 'Sed imperdiet enim ligula, vitae viverra justo porta vel.',
          avatar: imgAPI.avatar[10],
          name: 'John Doe',
          title: 'Chief Digital Officer',
          rating: 5,
        },
        {
          text:
            'Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.',
          avatar: imgAPI.avatar[1],
          name: 'Jean Doe',
          title: 'Chief Digital Officer',
          rating: 4,
        },
      ],
      slickOptions: {
        pagination: true,
        speed: 500,
        perPage: 4,
        arrows: false,
        perMove: 1,
        autoWidth: true,
        direction: 'ltr',
        reducedMotion: {
          speed: 500,
          rewindSpeed: 1000,
        },
        breakpoints: {
          1100: {
            perPage: 4,
            autoWidth: false,
            perMove: 1,
            rewind: true,
            pagination: true,
          },
          800: {
            perPage: 3,
          },
          600: {
            autoWidth: true,
            perPage: 1,
          },
        },
      },
    };
  },
  mounted() {
    this.loaded = true;
    const props = window.innerWidth > 1400 ? 1 : 2; // div.carousel-props length for screen < 1400px and (-1) for screen > 1400px
    const lastSlide = Math.floor(this.testiContent.length + props - this.slickOptions.perPage);

    setTimeout(() => {
      if (this.$vuetify.locale.isRtl) {
        this.slickOptions.direction = 'rtl';
      } else {
        this.slickOptions.direction = 'ltr';
      }

      if (window.innerWidth > 1279) {
        this.$refs.splide.go(lastSlide);
      }
    }, 100);
  },
};
</script>
