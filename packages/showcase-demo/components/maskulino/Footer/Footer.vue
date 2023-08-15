<template>
  <div class="root">
    <v-container class="max-lg" tag="footer">
      <div>
        <v-row :class="{ 'column-reverse': isMobile }">
          <v-col cols="12" md="5">
            <div
              data-aos="fade-right"
              data-aos-offset="-200"
              data-aos-delay="200"
              data-aos-duration="300"
            >
              <div>
                <div class="logo">
                  <img :src="logo" alt="logo" />
                  <h3 class="use-text-title">
                    {{ brand.maskulino.name }}
                  </h3>
                  <h4 class="use-text-subtitle">
                    {{ brand.maskulino.title }}
                  </h4>
                  <v-btn
                    color="white"
                    variant="outlined"
                    elevation="0"
                    class="download"
                    to="#"
                  >
                    Download CV
                  </v-btn>
                </div>
                <div class="socmed">
                  <v-btn icon size="small" variant="text" class="margin">
                    <i class="ion-logo-facebook fb" />
                  </v-btn>
                  <v-btn icon size="small" variant="text" class="margin">
                    <i class="ion-logo-linkedin id" />
                  </v-btn>
                  <v-btn icon size="small" variant="text" class="margin">
                     <i class="ion-logo-twitter tw" />
                  </v-btn>
                  <v-btn icon size="small" variant="text" class="margin">
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
            </div>
          </v-col>
          <v-col cols="12" md="7">
            <div
              data-aos="fade-left"
              data-aos-offset="-100"
              data-aos-delay="200"
              data-aos-duration="300"
            >
              <div>
                <ContactForm />
              </div>
            </div>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>

<style scoped lang="scss">
@import './footer-style';
</style>

<script>
import AOS from 'aos';
import logo from '@/assets/images/maskulino-logo.svg'
import brand from '@/assets/text/brand'
import ContactForm from '../Contact/Form'

export default {
  components: {
    ContactForm
  },
  data: () => ({
    logo: logo,
    brand: brand
  }),
  computed: {
    isMobile() {
      const smDown = this.$vuetify.display.smAndDown
      return smDown;
    }
  },
  mounted() {
    AOS.init({
      once: true,
    });
  },
}
</script>
