<template>
  <div class="explore-wrap">
    <decoration />
    <div class="explore">
      <title-main subtitle="explore" title="14 Landing Pages Demo" align="center" />
      <v-container class="max-lg">
        <div>
          <ul>
            <li>
              <div
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="300"
              >
                <a href="/medical" target="_blank">
                  <figure>
                    <img :src="imgAPI.showcase[9]" alt="medical" />
                  </figure>
                  Medical
                </a>
              </div>
            </li>
            <li>
              <div
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-duration="300"
              >
                <a href="/movie" target="_blank">
                  <figure>
                    <img :src="imgAPI.showcase[10]" alt="movie" />
                  </figure>
                  Movie Entertainment
                </a>
              </div>
            </li>
            <li>
              <div
                data-aos="fade-up"
                data-aos-delay="400"
                data-aos-duration="300"
              >
                <a href="/education" target="_blank">
                  <figure>
                    <img :src="imgAPI.showcase[11]" alt="education" />
                  </figure>
                  Education
                </a>
              </div>
            </li>
            <li>
              <div
                data-aos="fade-up"
                data-aos-delay="500"
                data-aos-duration="300"
              >
                <a href="/mobile-apps" target="_blank">
                  <figure>
                    <img :src="imgAPI.showcase[6]" alt="mobile apps" />
                  </figure>
                  Mobile Apps
                </a>
              </div>
            </li>
            <li>
              <div
                data-aos="fade-up"
                data-aos-delay="600"
                data-aos-duration="300"
              >
                <a href="/saas" target="_blank">
                  <figure>
                    <img :src="imgAPI.showcase[8]" alt="saas" />
                  </figure>
                  SaaS
                </a>
              </div>
            </li>
            <li>
              <div
                data-aos="fade-up"
                data-aos-delay="700"
                data-aos-duration="300"
              >
                <a href="/agency" target="_blank">
                  <figure>
                    <img :src="imgAPI.showcase[1]" alt="agency" />
                  </figure>
                  Corporate Agency
                </a>
              </div>
            </li>
            <li>
              <div
                data-aos="fade-up"
                data-aos-delay="800"
                data-aos-duration="300"
              >
                <a href="/portfolio" target="_blank">
                  <figure>
                    <img :src="imgAPI.showcase[7]" alt="agency" />
                  </figure>
                  Portfolio Profile
                </a>
              </div>
            </li>
            <li>
              <div
                data-aos="fade-up"
                data-aos-delay="900"
                data-aos-duration="300"
              >
                <a href="/cryptocurrency" target="_blank">
                  <figure>
                    <img :src="imgAPI.showcase[3]" alt="crypto" />
                  </figure>
                  Cryptocurrency &amp; Blockchain
                </a>
              </div>
            </li>
            <li>
              <div
                data-aos="fade-up"
                data-aos-delay="1000"
                data-aos-duration="300"
              >
                <a href="/fashion" target="_blank">
                  <figure>
                    <img :src="imgAPI.showcase[4]" alt="fashion" />
                  </figure>
                  Fashion
                </a>
              </div>
            </li>
            <li>
              <div
                data-aos="fade-up"
                data-aos-delay="1100"
                data-aos-duration="300"
              >
                <a href="/hosting" target="_blank">
                  <figure>
                    <img :src="imgAPI.showcase[5]" alt="hosting" />
                  </figure>
                  Cloud Hosting
                </a>
              </div>
            </li>
            <li>
              <div
                data-aos="fade-up"
                data-aos-delay="1200"
                data-aos-duration="300"
              >
                <a href="/architect" target="_blank">
                  <figure>
                    <img :src="imgAPI.showcase[2]" alt="architect" />
                  </figure>
                  Interior Architect
                </a>
              </div>
            </li>
            <li>
              <div
                data-aos="fade-up"
                data-aos-delay="1300"
                data-aos-duration="300"
              >
                <a href="/femine" target="_blank">
                  <figure>
                    <img :src="imgAPI.showcase[13]" alt="architect" />
                  </figure>
                  Portfolio 2
                </a>
              </div>
            </li>
            <li>
              <div
                data-aos="fade-up"
                data-aos-delay="1400"
                data-aos-duration="300"
              >
                <a href="/unisex" target="_blank">
                  <figure>
                    <img :src="imgAPI.showcase[14]" alt="architect" />
                  </figure>
                  Portfolio 3
                </a>
              </div>
            </li>
            <li>
              <div
                data-aos="fade-up"
                data-aos-delay="1500"
                data-aos-duration="300"
              >
                <a href="/maskulino" target="_blank">
                  <figure>
                    <img :src="imgAPI.showcase[15]" alt="architect" />
                  </figure>
                  Portfolio 4
                </a>
              </div>
            </li>
            <li>
              <div
                data-aos="fade-up"
                data-aos-delay="1600"
                data-aos-duration="300"
              >
                <a href="https://github.com/ilhammeidi/veluxi-starter" target="_blank">
                  <figure>
                    <img src="/images/showcase/starter.jpg" alt="starter" />
                  </figure>
                  <span>
                    TRY
                  </span>
                  &nbsp;Starter Project
                </a>
              </div>
            </li>
          </ul>
        </div>
      </v-container>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.explore-wrap {
  padding-bottom: $spacing3;
  position: relative;
  z-index: 2;
  background: linear-gradient(to bottom, rgba(255,255,255,0) 0%,rgba(255,255,255,0) 1%,rgba(251,251,251,0.91) 21%,rgba(251,251,251,1) 23%);
}
.explore {
  position: relative;
  margin-top: -80px;
  background-size: 100% auto;
  ul {
    margin: 0;
    padding: 0;
    li {
      list-style: none;
      display: inline-block;
      text-align: center;
      margin-bottom: $spacing12;
      width: 33.00%;
      height: 380px;
      @include breakpoints-down(md) {
        width: 48%;
        &:last-child {
          width: 100%
        }
      }
      @include breakpoints-down(xs) {
        width: 100%;
        margin-bottom: $spacing8
      }
      a {
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        font-weight: 500;
        color: $light-text-primary;
        transition: all 0.3s ease;
        top: 0;
        position: relative;
        span {
          color: #ff0078
        }
        &:hover {
          color: $palette-primary-main;
          top: -5px;
          figure {
            box-shadow: rgba(34, 48, 102, 0.3) -3px 6px 21.1px -4px;
          }
        }
        figure {
          margin: spacing(0, 0, 3, 0);
          overflow: hidden;
          border-radius: 6px;
          border: 0px solid #6300cc;
          transition: all 0.3s ease;
          box-shadow: rgba(34, 48, 102, 0.1) -3px 6px 21.1px -4px;
          height: 380px;
          max-width: 300px;
          @include breakpoints-down(xs) {
            width: 240px;
            height: 300px;
          }
        }
        img {
          width: 100%
        }
      }
    }
  }
}
</style>

<script>
import AOS from 'aos';
import imgAPI from '@/assets/images/imgAPI'
import Decoration from './Decoration'
import Title from './Title'

export default {
  components: {
    'title-main': Title,
    Decoration
  },
  data: () => ({
    imgAPI: imgAPI
  }),
  mounted() {
    AOS.init({
      once: true,
    });
  }
}
</script>