<template>
  <div class="more-feature">
    <v-container :class="{ fixed: isDesktop }">
      <div class="item">
        <v-row
          align="center"
          class="spacing6"
        >
          <v-col md="6" cols="12" class="py-md-0 px-6">
            <div class="text" :class="{ 'text-center': isMobile }">
              <span class="ion-ios-lock-outline" />
              <main-title
                :text="$t('cryptoLanding.morefeature_title1')"
                :align="isMobile ? 'center' : 'left'"
              />
              <p
                :class="isMobile ? 'text-center' : 'text-start'"
                class="use-text-subtitle2"
              >
                {{ $t('cryptoLanding.morefeature_subtitle1') }}
              </p>
            </div>
          </v-col>
          <v-col md="6" cols="12" class="py-md-0 px-6">
            <div
              data-aos="fade-left"
              data-aos-delay="300"
              data-aos-duration="300"
              data-aos-offset="100"
            >
              <figure class="illustration">
                <img src="/images/crypto/illustration1.png" alt="feature">
              </figure>
            </div>
          </v-col>
        </v-row>
      </div>
      <div class="item">
        <v-row class="spacing6" align="center">
          <v-col
            :order="isMobile ? 'last' : 'first'"
            md="6"
            cols="12"
            class="py-md-0 px-6"
          >
            <div class="text text-right">
              <div
                data-aos="fade-right"
                data-aos-delay="300"
                data-aos-duration="300"
                data-aos-offset="100"
              >
                <figure class="illustration">
                  <img src="/images/crypto/illustration2.png" alt="feature">
                </figure>
              </div>
            </div>
          </v-col>
          <v-col
            :order="isMobile ? 'first' : 'last'"
            md="6"
            cols="12"
            class="py-md-0 px-6"
          >
            <div class="text" :class="{ 'text-center': isMobile }">
              <span class="ion-ios-analytics-outline" />
              <main-title
                :text="$t('cryptoLanding.morefeature_title2')"
                :align="isMobile ? 'center' : 'left'"
              />
              <p
                :class="isMobile ? 'text-center' : 'text-start'"
                class="use-text-subtitle2"
              >
                {{ $t('cryptoLanding.morefeature_subtitle2') }}
              </p>
            </div>
          </v-col>
        </v-row>
      </div>
      <div v-if="loaded" id="statistic" class="item">
        <v-row>
          <v-col v-scroll="handleScroll" cols="12">
            <div class="text text-center">
              <span class="ion-ios-flash-outline" />
              <main-title
                :text="$t('cryptoLanding.morefeature_title3')"
                align="center"
              />
              <p class="text-center use-text-subtitle2">
                {{ $t('cryptoLanding.morefeature_subtitle3') }}
              </p>
            </div>
            <v-container class="max-md">
              <ul class="progress-wrap">
                <li
                  v-for="(item, index) in coinData"
                  :key="index"
                >
                  <div class="coin">
                    <v-avatar class="logo">
                      <img :src="item.logo" :alt="item.name">
                    </v-avatar>
                    <h5 class="text-h5">
                      {{ item.name }}
                    </h5>
                  </div>
                  <div class="progress">
                    <div class="unit">
                      <h6 class="text-h6">
                        <span>USD</span>
                        &nbsp;5.000
                      </h6>
                      <h6 class="text-h6">
                        <span>USD</span>
                        &nbsp;15.000
                      </h6>
                    </div>
                    <v-progress-linear
                      :color="item.color"
                      :model-value="play ? item.progress : 0"
                      class="track"
                    />
                  </div>
                </li>
              </ul>
            </v-container>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import './feature-style.scss';
</style>

<script>
import AOS from 'aos';
import Title from '../Title';

const coinData = [
  {
    name: 'BTC',
    logo: '/images/crypto/btc.png',
    progress: 75,
    color: '#FBA630',
  },
  {
    name: 'DASH',
    logo: '/images/crypto/dash.png',
    progress: 40,
    color: '#21D3D7',
  },
  {
    name: 'NAN',
    logo: '/images/crypto/nan.png',
    progress: 90,
    color: '#548CCC',
  },
  {
    name: 'MNR',
    logo: '/images/crypto/mnr.png',
    progress: 35,
    color: '#FF6602',
  },
  {
    name: 'IOT',
    logo: '/images/crypto/iot.png',
    progress: 80,
    color: '#CE07D4',
  },
];

export default {
  components: {
    'main-title': Title,
  },
  data: () => ({
    loaded: false,
    play: false,
    coinData,
  }),
  computed: {
    isDesktop() {
      const mdUp = this.$vuetify.display.mdAndUp;
      return mdUp;
    },
    isMobile() {
      const smDown = this.$vuetify.display.smAndDown;
      return smDown;
    },
    offsetTop() {
      const elm = document.getElementById('statistic');
      return elm.getBoundingClientRect().y;
    },
  },
  mounted() {
    this.loaded = true;
    AOS.init({
      once: true,
    });
  },
  methods: {
    handleScroll() {
      const top = this.offsetTop - window.innerHeight + 500;
      if (window.scrollY > top) {
        this.play = true;
      }
    },
  },
};
</script>
