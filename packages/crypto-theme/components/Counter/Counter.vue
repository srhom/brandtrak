<template>
  <div
    ref="wrapper"
    v-scroll="runCounter"
    class="counter-wrap"
  >
    <v-container class="max-md">
      <h3 class="use-text-title">
        <span>
          {{ !visible ? 0 : '' }}
          <count-up
            v-if="visible"
            :start-val="0"
            :end-val="2"
          />
        </span>
        <span>
          {{ !visible ? 0 : '' }}
          <count-up
            v-if="visible"
            :start-val="0"
            :end-val="234"
          />
        </span>
        <span>
          {{ !visible ? 0 : '' }}
          <count-up
            v-if="visible"
            :start-val="0"
            :end-val="567"
          />
        </span>
      </h3>
      <p class="use-text-subtitle">
        {{ $t('cryptoLanding.footer_counter') }}
      </p>
      <div class="call-action">
        <h4 class="use-text-subtitle pb-2">
          {{ $t('cryptoLanding.footer_waiting') }}
        </h4>
        <v-btn size="large" :href="routeLink.crypto.register" color="secondary" class="button">
          {{ $t('cryptoLanding.getstarted') }}
        </v-btn>
      </div>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import 'counter-style.scss';
</style>

<script>
import CountUp from 'vue-countup-v3';
import { ref } from 'vue';
import link from '@/assets/text/link';

export default {
  components: {
    CountUp,
  },
  setup() {
    const visible = ref(false);
    const wrapper = ref(null);
    const offset = 500;
    function runCounter() {
      const windowBound = wrapper.value.getBoundingClientRect();

      if (windowBound.top < offset) {
        visible.value = true;
      }
    }

    return {
      visible,
      runCounter,
      wrapper,
    };
  },
  data() {
    return {
      routeLink: link,
      loaded: false,
    };
  },
  mounted() {
    this.loaded = true;
  },
};
</script>
