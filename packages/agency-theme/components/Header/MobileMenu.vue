<template>
  <div class="mobile-nav">
    <div
      :class="{ 'menu-open': open }"
      class="menu"
    >
      <v-list
        dense
        tag="nav"
      >
        <v-list-item
          v-for="(item, index) in navMenu"
          :key="index"
          :href="'#' + item"
          link
          :style="{ animationDuration: index * 0.15 + 's' }"
        >
          <v-list-item-title class="menu-list">
            {{ $t('agencyLanding.header_'+item) }}
          </v-list-item-title>
        </v-list-item>
        <v-list-item
          :href="link.agency.contact"
          link
          :style="{ animationDuration: navMenu.length * 0.15 + 's' }"
        >
          <v-list-item-title class="menu-list">
            {{ $t('agencyLanding.header_contact') }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import './header-style';
</style>

<script>
import link from '@/assets/text/link';
import navMenu from './menu';

export default {
  props: {
    open: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      link,
      navMenu,
    };
  },
};
</script>
