<template>
  <div class="root">
    <v-container :class="{ fixed: isDesktop }">
      <main-title
        :caption="$t('hostingLanding.testi_headtitle')"
        :text="$t('hostingLanding.testi_title')"
        align="center"
      />
      <div class="slider-wrap">
        <div class="carousel" v-if="loaded">
          <v-btn
            color="primary"
            size="small"
            class="nav prev"
            @click="slickPrev()"
          >
            <i class="ion-ios-arrow-back" />
          </v-btn>
          <splide
            ref="slider"
            :options="slickOptions"
          >
            <splide-slide
              v-for="(item, index) in testiContent"
              :key="index"
            >
              <div class="item">
                <testi-card
                  :text="item.text"
                  :name="item.name"
                  :title="item.title"
                />
              </div>
            </splide-slide>
          </splide>
          <v-btn
            color="primary"
            size="small"
            class="nav next"
            @click="slickNext()"
          >
            <i class="ion-ios-arrow-forward" />
          </v-btn>
        </div>
      </div>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import './testi-style.scss';
</style>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import Title from '../Title'
import TestiCard from '../Cards/Testimonial'

const testiData = [
  {
    text:
      'Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam nec ex aliquet, aliquam neque non.',
    name: 'John Doe',
    title: 'Chief Digital Officer'
  },
  {
    text:
      'Vestibulum sit amet tortor sit amet libero lobortis semper at et odio. In eu tellus tellus. Pellentesque ullamcorper aliquet ultrices. Aenean facilisis vitae purus facilisis semper. Nam vitae scelerisque lorem, quis tempus libero.',
    name: 'Jean Doe',
    title: 'Chief Digital Officer'
  },
  {
    text:
      'Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.',
    name: 'Jena Doe',
    title: 'Graphic Designer'
  },
  {
    text: 'Sed imperdiet enim ligula, vitae viverra justo porta vel.',
    name: 'Jovelin Doe',
    title: 'Senior Graphic Designer'
  },
  {
    text:
      'Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.',
    name: 'Jihan Doe',
    title: 'CEO Software House'
  },
  {
    text:
      'Vestibulum sit amet tortor sit amet libero lobortis semper at et odio. In eu tellus tellus. Pellentesque ullamcorper aliquet ultrices. Aenean facilisis vitae purus facilisis semper. Nam vitae scelerisque lorem, quis tempus libero.',
    name: 'Jovelin Doe',
    title: 'Senior Graphic Designer'
  }
]

export default {
  components: {
    'main-title': Title,
    TestiCard,
    Splide,
    SplideSlide
  },
  data() {
    return {
      loaded: false,
      currentSlide: 0,
      testiContent: testiData,
      slickOptions: {
        pagination: false,
        type: 'loop',
        speed: 500,
        autoplay: true,
        interval: 7000,
        perPage: 2,
        perMove: 1,
        arrows: false,
        pauseOnHover: true,
        breakpoints: {
          960: {
            perPage: 1,
          }
        },
        reducedMotion: {
          autoplay: true,
          speed: 500,
          rewindSpeed: 1000,
        },
      }
    }
  },
  mounted() {
    this.loaded = true;
    setTimeout(() => {
      if (this.$vuetify.locale.isRtl) {
        this.slickOptions.direction = 'rtl';
      } else {
        this.slickOptions.direction = 'ltr';
      }
    }, 100);
  },
  methods: {
    slickNext() {
      this.$refs.slider.go('>');
    },
    slickPrev() {
      this.$refs.slider.go('<');
    }
  },
  computed: {
    isDesktop() {
      const lgUp = this.$vuetify.display.lgAndUp;
      return lgUp;
    }
  }
}
</script>
