<template>
  <div class="navigation">
    <nav class="nav-menu">
      <span>
        <a
          href="#home"
          v-smooth-scroll="{ offset: 100 }"
          class="logo anchor-link scrollactive-item"
        >
          <img :src="logo" alt="logo">
        </a>
      </span>
      <v-list nav class="menu">
        <ul>
          <v-list-item
            v-for="(item, index) in menuList"
            :key="index"
            :href="item.url"
            :class="{ active: activeMenu === item.name }"
            class="link anchor-link"
            @click="scrollToMyEl(item.name)"
          >
            <div class="icon">
              <span :class="item.icon" />
            </div>
            <v-list-item-title class="text">
              {{ $t('profileLanding.header_' + item.name) }}
            </v-list-item-title>
          </v-list-item>
        </ul>
      </v-list>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
@import './sidenav-icon-style.scss';
</style>

<script>
import { inject } from 'vue';
import logo from '@/assets/images/unisex-logo.svg'
import navMenu from '../SideNavigation/menu'
import { useRouter } from '#app';

let counter = 0
function createData(name, url, icon, offset) {
  counter += 1
  return {
    id: counter,
    name,
    url,
    icon,
    offset
  }
}

export default {
  data() {
    return {
      logo,
      loaded: false,
      sections: {},
      activeMenu: '',
      menuList: [
        createData(navMenu[0], '#' + navMenu[0], 'ion-ios-contact', 160),
        createData(navMenu[1], '#' + navMenu[1], 'ion-ios-add-circle'),
        createData(navMenu[2], '#' + navMenu[2], 'ion-ios-keypad'),
        createData(navMenu[3], '#' + navMenu[3], 'ion-ios-chatboxes', -40),
        createData(navMenu[4], '#' + navMenu[4], 'ion-ios-copy'),
        createData(navMenu[5], '#' + navMenu[5], 'ion-ios-mail'),
      ]
    }
  },
  setup() {
    const smoothScroll = inject('smoothScroll');
    function scrollToMyEl(elemId) {
      const myEl = document.getElementById(elemId);
      const router = useRouter();

      router.push(`#${elemId}`);
      smoothScroll({
        scrollTo: myEl, // scrollTo is also allowed to be number
        hash: `#${elemId}`, // required if updateHistory is true
        offset: -50,
      });
    }

    return {
      scrollToMyEl,
    };
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
}
</script>
