<template>
  <div class="root">
    <v-container :class="{ fixed: isDesktop }">
      <main-title
        :text="$t('cryptoLanding.testi_title')"
        align="center"
      />
      <p class="use-text-subtitle2 text-center">
        {{ $t('cryptoLanding.testi_subtitle') }}
      </p>
      <v-row class="spacing6" justify="center">
        <v-col md="10" cols="12" class="my-6">
          <div class="slider-wrap">
            <div v-if="loaded" class="carousel">
              <v-btn
                color="primary"
                variant="text"
                class="nav prev"
                @click="slickPrev()"
              >
                <i class="ion-ios-arrow-back" />
              </v-btn>
              <splide
                ref="slider"
                :options="slickOptions"
                @splide:active="handleAfterChange"
              >
                <splide-slide
                  v-for="(item, index) in testiContent"
                  :key="index"
                >
                  <div class="item">
                    <div class="test-content">
                      <testi-card
                        :text="item.text"
                        :name="item.name"
                        :title="item.title"
                        :avatar="item.avatar"
                        :active="index === active"
                      />
                    </div>
                  </div>
                </splide-slide>
              </splide>
              <v-btn
                color="primary"
                variant="text"
                class="nav next"
                @click="slickNext()"
              >
                <i class="ion-ios-arrow-forward" />
              </v-btn>
            </div>
            <div v-if="loaded" class="pagination">
              <ul>
                <li
                  v-for="index in testiContent.length"
                  :key="index"
                  :class="{ active: active === index - 1 }"
                >
                  <button type="button" @click="handleGoTo(index)" />
                </li>
              </ul>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import './testi-style.scss';
</style>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import imgApi from '@/assets/images/imgAPI';
import Title from '../Title';
import TestiCard from '../Cards/Testimonial';

const testiContent = [
  {
    text:
      'Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam nec ex aliquet, aliquam neque non.',
    name: 'John Doe',
    avatar: imgApi.avatar[6],
    title: 'Chief Digital Officer',
  },
  {
    text:
      'Vestibulum sit amet tortor sit amet libero lobortis semper at et odio. In eu tellus tellus. Pellentesque ullamcorper aliquet ultrices. Aenean facilisis vitae purus facilisis semper. Nam vitae scelerisque lorem, quis tempus libero.',
    name: 'Jean Doe',
    avatar: imgApi.avatar[7],
    title: 'Chief Digital Officer',
  },
  {
    text:
      'Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.',
    name: 'Jena Doe',
    avatar: imgApi.avatar[1],
    title: 'Graphic Designer',
  },
  {
    text: 'Sed imperdiet enim ligula, vitae viverra justo porta vel.',
    name: 'Jovelin Doe',
    avatar: imgApi.avatar[2],
    title: 'Senior Graphic Designer',
  },
  {
    text:
      'Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.',
    name: 'Jihan Doe',
    avatar: imgApi.avatar[3],
    title: 'CEO Software House',
  },
  {
    text:
      'Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.',
    name: 'John Doe',
    avatar: imgApi.avatar[9],
    title: 'Senior Graphic Designer',
  },
];

export default {
  components: {
    'main-title': Title,
    Splide,
    SplideSlide,
    TestiCard,
  },
  data() {
    return {
      loaded: false,
      currentSlide: 0,
      active: 0,
      testiContent,
      slickOptions: {
        arrows: false,
        type: 'fade',
        pagination: false,
        speed: 1000,
        autoplay: true,
        interval: 7000,
        rewind: true,
        rewindSpeed: 1000,
        reducedMotion: {
          speed: 1000,
          rewindSpeed: 1000,
        },
      },
    };
  },
  computed: {
    isDesktop() {
      const lgUp = this.$vuetify.display.lgAndUp;
      return lgUp;
    },
  },
  mounted() {
    this.loaded = true;
  },
  methods: {
    slickNext() {
      this.$refs.slider.go('>');
    },
    slickPrev() {
      this.$refs.slider.go('<');
    },
    handleGoTo(slide) {
      this.$refs.slider.go(slide - 1);
    },
    handleAfterChange(slide) {
      this.active = slide.index;
    },
  },
};
</script>
