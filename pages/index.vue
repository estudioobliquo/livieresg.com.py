<template>
  <div>
    <div class="mobile-header">
      <LayoutMenu :menu-active="showMobileMenu" @closeMobileMenu="showMobileMenu = false" />
      <LayoutHeader @openMobileMenu="showMobileMenu = true" />
    </div>
    <div class="main-cont">
      <header class="desktop-header">
        <nuxt-img
          sizes="xs:90vw sm:80vw md:90vw lg:85vw xl:85vw xxl:90vw"
          src="/img/index/portada.png"
          format="webp"
          alt="Livieres Guggiari - Portada"
        />
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
        <div class="languages-cont">
          <NuxtLink :to="switchLocalePath('es')" :class="{ none: isCurrentLanguage('es') }">
            Español
          </NuxtLink>
          <NuxtLink :to="switchLocalePath('en')" :class="{ none: isCurrentLanguage('en') }">
            English
          </NuxtLink>
          <NuxtLink :to="switchLocalePath('de')" :class="{ none: isCurrentLanguage('de') }">
            Deutsch
          </NuxtLink>
          <NuxtLink :to="switchLocalePath('pt')" :class="{ none: isCurrentLanguage('pt') }">
            Português
          </NuxtLink>
        </div>
      </header>
      <IndexIntro data-sal="fade" data-sal-delay="200" data-sal-duration="800" />
      <IndexAreasDePracticas data-sal="fade" data-sal-delay="200" data-sal-duration="800" />
      <IndexPublicaciones data-sal="fade" data-sal-delay="200" data-sal-duration="800" />
      <IndexAssociations data-sal="fade" data-sal-delay="200" data-sal-duration="800" />
      <ProjectCostumers data-sal="fade" data-sal-delay="200" data-sal-duration="800" is-index />
    </div>
    <LayoutFooter />
  </div>
</template>

<script setup lang="ts" >
import sal from 'sal.js'
import { seoData } from '@/assets/seoData'

onMounted(() => {
  sal()
})
const { locale } = useI18n()
const switchLocalePath = useSwitchLocalePath()

//  *** SEO ***
useHead(seoData['/'][locale.value])
definePageMeta({ layout: 'empty' })
const showMobileMenu = ref(false)

const isCurrentLanguage = computed(() => {
  return (lang: string) => {
    return lang === locale.value
  }
})
</script>

<style lang="scss">
.main-cont {
  width: 92%;
  max-width: 1500px;
  margin: 0 auto;
  margin-bottom: 100px;

  .desktop-header {
    margin-bottom: 50px;

    nav {
      display: none;
    }

    .languages-cont {
      display: none;

      .active {
        font-weight: bolder;
        color: chartreuse;
      }
    }
  }
}

@media only screen and (min-width:1000px) {
  .mobile-header {
    display: none;
  }

  .main-cont {
    .desktop-header {
      position: relative;
      display: block;
      margin-top: 4vw;
      margin-bottom: 100px;

      nav {
        position: absolute;
        top: 50px;
        left: 40px;
        display: flex;
        flex-direction: column;

        &::before {
          display: block;
          width: 80%;
          margin-bottom: 30px;
          content: "";
          border-bottom: 2px solid #fff;
        }

        a {
          width: fit-content;
          padding: 5px;
          margin-bottom: 35px;
          font-size: 1.290rem;
          font-weight: normal;
          color: #fff;
          text-decoration: none;
          transition: color 0.2s;

          &:hover {
            color: hsl(0deg 1% 69%);
            transition: color 0.2s;
          }
        }
      }

      .languages-cont {
        position: absolute;
        top: 40px;
        right: 40px;
        display: initial;

        a {
          padding: 5px;
          margin-left: 30px;
          font-size: 1.25rem;
          font-weight: normal;
          color: #fff;
          text-decoration: none;
          transition: color 0.2s;

          &:hover {
            color: hsl(0deg 1% 69%);
            transition: color 0.2s;
          }
        }

        .none {
          display: none;
        }
      }
    }
  }
}
</style>
