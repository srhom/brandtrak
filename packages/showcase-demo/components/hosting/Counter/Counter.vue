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
      <p class="use-text-subtitle2">
        {{ $t('hostingLanding.footer_counter') }}
      </p>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import 'counter-style.scss';
</style>

<script>
import CountUp from 'vue-countup-v3';
import { ref } from 'vue';

export default {
  components: {
    CountUp,
  },
  data() {
    return {
      loaded: false
    }
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
  mounted() {
    this.loaded = true
  }
}
</script>
