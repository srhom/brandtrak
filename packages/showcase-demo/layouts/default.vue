<template>
  <div
    id="preloader"
    style="
      position: absolute;
      zIndex: 10000;
      background: #fafafa;
      width: 100%;
      height: 100%;
    "
  >
    <img
      style="
        opacity: 0.5;
        position: absolute;
        top: calc(50% - 50px);
        left: calc(50% - 50px);
      "
      src="/images/loading.gif"
      alt="loading"
    >
  </div>
  <v-progress-linear
    v-model="loading"
    :active="loading < 100"
    :buffer-value="bufferValue"
    absolute
    color="white"
    class="top-loading"
  />
  <v-theme-provider
    :theme="themeMode || defaultMode"
    with-background
  >
    <v-locale-provider :rtl="isRtl()" :dir="isRtl() ? 'rtl' : 'ltr'">
      <v-app>
        <v-main id="main-wrap" class="page-enter-active" :class="{ 'page-fadeUp-transition-exit': loading >= 100 }">
          <slot />
        </v-main>
      </v-app>
    </v-locale-provider>
  </v-theme-provider>
</template>

<style lang="scss">
.top-loading {
  z-index: 9999;
}
#main-wrap {
  padding: 0
}
</style>

<script>
import { ref, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import ui from '@/composables/uiTheme';

export default {
  setup() {
    const i18nLocale = useI18n();
    const locale = i18nLocale.locale.value;
    
    const rtlDefault = locale === 'ar';
    const rtl = ui.rtl();
    const isRtl = () => {
      if (rtl.value !== undefined) {
        return rtl.value;
      }
      return rtlDefault;
    };

    // Dark Light Setup
    const defaultMode = ref('');
    const themeMode = ui.themeMode();

    onMounted(() => {
      // Set document language and direction
      document.documentElement.setAttribute('lang', locale);
      if (rtlDefault) {
        document.documentElement.setAttribute('dir', 'rtl');
      } else {
        document.documentElement.setAttribute('dir', 'ltr');
      }

      // Set theme
      defaultMode.value = localStorage.getItem('luxiDarkMode') || 'light';
    });

    return {
      defaultMode,
      themeMode,
      isRtl,
    };
  },
  data() {
    return {
      interval: 0,
      loading: 0,
      bufferValue: 10,
    };
  },
  mounted() {
    // Preloader and Progress bar setup
    this.startBuffer();
    setTimeout(() => {
      this.loading = 100;
      clearInterval(this.interval);
    }, 1000);

    // Remove Loading Screen
    const preloader = document.getElementById('preloader');
    if (preloader !== null || undefined) {
      preloader.remove();
    }
  },
  methods: {
    startBuffer() {
      clearInterval(this.interval);

      this.interval = setInterval(() => {
        this.loading += Math.random() * (15 - 5) + 5;
        this.bufferValue += Math.random() * (15 - 5) + 6;
      }, 100);
    },
  },
};
</script>
