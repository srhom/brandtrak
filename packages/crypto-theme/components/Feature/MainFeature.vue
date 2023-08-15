<template>
  <div class="main-feature">
    <v-dialog
      v-model="dialog"
      max-width="690"
    >
      <v-card class="video-popup">
        <v-card-title class="headline">
          <h2 class="text-h6 title-main">
            {{ $t('cryptoLanding.banner_title') }}
          </h2>
          <v-btn variant="flat" icon @click="handleVideoClose()">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <div v-if="yt.use" class="text-center mx-auto py-4">
          <YouTube
            ref="youtube"
            :src="videoId"
            :vars="playerVars"
            :width="640"
            :height="360"
            class="youtube"
            @ready="onReady"
          />
        </div>
      </v-card>
    </v-dialog>
    <v-container class="fixed-width">
      <v-row class="spacing6">
        <v-col md="6" class="px-6" cols="12">
          <title-main :text="$t('cryptoLanding.mainfeature_title')" :align="isMobile ? 'center' : 'left'" />
          <p class="pb-2 use-text-subtitle2" :class="[isMobile ? 'text-center' : 'text-left']">
            {{ $t('cryptoLanding.mainfeature_subtitle') }}
          </p>
          <v-card class="video">
            <figure>
              <img :src="imgAPI.crypto[4]" alt="cover">
            </figure>
            <v-btn variant="text" class="play-btn" icon @click="handleVideoOpen">
              <span class="ion-ios-play" />
            </v-btn>
          </v-card>
        </v-col>
        <v-col md="6" cols="12" class="px-6 feature-wrap">
          <div v-if="loaded" class="deco">
            <svg width="404px" height="452px" viewBox="0 0 404 452" version="1.1">
              <defs>
                <linearGradient id="featureLinearGradient-1" x1="34.1218989%" y1="15.1303808%" x2="20.0910756%" y2="110.664023%">
                  <stop :stop-color="theme.primary" offset="0%" />
                  <stop :stop-color="theme.secondary" offset="100%" />
                </linearGradient>
              </defs>
              <g id="Feature-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <path id="FeatureFill-1" d="M2,136.921005 L2,314.197531 C2,330.732338 10.8296846,346.011946 25.1636364,354.27935 L178.836364,442.917242 C193.170315,451.184645 210.829685,451.184645 225.163636,442.917242 L378.836364,354.27935 C393.170315,346.011946 402,330.732338 402,314.197531 L402,136.921005 C402,120.385457 393.170315,105.10659 378.836364,96.8384449 L225.163636,8.2005525 C210.829685,-0.066850833 193.170315,-0.066850833 178.836364,8.2005525 L25.1636364,96.8384449 C10.8296846,105.10659 2,120.385457 2,136.921005" stroke="url(#featureLinearGradient-1)" strokeWidth="4" />
              </g>
            </svg>
          </div>
          <div class="counter">
            <div class="lower">
              <v-card class="paper">
                <span class="ion-ios-ionic-outline" />
                <h6 class="text-h6">
                  +600
                </h6>
                <p>
                  {{ $t('cryptoLanding.mainfeature_supported') }}
                </p>
              </v-card>
              <v-card class="paper">
                <span class="ion-ios-people-outline" />
                <h6 class="text-h6">
                  +200K
                </h6>
                <p>
                  {{ $t('cryptoLanding.mainfeature_registered') }}
                </p>
              </v-card>
            </div>
            <div class="higher">
              <v-card class="paper">
                <span class="ion-ios-archive-outline" />
                <h6 class="text-h6">
                  +20M
                </h6>
                <p>
                  {{ $t('cryptoLanding.mainfeature_open') }}
                </p>
              </v-card>
              <v-card class="paper">
                <span class="ion-ios-heart-outline" />
                <h6 class="text-h6">
                  +50M
                </h6>
                <p>
                  {{ $t('cryptoLanding.mainfeature_invested') }}
                </p>
              </v-card>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import './feature-style.scss';
</style>

<script>
import youtube from '@/config/youtube';
import theme from '@/config/theme';
import imgAPI from '@/assets/images/imgAPI';
import Title from '../Title';

export default {
  components: {
    'title-main': Title,
  },
  data() {
    return {
      videoId: 'QPMkYyM2Gzg',
      theme,
      player: null,
      loaded: false,
      yt: youtube,
      imgAPI,
      dialog: false,
      playerVars: {
        autoplay: 0,
        controls: 1,
        rel: 0,
        showinfo: 1,
        mute: 0,
        origin: 'https://localhost:8008',
      },
    };
  },
  computed: {
    isMobile() {
      const mdDown = this.$vuetify.display.mdAndDown;
      return mdDown;
    },
  },
  mounted() {
    this.loaded = true;
  },
  methods: {
    handleVideoOpen() {
      if (this.yt.use) {
        this.dialog = true;
      }
    },
    onReady() {
      this.$refs.youtube.playVideo();
    },
    handleVideoClose() {
      this.dialog = false;
      this.$refs.youtube.pauseVideo();
    },
  },
};
</script>
