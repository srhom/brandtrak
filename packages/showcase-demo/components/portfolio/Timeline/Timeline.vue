<template>
  <div v-if="loaded">
    <div id="timeline">
      <div class="root" ref="wrapper" v-scroll="handleScroll">
        <v-container :class="{'fixed-width': isDesktop}">
          <v-row>
            <v-col lg="2" cols="12" class="pa-0">
              <hidden point="mdDown">
                <h2 class="name-deco">
                  {{ brand.profile.name }}
                </h2>
              </hidden>
            </v-col>
            <v-col lg="10" cols="12" class="pa-0">
              <v-row class="spacing3">
                <v-col md="5" sm="6" cols="12" class="px-sm-3 px-6 py-0">
                  <div class="history">
                    <h5 class="title-timeline use-text-subtitle">
                      {{ $t('profileLanding.timeline_experience') }}
                    </h5>
                    <div>
                      <ul>
                        <li>
                          <div
                            data-aos="fade-left"
                            data-aos-offset="100"
                            data-aos-duration="300"
                          >
                            <div>
                              <h3 class="use-text-subtitle2 pb-2">Creative Director</h3>
                              <p class="mb-2">at Fourth Company</p>
                              <p class="time">2015 - Present</p>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div
                            data-aos="fade-left"
                            data-aos-offset="100"
                            data-aos-duration="300"
                          >
                            <div>
                              <h3 class="use-text-subtitle2 pb-2">Senior UI/UX Designer</h3>
                              <p class="mb-2">at Third Company</p>
                              <p class="time">2013 - 2015</p>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div
                            data-aos="fade-left"
                            data-aos-offset="100"
                            data-aos-duration="300"
                          >
                            <div>
                              <h3 class="use-text-subtitle2 pb-2">UI/UX Designer</h3>
                              <p class="mb-2">at Second Company</p>
                              <p class="time">2012 - 2013</p>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div
                            data-aos="fade-left"
                            data-aos-offset="100"
                            data-aos-duration="300"
                          >
                            <div>
                              <h3 class="use-text-subtitle2 pb-2">UI/UX Designer</h3>
                              <p class="mb-2">at First Company</p>
                              <p class="time">2009 - 2011</p>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </v-col>
                <v-col sm="6" cols="12" class="px-sm-3 px-6 py-0">
                  <div class="progress-wrap">
                    <h5 class="title-timeline use-text-subtitle">
                      {{ $t('profileLanding.timeline_skill') }}
                    </h5>
                    <ul>
                      <li>
                        <div class="text-icon">
                          <i class="ion-ios-color-wand" />
                          <h5 class="use-text-subtitle2">UI Interface Design</h5>
                        </div>
                        <v-progress-linear
                          :height="10"
                          :model-value="play ? 80 : 0"
                          color="none"
                          class="progress"
                        />
                      </li>
                      <li>
                        <div class="text-icon">
                          <i class="ion-logo-dribbble" />
                          <h5 class="use-text-subtitle2">Icon Design</h5>
                        </div>
                        <v-progress-linear
                          :height="10"
                          :model-value="play ? 70 : 0"
                          color="none"                  
                          class="progress"
                        />
                      </li>
                      <li>
                        <div class="text-icon">
                          <i class="ion-ios-globe-outline" />
                          <h5 class="use-text-subtitle2">HTML Prototyping</h5>
                        </div>
                        <v-progress-linear
                          :height="10"
                          :model-value="play ? 60 : 0"
                          color="none"    
                          class="progress"
                        />
                      </li>
                      <li>
                        <div class="text-icon">
                          <i class="ion-ios-camera-outline" />
                          <h5 class="use-text-subtitle2">Photo Editing</h5>
                        </div>
                        <v-progress-linear
                          :height="10"
                          :model-value="play ? 90 : 0"
                          color="none"
                          class="progress"
                        />
                      </li>
                      <li>
                        <div class="text-icon">
                          <i class="ion-ios-snow-outline" />
                          <h5 class="use-text-subtitle2">Graphic Illustrations</h5>
                        </div>
                        <v-progress-linear
                          :height="10"
                          :model-value="play ? 80 : 0"
                          color="none"
                          class="progress"
                        />
                      </li>
                    </ul>
                  </div>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './timeline-style.scss';
</style>

<script>
import AOS from 'aos';
import Hidden from '../Hidden'
import brand from '@/assets/text/brand'

export default {
  components: {
    Hidden
  },
  data() {
    return {
      loaded: false,
      brand: brand,
      play: false
    }
  },
  mounted() {
    this.loaded = true;
    AOS.init({
      once: true,
    });
  },
  methods: {
    handleScroll: function() {
      const wrapper = this.$refs.wrapper;
      const windowBound = wrapper.getBoundingClientRect();

      if (windowBound.top < 100) {
        this.play = true
      }
    }
  },
  computed: {
    isDesktop() {
      const mdUp = this.$vuetify.display.mdAndUp
      return mdUp;
    }
  }
}
</script>
