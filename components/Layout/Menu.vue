<template>
  <div class="container-menu">
    <div class="overlay" :class="{'classBlock': menuActive, 'classNone': !menuActive}">
      <div class="closeBtn absolute" @click="closeMobileMenu">
        <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.5 1L20.5 20M20.5 1L11 10.5L1.5 20" stroke="#D6D6D6" strokeWidth="2" />
        </svg>
      </div>

      <div class="overlayContent">
        <NuxtLink :to="localePath('/')">
          {{ $t(`menu.home`) }}
        </NuxtLink>
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
        <a to="#footer">{{ $t(`menu.contact`) }}</a>
        <span class="cambiarIdioma">{{ $t(`atom.changeLanguage`) }}</span>
        <div class="overlayLanguages">
          <NuxtLink :to="switchLocalePath('es')" :class="{ none: isCurrentLanguage('es') }">
            ES
          </NuxtLink>
          <NuxtLink :to="switchLocalePath('en')" :class="{ none: isCurrentLanguage('en') }">
            EN
          </NuxtLink>
          <NuxtLink :to="switchLocalePath('de')" :class="{ none: isCurrentLanguage('de') }">
            DE
          </NuxtLink>
          <NuxtLink :to="switchLocalePath('pt')" :class="{ none: isCurrentLanguage('pt') }">
            PT
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  menuActive: Boolean,
})
const { locale } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const emit = defineEmits([ 'closeMobileMenu' ])

const closeMobileMenu = () => {
  emit('closeMobileMenu')
}

const isCurrentLanguage = computed(() => {
  return (lang: string) => {
    return lang === locale.value
  }
})
</script>

<style lang="scss">
.container-menu {
  .svg {
    display: block;
    cursor: pointer;
    z-index: 99;
    /* Para que la zona clickable sea más grande */
    box-sizing: content-box;
    padding: 5px 0 5px 5px;
    /* Parent element .header is a flex container */
    align-self: center;
  }

  @media screen and (min-width: 1000px) {
    .svg {
      display: none;
    }
  }

  .classStart {
    display: none;
  }

  .classBlock {
    display: block;
    animation-name: openSideDrawer;
    animation-duration: 0.3s;
    animation-fill-mode: forwards;
  }

  @keyframes openSideDrawer {
    0% {
      left: -100%;
    }

    100% {
      left: 0px;
    }
  }

  .classNone {
    animation-fill-mode: forwards;
    animation-name: closeSideDrawer;
    animation-duration: 0.3s;
  }

  @keyframes closeSideDrawer {
    0% {
      left: 0px;
    }

    100% {
      left: -110%;
    }
  }

  /* The Overlay (background) */
  .overlay {
    height: 100vh;
    width: 100vw;
    position: fixed;
    z-index: 100;
    left: 0;
    top: 0;
    bottom: 0;
    padding: 0.5em;
    background-color: var(--gray-dark);
    /* overflow-x: hidden; Disable horizontal scroll */
    float: left;
  }

  /* Position the content inside the overlay */
  .overlayContent {
    position: relative;
    top: 15%;
    /* 25% from the top */
    width: 75%;
    /* 100% width */
    margin: 0 auto;
    .router-link-exact-active {
      font-weight: bolder;
      color: white;
    }
  }

  /* The navigation links inside the overlay */
  .overlayContent a,
  .overlayContentSubgr a,
  .closeBtn {
    font-family: "Founders Grotesk";
    font-size: 19px;
    border: none;
    margin-bottom: 25px;
    padding: 5px 0;
    text-decoration: none;
    font-size: 1.4rem;
    color: #d6d6d6;
    display: block;
    transition: 0.3s;
  }

  .overlayContent a:hover,
  .overlayContentSubgr a:hover {
    border: none;
  }

  .overlayContentSubgr a {
    font-size: 1.56rem;
    padding-bottom: 25px;
  }

  .overlayLanguages {
    text-decoration: none;
    display: flex;
    flex-direction: row;
    margin-top: 5px;
    .none {
      display: none;
    }
  }

  .cambiarIdioma {
    font-family: "Founders Grotesk", sans-serif;
    color: rgba(214, 214, 214, 0.65);
    font-size: 15px;
    display: block;
    /* para que el border top no ocupe todo el ancho */
    width: 60%;
    padding-top: 25px;
    border-top: 1px solid #747279;
  }

  .overlayContent .overlayLanguages a {
    margin-right: 30px;
    text-decoration: none;
    padding: 5px 5px 5px 0;
  }

  /* Position the close button (top right corner) */
  .overlay .closeBtn {
    position: absolute;
    top: 20px;
    right: 30px;
    font-size: 60px;
    cursor: pointer;
    padding: 10px;
  }

  /* When the height of the screen is less than 450 pixels, change the font-size
   of the links and position the close button again, so they don't overlap */
  @media screen and (max-height: 450px) {
    .overlay a {
      font-size: 20px;
    }

    .overlay .closeBtn {
      font-size: 40px;
      top: 15px;
      right: 35px;
    }
  }

  a.active {
    font-weight: bold;
    color: #ffffff;
  }
}
</style>
