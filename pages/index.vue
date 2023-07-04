<template>
  <div>
    <div class="mobileHeader">
      <LayoutMenu v-show="showMobileMenu" @closeMobileMenu="showMobileMenu = false" />
      <LayoutHeader v-show="!showMobileMenu" @click="showMobileMenu = true" />
    </div>
    <div class="mainCont">
      <header class="desktopHeader">
        <img src="@/assets/img/index/portada.png" alt="Livieres Guggiari - Portada">
        <nav>
          <NuxtLink :to="localePath('/nosotros')">
            {{ $t(`menu.aboutUs`) }}
          </NuxtLink>
          <NuxtLink :to="localePath('/miembros')">
            {{ $t(`menu.staff`) }}
          </NuxtLink>
          <NuxtLink :to="localePath('/areas-de-practica')">
            {{ $t(`menu.areas`) }}
          </NuxtLink>
          <NuxtLink :to="localePath('/blog')">
            {{ $t(`menu.blog`) }}
          </NuxtLink>
          <NuxtLink :to="localePath('/galeria')">
            {{ $t(`menu.art`) }}
          </NuxtLink>
          <a href="#footer">{{ $t(`menu.contact`) }}</a>
        </nav>
        <div class="languagesCont">
          <NuxtLink :to="switchLocalePath('es')" :class="{none: isCurrentLanguage('es')}">
            Español
          </NuxtLink>
          <NuxtLink :to="switchLocalePath('en')" :class="{none: isCurrentLanguage('en')}">
            English
          </NuxtLink>
          <NuxtLink :to="switchLocalePath('de')" :class="{none: isCurrentLanguage('de')}">
            Deutsch
          </NuxtLink>
          <NuxtLink :to="switchLocalePath('pt')" :class="{none: isCurrentLanguage('pt')}">
            Português
          </NuxtLink>
        </div>
      </header>
      <div class="mobileImgCont">
        <img src="@/assets/img/index/portada.png" alt="Livieres Guggiari - Portada">
      </div>
      <IndexIntro />
      <IndexAreasDePracticas />
      <IndexAssociations />
      <ProjectCostumers is-index />
    </div>
    <LayoutFooter />
  </div>
</template>

<script setup lang="ts" >
import { seoData } from '~~/assets/seoData'
const { locale } = useI18n()
const switchLocalePath = useSwitchLocalePath()

//  *** SEO ***
useHead(seoData['/'][locale.value])

const showMobileMenu = ref(false)

const isCurrentLanguage = computed(() => {
  return (lang: string) => {
    return lang === locale.value
  }
})
</script>

<style lang="scss">

@media only screen and (min-width: 1000px) {
  .mobileHeader {
    display: none;
  }
}

.mainCont {
  width: 92%;
  max-width: 1500px;
  margin: 0 auto;
  margin-bottom: 100px;

  .desktopHeader {
    display: none;
  }

  .mobileImgCont {
    margin-bottom: 50px;
  }

  .languagesCont .active {
    color: chartreuse;
    font-weight: bolder;
  }

  @media only screen and (min-width: 1000px) {

    .mobileImgCont {
      display: none;
    }

    .desktopHeader {
      display: block;
      position: relative;
      margin-top: 4vw;
      margin-bottom: 100px;
    }

    nav {
      position: absolute;
      top: 50px;
      left: 40px;
      display: flex;
      flex-direction: column;
    }

    nav::before {
      content: "";
      display: block;
      width: 80%;
      border-bottom: 2px solid #ffffff;
      margin-bottom: 30px;
    }

    nav a {
      padding: 5px;
      margin-bottom: 35px;
      text-decoration: none;
      font-weight: normal;
      font-size: 1.3rem;
      color: #ffffff;
      transition: color 0.2s;
      width: fit-content;
    }

    nav a:hover {
      color: hsl(0, 1%, 69%);
      transition: color 0.2s;
    }

    .languagesCont {
      position: absolute;
      top: 40px;
      right: 40px;

      a {
        text-decoration: none;
        font-weight: normal;
        font-size: 1.2rem;
        color: #ffffff;
        transition: color 0.2s;
        padding: 5px;
        margin-left: 30px;
      }

      a:hover {
        color: hsl(0, 1%, 69%);
        transition: color 0.2s;
      }

      .none {
        display: none;
      }
    }
  }
}
</style>
