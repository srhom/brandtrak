<template>
  <div class="root">
    <v-container :class="{ fixed: isDesktop }">
      <main-title
        :caption="$t('hostingLanding.pricing_headtitle')"
        :text="$t('hostingLanding.pricing_title')"
        align="center"
      />
      <div class="pricing-wrap">
        <section>
          <div
            data-aos="fade-up"
            data-aos-offset="-100"
            data-aos-duration="200"
          >
            <div>
              <pricing-card
                :price="3"
                :feature-list="feature.personal"
                img="/images/hosting/home.png"
                title="Personal"
                desc="Nam sollicitudin dignissim nunc"
              />
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-offset="-100"
            data-aos-duration="400"
          >
            <div>
              <pricing-card
                :price="8"
                :feature-list="feature.personal"
                highlighted
                img="/images/hosting/office.png"
                title="Startup"
                desc="Nam sollicitudin dignissim nunc"
              />
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-offset="-100"
            data-aos-duration="500"
          >
            <div>
              <pricing-card
                :price="18"
                :feature-list="feature.personal"
                img="/images/hosting/company.png"
                title="Company"
                desc="Nam sollicitudin dignissim nunc"
              />
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-offset="-100"
            data-aos-duration="600"
          >
            <div>
              <pricing-card
                :price="33"
                :feature-list="feature.personal"
                img="/images/hosting/world.png"
                title="Big Shot"
                desc="Nam sollicitudin dignissim nunc"
              />
            </div>
          </div>
        </section>
      </div>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import './pricing-plan-style.scss';
</style>

<script>
import AOS from 'aos';
import Title from '../Title';
import PricingCard from '../Cards/Pricing';
import listFeature from './listFeature';

export default {
  components: {
    'main-title': Title,
    PricingCard,
  },
  data() {
    return {
      feature: listFeature,
    };
  },
  computed: {
    isDesktop() {
      const lgUp = this.$vuetify.display.lgAndUp;
      return lgUp;
    },
  },
  mounted() {
    AOS.init({
      once: true,
    });
  },
};
</script>
