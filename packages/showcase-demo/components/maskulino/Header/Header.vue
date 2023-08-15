<template>
  <div>
    <v-app-bar
      v-scroll="handleScroll"
      id="header"
      :class="{ fixed: invert || fixed || isMobile, 'open-drawer': openDrawer }"
      class="header"
      fixed
      app
      elevation="0"
    >
      <v-container :class="{ 'fixed-width': isDesktop }">
        <div class="header-content">
          <nav
            :class="{ invert: invert }"
            class="nav-logo nav-menu"
          >
            <v-btn
              :class="{ 'is-active': openDrawer }"
              class="hamburger hamburger--spin mobile-menu"
              @click.stop="handleToggleOpen"
              variant="text"
              icon
            >
              <span class="hamburger-box">
                <span class="bar hamburger-inner" />
              </span>
            </v-btn>
            <div class="logo">
              <a v-if="invert" :href="link.maskulino.home">
                <img :src="logo" alt="logo">
              </a>
              <a
                v-else
                v-smooth-scroll="{ offset: 100 }"
                href="#home"
                class="anchor-link scrollactive-item"
              >
                <img :src="logo" alt="logo">
              </a>
            </div>
            <setting-menu :invert="invert" />
          </nav>
        </div>
      </v-container>
    </v-app-bar>
    <transition name="fade">
      <div v-if="openDrawer" class="paper-nav">
        <div class="mobile-nav">
          <v-container class="max-md">
            <v-row class="spacing6">
              <v-col sm="6" >
                <div class="root-menu">
                  <hidden point="mdDown">
                    <h5 class="name-deco">EXPLORE</h5>
                  </hidden>
                  <ul class="menu">
                    <li
                      v-for="(item, index) in menuList"
                      :key="index"
                      :style="{ 'animation-duration': index * 0.15 + 's' }"
                    >
                      <v-btn
                        :href="item.url"
                        :class="{ active: activeMenu === item.name }"
                        variant="text"
                        @click="scrollToMyEl(item.name)"
                        v-text="$t('profileLanding.header_'+item.name)"
                      />
                    </li>
                  </ul>
                </div>
              </v-col>
              <v-col sm="6" >
                <div class="detail">
                  <hidden point="mdDown">
                    <h5 class="name-deco">CONTACT</h5>
                  </hidden>
                  <div class="logo-name">
                    <h3 class="use-text-title">
                      {{ brand.maskulino.name }}
                    </h3>
                    <h4 class="use-text-subtitle">
                      {{ brand.maskulino.title }}
                    </h4>
                    <v-btn color="white" variant="outlined" elevation="0" class="download" to="#">Download CV</v-btn>
                  </div>
                  <div class="socmed">
                    <v-btn icon small class="margin">
                      <i class="ion-logo-facebook fb" />
                    </v-btn>
                    <v-btn icon small class="margin">
                      <i class="ion-logo-linkedin in" />
                    </v-btn>
                    <v-btn icon small class="margin">
                       <i class="ion-logo-twitter tw" />
                    </v-btn>
                    <v-btn icon small class="margin">
                      <i class="ion-logo-instagram ig" />
                    </v-btn>
                  </div>
                  <div class="contact">
                    <p class="use-text-paragraph">
                      {{ $t('profileLanding.footer_contact') }}
                      <br />
                      +12 345 678 90
                    </p>
                    <v-divider class="divider" />
                    <p class="use-text-paragraph">
                      {{ $t('profileLanding.footer_hello') }}
                      <br />
                      jenadoe.skype
                    </p>
                  </div>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </div>
      </div>
    </transition>
  </div>
</template>

<style lang="scss" scoped>
@import './header-style.scss';
</style>

<script>
import { ref } from 'vue';
import logo from '@/assets/images/maskulino-logo.svg'
import routeLink from '@/assets/text/link'
import brand from '@/assets/text/brand'
import Hidden from '../Hidden'
import Settings from '../Settings'
import navMenu from '../SideNavigation/menu'

let counter = 0
function createData(name, url, offset) {
  counter += 1
  return {
    id: counter,
    name,
    url,
    offset
  }
}

export default {
  components: {
    Hidden,
    'setting-menu': Settings
  },
  props: {
    invert: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    const openDrawer = ref(false);

    const smoothScroll = inject('smoothScroll');
    function scrollToMyEl(elemId) {
      const myEl = document.getElementById(elemId);
      const router = useRouter();
      openDrawer.value = false;

      router.push(`#${elemId}`);
      smoothScroll({
        scrollTo: myEl, // scrollTo is also allowed to be number
        hash: `#${elemId}`, // required if updateHistory is true
        offset: -50,
      });
    }

    function handleToggleOpen() {
      openDrawer.value = !openDrawer.value;
    }

    return {
      scrollToMyEl,
      openDrawer,
      handleToggleOpen
    };
  },
  data() {
    return {
      logo,
      brand,
      link: routeLink,
      loaded: false,
      show: false,
      fixed: false,
      activeMenu: '',
      sections: {},
      menuList: [
        createData(navMenu[0], '#' + navMenu[0]),
        createData(navMenu[1], '#' + navMenu[1], -100),
        createData(navMenu[2], '#' + navMenu[2]),
        createData(navMenu[3], '#' + navMenu[3], -40),
        createData(navMenu[4], '#' + navMenu[4], -40),
        createData(navMenu[5], '#' + navMenu[5], -40),
      ]
    }
  },
  mounted() {
    this.loaded = true;
    const id = window.location.hash;
    const content = id.replace('#', '');
    const element = document.getElementById(content);
    if (element) {
      element.scrollIntoView();
    }

    const section = document.querySelectorAll('.scroll-nav-content > *');
    Array.prototype.forEach.call(section, (e) => {
      this.sections[e.id] = e.offsetTop;
    });
  },
  methods: {
    handleScroll() {
      const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
      const topPosition = scrollPosition + 50;

      Object.keys(this.sections).forEach((i) => {
        if (this.sections[i] <= topPosition) {
          this.activeMenu = i;
        }
      });

      if (scrollPosition > 70) {
        this.fixed = true;
      } else {
        this.fixed = false;
      }
    },
  },
  computed: {
    isMobile() {
      const mdDown = this.$vuetify.display.mdAndDown
      return mdDown;
    },
    isDesktop() {
      const mdUp = this.$vuetify.display.mdAndUp
      return mdUp;
    }
  },
};
</script>
