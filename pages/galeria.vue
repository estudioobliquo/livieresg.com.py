<template>
  <div>
    <div class="gallery">
      <AtomVolver-Atras text="atom.buttonBack" to="/" />
      <h1>{{ $t(`gallery.galleryTitle`) }}</h1>
      <p>
        {{ $t(`gallery.subtitle`) }}
      </p>
      <div class="galleryNav">
        <div class="activeSection" @click="typeSelected = 0">
          <span>
            {{ $t(`gallery.paint`) }}
          </span>
        </div>
        <div class="activeSection" @click="typeSelected = 1">
          <span>
            {{ $t(`gallery.sculp`) }}
          </span>
        </div>
      </div>
      <div class="galleryContainer ">
        <div
          v-for="art in arte"
          :key="art.img"
          data-sal="fade"
          data-sal-delay="300"
          data-sal-duration="800"
          class="galleryItem"
        >
          <div v-if="art.type === typeSelected">
            <nuxt-img :src="(art.img)" loading="lazy" format="webp" />
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

<script setup >
import sal from 'sal.js'
import { dataArt } from '@/assets/dataArt.js'
import { seoData } from '@/assets/seoData'
import SVGArrow from '@/assets/svg/global/arrow.svg'
const { locale } = useI18n()

//  *** SEO ***
useHead(seoData['/galeria'][locale.value])
definePageMeta({ layout: 'galeria' })

const arte = dataArt
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
</script>

<style>
.gallery {
  padding-bottom: 40px;
}

.gallery h1 {
  max-width: 450px;
  margin-bottom: 16px;
}

.gallery>p {
  max-width: 450px;
}

.galleryNav {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-items: center;
  max-width: 550px;
  margin-bottom: 64px;
}

.galleryNav div {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 16px 0;
  cursor: pointer;
}

.galleryNav div:first-of-type {
  border-right: 1px solid var(--main-color-light);
}

.galleryNav div:not(.activeSection) {
  opacity: 0.6;
}

.galleryNav p {
  margin: 0;
}

/* items */
.galleryItem {
  width: 75%;
  max-width: 450px;
  margin-bottom: 24px;
  margin-left: auto;
}

.galleryContainer>div:nth-child(2n + 1) {
  margin-right: auto;
  margin-left: 0;
}

.galleryContainer>div:nth-child(4n + 3) {
  width: 50%;
}

.galleryItem .textContainer {
  display: flex;
  flex-direction: column;
  padding-top: 4px;
  padding-left: 4px;
}

.galleryItem .textContainer p {
  margin-bottom: 0;
  font-size: 12px;
  line-height: normal;
}

@media only screen and (width >=800px) {
  .galleryItem {
    margin-bottom: 80px;
  }

  .galleryContainer>div:nth-child(4n + 4) {
    width: 60%;
    margin-right: auto;
    margin-left: auto;
  }
}

@media only screen and (width >=1260px) {
  .gallery {
    padding-bottom: 400px;
  }

  .gallery h1 {
    font-size: 50px;
  }

  .galleryNav {
    max-width: 400px;
  }

  .galleryNav div:first-of-type {
    justify-content: flex-start;
  }

  .galleryNav div:nth-of-type(2) {
    justify-content: flex-end;
  }

  /* items */
  .galleryContainer {
    margin-top: -220px;
  }

  .galleryItem {
    max-width: 500px;
    margin-right: auto;
    margin-bottom: -150px;
    margin-left: 0;
  }

  .galleryContainer>div:nth-child(2n + 1) {
    margin-right: 0;
    margin-left: auto;
  }

  .galleryContainer>div:nth-child(4n + 4) {
    width: 60%;
    margin-top: 300px;
    margin-bottom: 150px;
  }

  .galleryItem .textContainer p {
    font-size: 14px;
  }
}

/* scroll to top */
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
  border-radius: 50%;
  box-shadow: 0 0 10px 0 rgb(0 0 0 / 50%);
}

.scroll-to-top svg {
  transform: rotate(270deg);
}

.scroll-to-top svg path {
  fill: rgb(95 94 100);
}
</style>
