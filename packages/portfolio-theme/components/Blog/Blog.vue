<template>
  <div class="root">
    <div class="floating-title">
      <title-main>
        {{ $t('profileLanding.blog_title') }}
        <strong>
          {{ $t('profileLanding.blog_titlebold') }}
        </strong>
      </title-main>
      <p class="mb-0 use-text-paragraph">
        {{ $t('profileLanding.blog_desc') }}
      </p>
      <v-btn variant="text" class="link" color="primary" href="#">
        luxi-theme.blog.com
      </v-btn>
    </div>
    <div class="slider-wrap">
      <div v-if="loaded" class="carousel">
        <v-btn
          icon
          fab
          class="nav prev"
          @click="prev()"
        >
          <i class="ion-ios-arrow-back" />
        </v-btn>
        <splide ref="slick" :options="slickOptions">
          <splide-slide>
            <div class="item item-props-first">
              <div />
            </div>
          </splide-slide>
          <splide-slide
            v-for="(item, index) in blogData"
            :key="index"
          >
            <div class="item">
              <blog-post-card
                :img="item.img"
                :title="item.title"
                :desc="item.desc"
              />
            </div>
          </splide-slide>
          <splide-slide>
            <div class="item item-props-last">
              <div />
            </div>
          </splide-slide>
        </splide>
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
  </div>
</template>

<style lang="scss" scoped>
@import './blog-style.scss';
</style>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import Title from '../Title';
import BlogPostCard from '../Cards/BlogPost';
import imgApi from '@/assets/images/imgAPI';

const blogData = [
  {
    img: imgApi.photo[0],
    title: 'Vivamus sit amet interdum elit',
    desc:
      'Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat…',
  },
  {
    img: imgApi.photo[1],
    title: 'Vivamus sit amet interdum elit',
    desc:
      'Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat…',
  },
  {
    img: imgApi.photo[2],
    title: 'Vivamus sit amet interdum elit',
    desc:
      'Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat…',
  },
  {
    img: imgApi.photo[3],
    title: 'Vivamus sit amet interdum elit',
    desc:
      'Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat…',
  },
  {
    img: imgApi.photo[4],
    title: 'Vivamus sit amet interdum elit',
    desc:
      'Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat…',
  },
  {
    img: imgApi.photo[5],
    title: 'Vivamus sit amet interdum elit',
    desc:
      'Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat…',
  },
];

export default {
  components: {
    'title-main': Title,
    BlogPostCard,
    Splide,
    SplideSlide,
  },
  data() {
    return {
      loaded: false,
      blogData,
      slickOptions: {
        pagination: false,
        speed: 500,
        perPage: 4,
        perMove: 1,
        arrows: false,
        autoWidth: true,
        direction: 'ltr',
        breakpoints: {
          1080: {
            perPage: 3,
          },
          600: {
            perPage: 2,
          },
        },
        reducedMotion: {
          speed: 500,
          rewindSpeed: 1000,
        },
      },
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
