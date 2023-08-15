<template>
  <div class="root">
    <div class="deco-wrap">
      <div class="deco-inner" :class="{ hide: hide }">
        <div class="illustration" id="vantaRef" />
      </div>
    </div>
    <hidden point="smDown">
      <div class="inner-parallax">
        <div class="cloud-wrap">
          <figure class="cloud-parallax">
            <div class="cloud-deco" />
          </figure>
        </div>
      </div>
    </hidden>
    <v-container class="max-md">
      <div class="banner-wrap">
        <div class="text">
          <h4 class="use-text-title2">
            {{ $t('hostingLanding.banner_title') }}
          </h4>
          <p class="use-text-subtitle2">
            {{ $t('hostingLanding.banner_subtitle') }}
          </p>
          <v-card class="search-domain">
            <v-text-field
              :label="$t('hostingLanding.banner_label')"
              class="search"
              hide-details
              variant="filled"
              color="primary"
            />
            <div class="action">
              <hidden point="smDown">
                <div class="form-control">
                  <v-select
                    v-model="val"
                    :items="items"
                    name="domain"
                    variant="filled"
                    hide-details
                    class="select-domain"
                  ></v-select>
                </div>
              </hidden>
              <v-btn class="button" color="primary" size="large">
                <v-icon class="icon">mdi-magnify</v-icon>
                <span v-if="isDesktop">
                  {{ $t('hostingLanding.banner_button') }}
                </span>
              </v-btn>
            </div>
          </v-card>
        </div>
      </div>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import './banner-style.scss';
</style>

<script>
import * as THREE from 'three';
import colors from 'vuetify/lib/util/colors';
import { palette } from '@/config/theme';
import Hidden from '../Hidden';

export default {
  components: {
    Hidden
  },
  data() {
    return {
      theme: palette,
      hide: false,
      name: '',
      domain: 'com',
      items: ['.com', '.net', '.org', '.co', '.biz', '.gov', '.id', '.abc', '.xyz', '.news', '.cc', '.me'], // eslint-disable-line
      val: '.com'
    }
  },
  async mounted() {
    if (process.client) {
      window.THREE = THREE;
      const { default: NET } = await import('vanta/dist/vanta.net.min');

      NET({
        el: '#vantaRef',
        THREE: THREE,
        color: palette.cloud.primary,
        backgroundColor: palette.cloud.primarylight,
        backgroundAlpha: 0,
        points: 4,
        maxDistance: 18,
        spacing: 12,
      })
    }
  },
  computed: {
    isDesktop() {
      const mdUp = this.$vuetify.display.mdAndUp;
      return mdUp;
    }
  },
}
</script>
