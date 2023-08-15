<template>
  <div class="footer">
    <div class="inner">
      <div>
        <div
          data-aos="fade-left"
          data-aos-offset="-100"
          data-aos-delay="200"
          data-aos-duration="300"
        >
          <div>
            <div class="title-footer">
              <img :src="logo" alt="logo" />
              <h3 class="use-text-title pb-2">Veluxi</h3>
            </div>
            <h6 class="use-text-subtitle2 pb-2">
              Thank you for your time
              <br />
              and if you like please rate it!
            </h6>
            <div class="star-area">
              <v-icon>mdi-star</v-icon>
              <v-icon>mdi-star</v-icon>
              <v-icon>mdi-star</v-icon>
              <v-icon>mdi-star</v-icon>
              <v-icon>mdi-star</v-icon>
            </div>
          </div>
        </div>
      </div>
      <p>&copy;Veluxi Theme 2023</p>
    </div>
  </div>
</template>

<style lang="scss" scoped="">
.footer {
  font-family: Open Sans,sans-serif !important;
  background-image: linear-gradient(120deg, #217892, #5aaf27);
  text-align: center;
  color: #FFF;
  position: relative;
  @include breakpoints-up(md) {
    margin-top: -90px;
  }
  &:before {
    content: "";
    width: 100%;
    height: 400px;
    position: absolute;
    top: 0;
    left: 0;
    background: url(/images/showcase/deco-footer.png) no-repeat top center;
    background-size: 100% auto
  }
}
.title-footer {
  margin: spacing(5, 0);
  h3 {
    font-family: Open Sans,sans-serif !important;
    font-weight: 700
  }
  img {
    width: 80px;
    margin-bottom: $spacing2
  }
}
.star-area {
  display: flex;
  justify-content: center;
  margin: spacing(5, 0);
  i {
    font-size: 30px;
    color: #ffe23f;
    margin: $spacing1
  }
}
.inner {
  background: url(/images/showcase/bg-footer.png) fixed no-repeat center bottom;
  background-size: 100% auto;
  padding: spacing(30, 5, 20);
  @include breakpoints-up(md) {
    padding: spacing(50, 5, 20);
  }
  h6 {
    font-family: Open Sans,sans-serif !important;
  }
}
</style>

<script>
import AOS from 'aos';
import logo from '@/assets/images/logo.png';

export default {
  data: () => ({
    logo: logo
  }),
  mounted() {
    AOS.init({
      once: true,
    });
  },
}
</script>