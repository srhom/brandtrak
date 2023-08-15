<template>
  <div class="root">
    <v-container>
      <title-main>
        {{ $t('profileLanding.gallery_title') }}
        <strong>
          {{ $t('profileLanding.gallery_titleBold') }}
        </strong>
      </title-main>
      <div class="filter">
        <v-btn
          @click="filterChildren('all')"
          :class="{ selected: filter === 'all' }"
        >
          All
        </v-btn>
        <v-btn
          @click="filterChildren('cat1')"
          :class="{ selected: filter === 'cat1' }"
        >
          Category 1
        </v-btn>
        <v-btn
          @click="filterChildren('cat2')"
          :class="{ selected: filter === 'cat2' }"
        >
          Category 2
        </v-btn>
        <v-btn
          @click="filterChildren('cat3')"
          :class="{ selected: filter === 'cat3' }"
        >
          Category 3
        </v-btn>
        <v-btn
          @click="filterChildren('cat4')"
          :class="{ selected: filter === 'cat4' }"
        >
          Category 4
        </v-btn>
        <v-btn
          @click="filterChildren('cat5')"
          :class="{ selected: filter === 'cat5' }"
        >
          Category 5
        </v-btn>
      </div>
      <hidden point="xsDown">
        <div class="massonry">
          <div
            v-for="(item, index) in data"
            :key="index"
            :class="{ loaded: isLoaded }"
            :style="{ 'transition-duration': index / 4 + 's' }"
            class="item"
          >
            <image-thumb-card
              :img="item.img"
              :title="item.title"
              :link="item.link"
              :size="item.size"
            />
          </div>
        </div>
        <p
          v-if="data.length < 1"
          class="overline text-center"
        >
          {{ $t('profileLanding.gallery_nodata') }}
        </p>
      </hidden>
      <hidden v-if="loaded" point="smUp">
        <splide ref="slick" :options="slickOptions">
          <splide-slide
            v-for="(item, index) in data"
            :key="index"
          >
            <div class="item-carousel">
              <image-thumb-card
                :img="item.img"
                :title="item.title"
                :link="item.link"
                :size="item.size"
              />
            </div>
          </splide-slide>
        </splide>
      </hidden>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import './gallery-style.scss';
</style>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import imgAPI from '@/assets/images/imgAPI'
import ImageThumbCard from '../Cards/ImageThumb'
import Title from '../Title'
import Hidden from '../Hidden'

const portfolio = [
  {
    img: imgAPI.profile[4],
    title: 'Aenean facilisis vitae purus',
    link: 'linkofthisitem.com',
    size: 'short',
    category: 'cat1'
  },
  {
    img: imgAPI.profile[3],
    title: 'Aenean facilisis vitae purus',
    link: 'linkofthisitem.com',
    size: 'long',
    category: 'cat2'
  },
  {
    img: imgAPI.profile[5],
    title: 'Aenean facilisis vitae purus',
    link: 'linkofthisitem.com',
    size: 'short',
    category: 'cat3'
  },
  {
    img: imgAPI.profile[6],
    title: 'Aenean facilisis vitae purus',
    link: 'linkofthisitem.com',
    size: 'long',
    category: 'cat1'
  },
  {
    img: imgAPI.profile[8],
    title: 'Aenean facilisis vitae purus',
    link: 'linkofthisitem.com',
    size: 'short',
    category: 'cat2'
  },
  {
    img: imgAPI.profile[7],
    title: 'Aenean facilisis vitae purus',
    link: 'linkofthisitem.com',
    size: 'short',
    category: 'cat3'
  },
  {
    img: imgAPI.profile[3],
    title: 'Aenean facilisis vitae purus',
    link: 'linkofthisitem.com',
    size: 'short',
    category: 'cat1'
  },
  {
    img: imgAPI.profile[5],
    title: 'Aenean facilisis vitae purus',
    link: 'linkofthisitem.com',
    size: 'short',
    category: 'cat2'
  },
  {
    img: imgAPI.profile[4],
    title: 'Aenean facilisis vitae purus',
    link: 'linkofthisitem.com',
    size: 'long',
    category: 'cat2'
  }
]

export default {
  components: {
    ImageThumbCard,
    'title-main': Title,
    Hidden,
    Splide,
    SplideSlide,
  },
  data() {
    return {
      data: [],
      isLoaded: true,
      loaded: false,
      filter: 'all',
      slickOptions: {
        paginations: false,
        speed: 500,
        perPage: 1,
        arrows: false,
        direction: 'ltr',
      }
    }
  },
  mounted() {
    this.data = portfolio;
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
    filterChildren(name) {
      if (name !== 'all') {
        const filteredData = portfolio.filter(item => item.category === name)
        this.data = filteredData
        this.filter = name
      } else {
        this.data = portfolio
        this.filter = 'all'
      }

      this.isLoaded = false
      setTimeout(() => {
        this.isLoaded = true
      }, 700)
    }
  },
  computed: {
    isMobile() {
      const xsDown = this.$vuetify.display.xsAndDown
      return xsDown;
    }
  }
}
</script>
