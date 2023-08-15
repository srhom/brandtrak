<template>
  <div class="animation-slider">
    <div class="slideshow">
      <splide ref="slick" :options="slickOptions">
        <splide-slide v-for="(item, index) in images" :key="index">
          <div class="slide-item">
            <div class="img" :style="'background-image: url('+item+')'" />
          </div>
        </splide-slide>
      </splide>
    </div>
    <Particles
      id="particles_backgrond"
      :particles-init="particlesInit"
      :options="particlesOpt"
      class="particle-background"
    />
  </div>
</template>

<style lang="scss" scoped>
@import './hero-style.scss';
</style>

<script>
import { loadFull } from 'tsparticles';
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import imgAPI from '@/assets/images/imgAPI';

export default {
  components: {
    Splide,
    SplideSlide,
  },
  setup() {
    const particlesInit = async engine => {
      await loadFull(engine);
    };

    return {
      particlesInit,
    };
  },
  data() {
    return {
      images: [
        imgAPI.photo[1],
        imgAPI.photo[2],
        imgAPI.photo[3],
        imgAPI.photo[4],
        imgAPI.photo[5],
      ],
      slickOptions: {
        type: 'fade',
        pagination: false,
        speed: 700,
        interval: 5000,
        autoplay: true,
        arrows: false,
        direction: 'ltr',
        reducedMotion: {
          speed: 500,
          rewindSpeed: 1000,
        },
      },
      particlesOpt: {
        background: {
          color: '#333',
        },
        particles: {
          number: {
            value: 400,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: '#fff',
          },
          shape: {
            type: 'circle',
            stroke: {
              width: 0,
              color: '#000000',
            },
            polygon: {
              nb_sides: 5,
            },
            image: {
              src: 'img/github.svg',
              width: 100,
              height: 100,
            },
          },
          opacity: {
            value: 1,
            random: true,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.1,
              sync: false,
            },
          },
          size: {
            value: 10,
            random: true,
            anim: {
              enable: false,
              speed: 40,
              size_min: 0.1,
              sync: false,
            },
          },
          line_linked: {
            enable: false,
            distance: 500,
            color: '#ffffff',
            opacity: 0.4,
            width: 2,
          },
          move: {
            enable: true,
            speed: 3,
            direction: 'bottom',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200,
            },
          },
        },
        interactivity: {
          detect_on: 'canvas',
          events: {
            onhover: {
              enable: true,
              mode: 'bubble',
            },
            onclick: {
              enable: true,
              mode: 'repulse',
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 400,
              line_linked: {
                opacity: 0.5,
              },
            },
            bubble: {
              distance: 400,
              size: 4,
              duration: 0.3,
              opacity: 1,
              speed: 3,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
            push: {
              particles_nb: 4,
            },
            remove: {
              particles_nb: 2,
            },
          },
        },
        retina_detect: true,
      },
    };
  },
};
</script>
