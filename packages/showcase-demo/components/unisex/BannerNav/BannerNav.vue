<template>
  <div class="root">
    <div>
      <v-row class="mx-0">
        <v-col :lg="navigation === 'icon' ? 1 : 2" cols="12" class="pa-0 px-2">
          <hidden point="mdDown">
            <side-navigation-icon v-if="navigation === 'icon'" />
            <side-navigation v-if="navigation === 'text'" />
          </hidden>
        </v-col>
        <v-col :lg="navigation === 'icon' ? 11 : 10" cols="12" class="pa-0">
          <div class="banner">
            <div class="cover">
              <div class="figure">
                <div v-if="bannerHero === 'image'" class="img" :style="'background-image: url('+brand.unisex.cover+')'" />
                <video-hero v-if="bannerHero === 'video'" />
                <animation v-if="bannerHero === 'animation'" />
                <animation-slideshow v-if="bannerHero === 'animation-slideshow'" />
                <slideshow v-if="bannerHero === 'slideshow'" />
              </div>
            </div>
            <hidden point="mdDown">
              <div class="setting-icon">
                <settings />
              </div>
            </hidden>
            <div class="text">
              <div>
                <h4 class="use-text-subtitle">
                  {{ $t('profileLanding.banner_greeting') }},
                </h4>
                <h2 class="use-text-title">
                  {{ $t('profileLanding.banner_me') }}
                  &nbsp;{{ brand.unisex.name }}, {{ brand.unisex.title }}
                </h2>
                <hidden point="smDown">
                  <h5 class="use-text-subtitle2">
                    {{ $t('profileLanding.banner_desc') }}
                  </h5>
                  <div class="socmed">
                    <v-btn color="white" variant="outlined" elevation="0" class="download" to="#">Download CV</v-btn>
                    <v-btn icon size="small" variant="text" class="margin">
                      <i class="ion-logo-facebook" />
                    </v-btn>
                    <v-btn icon size="small" variant="text" class="margin">
                      <i class="ion-logo-twitter " />
                    </v-btn>
                    <v-btn icon size="small" variant="text" class="margin">
                      <i class="ion-logo-instagram" />
                    </v-btn>
                    <v-btn icon size="small" variant="text" class="margin">
                      <i class="ion-logo-linkedin" />
                    </v-btn>
                  </div>
                </hidden>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './banner-style.scss';
</style>

<script>
import SideNavigation from '../SideNavigation'
import SideNavigationIcon from '../SideNavigation/SideNavigationIcon'
import Hidden from '../Hidden'
import brand from '@/assets/text/brand'
import Settings from '../Settings'
import Animation from './Hero/Animation'
import AnimationSlideshow from './Hero/AnimationSlideshow'
import Slideshow from './Hero/Slideshow'
import Video from './Hero/Video'

export default {
  components: {
    Hidden,
    SideNavigationIcon,
    SideNavigation,
    Settings,
    Animation,
    AnimationSlideshow,
    Slideshow,
    'video-hero': Video
  },
  data: () => ({
    brand: brand,
    navigation: 'icon',
    bannerHero: 'animation'
  }),
  computed: {
    isDesktop() {
      const lgUp = this.$vuetify.display.lgAndUp
      return lgUp;
    }
  }
}
</script>
