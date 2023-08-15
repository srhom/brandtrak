<template>
  <div class="root">
    <div class="parallax-wrap">
      <dot-parallax />
    </div>
    <v-container>
      <div class="floating-title">
        <title-main
          :head="$t('educationLanding.popular_title')"
          :desc="$t('educationLanding.popular_desc')"
          :align="isMobile ? 'center' : 'left'"
          dark
          color="primary"
        />
      </div>
    </v-container>
    <div class="slider-wrap">
      <div class="carousel" v-if="loaded">
        <splide ref="splide" :options="slickOptions">
          <splide-slide>
            <div class="props item-props-first">
              <div />
            </div>
          </splide-slide>
          <splide-slide
            v-for="(item, index) in courseData"
            :key="index"
          >
            <div class="item">
              <general-card
                :img="item.img"
                :title="item.title"
                :desc="item.desc"
                :rating="item.rating"
                :price="item.price"
              />
            </div>
          </splide-slide>
          <splide-slide>
            <div class="props item-props-last">
              <div />
            </div>
          </splide-slide>
        </splide>
      </div>
      <v-btn
        icon
        fab
        class="nav prev"
        @click="prev()"
      >
        <i class="ion-ios-arrow-back" />
      </v-btn>
      <v-btn
        icon
        fab
        class="nav next"
        @click="next()"
      >
        <i class="ion-ios-arrow-forward" />
      </v-btn>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './popular-course-style.scss';
</style>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import imgAPI from '@/assets/images/imgAPI'
import GeneralCard from '../Cards/General'
import Title from '../Title'
import DotParallax from '../Parallax/Dot'

const courseData = [
  {
    img: imgAPI.education[9],
    title: 'Vivamus sit amet',
    rating: 5,
    price: 50,
    desc:
      'Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat…'
  },
  {
    img: imgAPI.education[5],
    title: 'Vivamus sit amet',
    rating: 4,
    price: 10,
    desc:
      'Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat…'
  },
  {
    img: imgAPI.education[3],
    title: 'Vivamus sit amet',
    rating: 5,
    price: 50,
    desc:
      'Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat…'
  },
  {
    img: imgAPI.education[4],
    title: 'Vivamus sit amet',
    rating: 3,
    price: 25,
    desc:
      'Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat…'
  },
  {
    img: imgAPI.education[8],
    title: 'Vivamus sit amet',
    rating: 5,
    price: 50,
    desc:
      'Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat…'
  },
  {
    img: imgAPI.education[7],
    title: 'Vivamus sit amet',
    rating: 5,
    price: 40,
    desc:
      'Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat…'
  }
]

export default {
  components: {
    'title-main': Title,
    DotParallax,
    GeneralCard,
    Splide,
    SplideSlide,
  },
  data() {
    return {
      imgAPI: imgAPI,
      loaded: false,
      courseData: courseData,
      slickOptions: {
        pagination: false,
        direction: 'ltr',
        speed: 500,
        perPage: 4,
        perMove: 1,
        arrows: false,
        autoWidth: true,
        reducedMotion: {
          speed: 500,
          rewindSpeed: 1000,
        },
        breakpoints: {
          1100: {
            perPage: 4,
          },
          800: {
            perPage: 3,
          },
          600: {
            perPage: 2,
          }
        }
      }
    }
  },
  mounted() {
    this.loaded = true
    const props = window.innerWidth > 1400 ? 1 : 2 // div.carousel-props length for screen < 1400px and (-1) for screen > 1400px
        
    const lastSlide = Math.floor(
      this.courseData.length + props - this.slickOptions.perPage
    )
    setTimeout(() => {
      if (this.$vuetify.locale.isRtl) {
        this.slickOptions.direction = 'rtl';
        this.$refs.splide.go(lastSlide);
      } else {
        this.slickOptions.direction = 'ltr';
      }
    }, 200);
  },
  computed: {
    isMobile() {
      const xsDown = this.$vuetify.display.xsAndDown;
      return xsDown;
    }
  },
  methods: {
    next() {
      this.$refs.splide.go('>');
    },
    prev() {
      this.$refs.splide.go('<');
    },
  }
}
</script>
