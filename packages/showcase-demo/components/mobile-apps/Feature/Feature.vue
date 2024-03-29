<template>
  <div class="root">
    <v-dialog
      v-model="dialog"
      max-width="690"
    >
      <v-card class="video-popup">
        <v-card-title class="headline">
          <h2 class="text-h6 title-main">
            {{ $t('mobileLanding.feature_video') }}
          </h2>
          <v-btn variant="flat" icon @click="handleVideoClose()">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <div v-if="yt.use" class="text-center mx-auto py-4">
          <YouTube
            :src="videoId"
            :vars="playerVars"
            :width= "640"
            :height="360"
            ref="youtube"
            class="youtube"
            @ready="onReady"
          />
        </div>
      </v-card>
    </v-dialog>
    <title-main align="center">
      {{ $t('mobileLanding.feature_title') }}
    </title-main>
    <v-container class="fixed-width">
      <div class="item first">
        <v-row :class="[isMobile ? 'column-reverse' : 'row']">
          <v-col cols="12" md="6" class="py-0">
            <div class="illustration-left">
              <svg class="deco-primary">
                <use xlink:href="/images/mobile/deco-feature.svg#main" />
              </svg>
              <parallax-small />
              <figure class="screen">
                <img :src="imgAPI.mobile[4]" alt="illustration" />
              </figure>
            </div>
          </v-col>
          <v-col md="6" cols="12" class="py-0">
            <div class="text">
              <title-secondary
                :align="isMobile ? 'center' : 'left'"
                :text="$t('mobileLanding.feature_title1')"
              />
              <p class="use-text-subtitle2">
                {{ $t('mobileLanding.feature_desc1') }}
              </p>
            </div>
          </v-col>
        </v-row>
      </div>
    </v-container>
    <div class="bg-color">
      <div class="deco-bg-top" />
      <v-container class="fixed-width">
        <div class="item">
          <v-row>
            <v-col md="6" cols="12" class="py-0">
              <div class="text">
                <title-secondary
                  :text="$t('mobileLanding.feature_title2')"
                  :align="isMobile ? 'center' : 'left'"
                />
                <p class="use-text-subtitle2">
                  {{ $t('mobileLanding.feature_desc2') }}
                </p>
              </div>
            </v-col>
            <v-col md="6" cols="12" class="py-0">
              <div class="illustration-right">
                <svg class="deco-secondary">
                  <use xlink:href="/images/mobile/deco-feature.svg#main" />
                </svg>
                <parallax-small />
                <figure class="screen">
                  <img :src="imgAPI.mobile[5]" alt="screen" />
                </figure>
              </div>
            </v-col>
          </v-row>
        </div>
        <div class="item last">
          <title-secondary align="center" :text="$t('mobileLanding.feature_title3')" />
          <p class="text-center use-text-subtitle2">
            {{ $t('mobileLanding.feature_desc3') }}
          </p>
          <v-container class="max-sm pa-0">
            <v-row>
              <v-col sm="12" cols="12" class="py-0">
                <div class="illustration-center">
                  <svg class="deco-primary-big">
                    <use xlink:href="/images/mobile/deco-feature.svg#main" />
                  </svg>
                  <parallax-medium />
                  <v-card class="video">
                    <img :src="imgAPI.mobile[6]" alt="screen" />
                    <h6 class="use-text-subtitle2">
                      {{ $t('mobileLanding.feature_watch') }}
                    </h6>
                    <v-btn icon large class="button" @click="handleVideoOpen()">
                      <i class="ion-ios-play-outline" />
                    </v-btn>
                  </v-card>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </div>
      </v-container>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './feature-style.scss';
</style>

<script>
import imgAPI from '@/assets/images/imgAPI'
import youtube from '@/config/youtube'
import ParallaxSmall from '../Parallax/Small'
import ParallaxMedium from '../Parallax/Medium'
import Title from '../Title'
import TitleSecondary from '../Title/TitleSecondary'

export default {
  components: {
    ParallaxSmall,
    ParallaxMedium,
    TitleSecondary,
    'title-main': Title
  },
  data() {
    return {
      videoId: 'MltGO66gTbo',
      imgAPI: imgAPI,
      dialog: false,
      player: null,
      playerVars: {
        autoplay: 0,
        controls: 1,
        rel: 0,
        showinfo: 1,
        mute: 0,
        origin: 'https://localhost:8006'
      },
      yt: youtube
    }
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
      this.dialog = false
      this.$refs.youtube.pauseVideo();
    }
  },
  computed: {
    isMobile() {
      const smDown = this.$vuetify.display.smAndDown;
      return smDown;
    }
  }
}
</script>
