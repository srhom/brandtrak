<template>
  <div class="root">
    <div class="decoration">
      <svg fill="#cccccc">
        <use xlink:href="/images/movie/deco-med-bg.svg#main" />
      </svg>
    </div>
    <v-container :class="{ 'fixed-width': isDesktop }">
      <v-row class="spacing3">
        <v-col md="3" cols="12" class="pt-10">
          <title-main
            :align="isTablet ? 'center' : 'left'"
            primary="Featured"
            secondary="Movies"
          />
          <p :class="isTablet ? 'text-center' : ''" class="use-text-paragrpah">
            {{ $t('movieLanding.new_desc') }}
          </p>
        </v-col>
        <v-col
          v-for="(item, index) in movieList"
          :key="index"
          md="3"
          sm="4"
          cols="12"
        >
          <movie-thumb
            :text="item.title"
            :img="item.thumb"
          />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import './featured-style.scss';
</style>

<script>
import imgAPI from '@/assets/images/imgAPI';
import Title from '../Title';
import MovieThumb from '../Cards/MovieThumb';

export default {
  components: {
    'title-main': Title,
    MovieThumb,
  },
  data() {
    return {
      imgAPI,
      movieList: [
        {
          title: 'Cras convallis lacus',
          thumb: imgAPI.movie[2],
        },
        {
          title: 'Cras convallis lacus',
          thumb: imgAPI.movie[3],
        },
        {
          title: 'Cras convallis lacus',
          thumb: imgAPI.movie[4],
        },
      ],
    };
  },
  computed: {
    isDesktop() {
      const mdUp = this.$vuetify.display.mdAndUp;
      return mdUp;
    },
    isMobile() {
      const xsDown = this.$vuetify.display.xsAndDown;
      return xsDown;
    },
    isTablet() {
      const smDown = this.$vuetify.display.smAndDown;
      return smDown;
    },
  },
};
</script>
