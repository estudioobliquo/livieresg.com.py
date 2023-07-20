<template>
  <div>
    <div class="gallery">
      <AtomVolverAtras text="atom.buttonBack" to="/" />
      <h1>{{ $t(`gallery.galleryTitle`) }}</h1>
      <p>
        {{ $t(`gallery.subtitle`) }}
      </p>
      <div class="galleryNav">
        <div :class="{ activeSection: typeSelected === 0 }" @click="typeSelected = 0">
          <p>
            {{ $t(`gallery.paint`) }}
          </p>
        </div>
        <div :class="{ activeSection: typeSelected === 1 }" @click="typeSelected = 1">
          <p>
            {{ $t(`gallery.sculp`) }}
          </p>
        </div>
      </div>
      <div class="galleryContainer ">
        <div
          v-for="art in artSelection"
          :key="art.img"
          class="galleryItem"
        >
          <div
            v-show="art.type === typeSelected"
            data-sal="fade"
            data-sal-delay="100"
            data-sal-duration="100"
          >
            <nuxt-img
              :src="(art.img)"
              sizes="xs:200px sm:280px xl:400px xxl:450px"
              format="webp"
              loading="lazy"
            />
            <div class="textContainer">
              <p> {{ art.name }} - {{ art.year }}</p>
              <p>{{ art.description }}</p>
              <p>{{ art.author }}</p>
              <p>{{ art.technic }}</p>
              <p>{{ art.size }}</p>
              <p>{{ art.location }}</p>
            </div>
          </div>
        </div>
        <button class="scroll-to-top" @click="scrollTop">
          <SVGArrow />
        </button>
      </div>
      <!-- Aqui va galeriaContainer -->
    </div>
  </div>
</template>

<script setup lang="ts">
import sal from 'sal.js'
import { dataArt } from '@/assets/dataArt.js'
import { seoData } from '@/assets/seoData'
import SVGArrow from '@/assets/svg/global/arrow.svg'
const { locale } = useI18n()

//  *** SEO ***
useHead(seoData['/galeria'][locale.value])
definePageMeta({ layout: 'galeria' })

const typeSelected = ref(0)

onMounted(() => {
  sal()
})

const scrollTop = () => {
  if (process.client) {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
}
const artSelection = dataArt
</script>

<style lang="scss">
.gallery {
  padding-bottom: 40px;

  h1 {
    max-width: 450px;
    margin-bottom: 16px;
  }

  &>p {
    max-width: 450px;
  }

  .galleryNav {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-items: center;
    max-width: 550px;
    margin-bottom: 64px;

    p {
      margin: 0;
    }

    div {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      padding: 16px 0;
      cursor: pointer;

      &:first-of-type {
        border-right: 1px solid var(--main-color-light);
      }

      &:not(.activeSection) {
        opacity: 0.6;
      }
    }
  }

  .galleryContainer {
    .galleryItem {
      width: 75%;
      max-width: 450px;
      margin-bottom: 24px;
      margin-left: auto;

      .textContainer {
        display: flex;
        flex-direction: column;
        padding-top: 4px;
        padding-left: 4px;

        p {
          margin-bottom: 0;
          font-size: 12px;
          line-height: normal;
        }
      }
    }

    &>div:nth-child(2n + 1) {
      margin-right: auto;
      margin-left: 0;
    }

    &>div:nth-child(4n + 3) {
      width: 50%;
    }

    .scroll-to-top {
      position: fixed;
      right: 40px;
      bottom: 40px;
      z-index: 9999;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      font-family: "Founders Grotesk", sans-serif;
      cursor: pointer;
      background-color: white;
      border: none;
      border-radius: 50%;
      box-shadow: 0 0 10px 0 rgb(0 0 0 / 50%);

      svg {
        transform: rotate(270deg);

        path {
          fill: rgb(95 94 100);
        }
      }
    }
  }

  @media only screen and (min-width:800px) {
    .galleryContainer {
      .galleryItem {
        margin-bottom: 80px;
      }

      & > div:nth-child(4n + 4) {
        width: 60%;
        margin-right: auto;
        margin-left: auto;
      }
    }
  }

  @media only screen and (min-width:1260px) {
    padding-bottom: 400px;

    & h1 {
      font-size: 50px;
    }

    .galleryNav {
      max-width: 400px;

      & div:first-of-type {
        justify-content: flex-start;
      }

      & div:nth-of-type(2) {
        justify-content: flex-end;
      }
    }

    .galleryContainer {
      margin-top: -220px;

      & > div:nth-child(2n + 1) {
        margin-right: 0;
        margin-left: auto;
      }

      & > div:nth-child(4n + 4) {
        width: 60%;
        margin-top: 300px;
        margin-bottom: 150px;
      }

      .galleryItem {
        max-width: 500px;
        margin-right: auto;
        margin-bottom: -150px;
        margin-left: 0;

        .textContainer p {
          font-size: 14px;
        }
      }
    }
  }
}
</style>
