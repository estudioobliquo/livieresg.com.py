<template>
  <div>
    <div class="imgContainer1">
      <nuxt-img
        src="/img/nosotros/portada.png"
        format="webp"
        loading="lazy"
        alt="Livieres Guggiari | Nosotros - Portada"
      />
    </div>
    <h1>{{ $t(`pages.us.usTitle`) }}</h1>
    <section class="section2">
      <p>{{ $t(`pages.us.us1`) }}</p>
      <p>{{ $t(`pages.us.us2`) }}</p>
      <div class="imgContainerMobile">
        <nuxt-img
          src="/img/nosotros/portada2.png"
          format="webp"
          loading="lazy"
          alt="Livieres Guggiari | Nosotros - Portada"
        />
      </div>
      <p>{{ $t(`pages.us.us3`) }}</p>
      <p>{{ $t(`pages.us.us4`) }}</p>
    </section>
    <div class="imgContainerDesktop">
      <nuxt-img
        src="/img/nosotros/portada2.png"
        format="webp"
        loading="lazy"
        alt="Livieres Guggiari | Nosotros - Portada"
      />
    </div>
    <ProjectCostumers id="costumers" :is-index="false" />
  </div>
</template>

<script setup>
import { seoData } from '@/assets/seoData'
const { locale } = useI18n()

//  *** SEO ***
useHead(seoData['/nosotros'][locale.value])
</script>

<style scoped lang="scss">
.section2 {
  margin-bottom: 60px;
}

.imgContainer1 {
  margin-bottom: 50px;
}

.imgContainerMobile {
  margin-top: 50px;
  margin-bottom: 50px;
}

.imgContainerDesktop {
  display: none;
}

@media screen and (width >= 1000px) {
  .section2 {
    padding-left: 33px;
    margin-bottom: 1.45rem;
    border-left: 1px solid #919191;
  }

  .section2 p {
    text-align: justify;
  }

  .imgContainerMobile {
    display: none;
  }

  .imgContainerDesktop {
    display: block;
    margin-top: 70px;
    margin-bottom: 65px;
  }
}

.layoutWrapper {
  display: flex;
  margin-bottom: 100px;
}

.navContainer {
  position: sticky;
  top: 40px;
  width: 30%;
  max-width: 450px;
  height: fit-content;
}

.mainContainer {
  width: 70%;
  max-width: 1050px;
  padding: 0 8% 0 2%;
}

/* Mobile Styles */
@media screen and (width <= 1000px) {
  .navContainer {
    position: absolute;
    display: none;
  }

  .mainContainer {
    width: 86%;
    padding: 0;
    margin: 0 auto;
  }
}

/* Large Screen Styles */
@media screen and (width >= 1500px) {
  .layoutWrapper {
    justify-content: center;
  }

  .mainContainer {
    padding: 0 50px 0 0;
  }
}

/* Gallery */
.galleryLayoutWrapper {
  width: 86%;
  max-width: 1340px;
  padding: 0;
  margin: 0 auto;
}
</style>
