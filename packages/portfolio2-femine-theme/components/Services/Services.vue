<template>
  <div class="root">
    <div class="floating-title">
      <title-main>
        <strong>
          {{ $t('profileLanding.services_title') }}
        </strong>
      </title-main>
      <p class="use-text-paragraph">
        {{ $t('profileLanding.services_desc') }}
      </p>
    </div>
    <div class="slider-wrap">
      <div v-if="loaded" class="carousel">
        <v-btn class="nav prev" @click="prev()">
          <i class="ion-ios-arrow-back" />
        </v-btn>
        <splide ref="slick" :options="slickOptions">
          <splide-slide>
            <div class="item">
              <div class="item item-props-first">
                <div />
              </div>
            </div>
          </splide-slide>
          <splide-slide
            v-for="(item, index) in services"
            :key="index"
          >
            <div class="item">
              <icon-text-card
                :icon="item.icon"
                :text="item.name"
                :desc="item.desc"
              />
            </div>
          </splide-slide>
          <splide-slide>
            <div class="item">
              <div class="item item-props-last">
                <div />
              </div>
            </div>
          </splide-slide>
        </splide>
        <v-btn class="nav next" @click="next()">
          <i class="ion-ios-arrow-forward" />
        </v-btn>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './services-style.scss';
</style>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import Title from '../Title';
import IconTextCard from '../Cards/IconText';

export default {
  components: {
    'title-main': Title,
    IconTextCard,
    Splide,
    SplideSlide,
  },
  data() {
    return {
      loaded: false,
      slickOptions: {
        pagination: false,
        speed: 500,
        perPage: 5,
        perMove: 1,
        arrows: false,
        autoWidth: true,
        direction: 'ltr',
        breakpoints: {
          960: {
            perPage: 3,
          },
        },
        reducedMotion: {
          speed: 500,
          rewindSpeed: 1000,
        },
      },
      services: [
        {
          icon: 'ion-ios-color-wand',
          name: 'UI Interface Design',
          desc: 'Pellentesque ac  vel blandit nulla.',
        },
        {
          icon: 'ion-logo-dribbble',
          name: 'Icon Design',
          desc: 'Pellentesque ac  vel blandit nulla.',
        },
        {
          icon: 'ion-ios-globe',
          name: 'HTML Prototyping',
          desc: 'Pellentesque ac  vel blandit nulla.',
        },
        {
          icon: 'ion-ios-camera-outline',
          name: 'Photo Editing',
          desc: 'Pellentesque ac  vel blandit nulla.',
        },
        {
          icon: 'ion-ios-snow',
          name: 'Graphic Illustrations',
          desc: 'Pellentesque ac  vel blandit nulla.',
        },
      ],
    };
  },
  mounted() {
    this.loaded = true;
    setTimeout(() => {
      if (this.$vuetify.locale.isRtl) {
        this.slickOptions.direction = 'rtl';
      } else {
        this.slickOptions.direction = 'ltr';
      }
    }, 200);
  },
  methods: {
    next() {
      this.$refs.slick.go('>');
    },
    prev() {
      this.$refs.slick.go('<');
    },
  },
};
</script>
