<template>
  <div class="container-menu">
    <div class="overlay" :class="handleOverlayClass">
      <div class="closeBtn absolute" @click="closeMobileMenu">
        <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.5 1L20.5 20M20.5 1L11 10.5L1.5 20" stroke="#D6D6D6" strokeWidth="2" />
        </svg>
      </div>

      <div class="overlayContent">
        <NuxtLink :to="localePath('/')" @click="closeMobileMenu">
          {{ $t(`menu.home`) }}
        </NuxtLink>
        <NuxtLink :to="localePath('/nosotros')" @click="closeMobileMenu">
          {{ $t(`menu.aboutUs`) }}
        </NuxtLink>
        <NuxtLink :to="localePath('/miembros')" @click="closeMobileMenu">
          {{ $t(`menu.staff`) }}
        </NuxtLink>
        <NuxtLink :to="localePath('/areas-de-practica')" @click="closeMobileMenu">
          {{ $t(`menu.areas`) }}
        </NuxtLink>
        <NuxtLink :to="localePath('/blog')" @click="closeMobileMenu">
          {{ $t(`menu.blog`) }}
        </NuxtLink>
        <NuxtLink :to="localePath('/galeria')" @click="closeMobileMenu">
          {{ $t(`menu.art`) }}
        </NuxtLink>
        <a href="#footer" @click="closeMobileMenu">{{ $t(`menu.contact`) }}</a>
        <span class="cambiarIdioma">{{ $t(`atom.changeLanguage`) }}</span>
        <div class="overlayLanguages">
          <NuxtLink :to="switchLocalePath('es')" :class="{ none: isCurrentLanguage('es') }" @click="closeMobileMenu">
            ES
          </NuxtLink>
          <NuxtLink :to="switchLocalePath('en')" :class="{ none: isCurrentLanguage('en') }" @click="closeMobileMenu">
            EN
          </NuxtLink>
          <NuxtLink :to="switchLocalePath('de')" :class="{ none: isCurrentLanguage('de') }" @click="closeMobileMenu">
            DE
          </NuxtLink>
          <NuxtLink :to="switchLocalePath('pt')" :class="{ none: isCurrentLanguage('pt') }" @click="closeMobileMenu">
            PT
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  menuActive: {
    type: Boolean,
    default: false,
  },
})
const { locale } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const emit = defineEmits([ 'closeMobileMenu' ])
const chargeFirstTime = ref(true)

const closeMobileMenu = () => {
  emit('closeMobileMenu')
}

const isCurrentLanguage = computed(() => {
  return (lang: string) => {
    return lang === locale.value
  }
})

const handleOverlayClass = computed(() => {
  if (props.menuActive && !chargeFirstTime.value) {
    return 'classBlock'
  }
  else if (!props.menuActive && !chargeFirstTime.value) {
    return 'classNone'
  }
  else {
    chargeFirstTime.value = false

    return 'none'
  }
})

</script>

<style lang="scss">
.container-menu {
  .svg {
    z-index: 99;

    /* Para que la zona clickable sea más grande */
    box-sizing: content-box;
    display: block;

    /* Parent element .header is a flex container */
    align-self: center;
    padding: 5px 0 5px 5px;
    cursor: pointer;
  }

  @media screen and (width >= 1000px) {
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
      left: 0;
    }
  }

  .classNone {
    animation-fill-mode: forwards;
    animation-name: closeSideDrawer;
    animation-duration: 0.3s;
  }

  @keyframes closeSideDrawer {
    0% {
      left: 0;
    }

    100% {
      left: -110%;
    }
  }

  /* The Overlay (background) */
  .overlay {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 100;

    /* overflow-x: hidden; Disable horizontal scroll */
    float: left;
    width: 100vw;
    height: 100vh;
    padding: 0.5em;
    background-color: var(--gray-dark);
  }

  .none {
    left: -110%;
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
    display: block;
    padding: 5px 0;
    margin-bottom: 25px;
    font-family: "Founders Grotesk";
    font-size: 19px;
    font-size: 1.4rem;
    color: #d6d6d6;
    text-decoration: none;
    border: none;
    transition: 0.3s;
  }

  .overlayContent a:hover,
  .overlayContentSubgr a:hover {
    border: none;
  }

  .overlayContentSubgr a {
    padding-bottom: 25px;
    font-size: 1.56rem;
  }

  .overlayLanguages {
    display: flex;
    flex-direction: row;
    margin-top: 5px;
    text-decoration: none;

    .none {
      display: none;
    }
  }

  .cambiarIdioma {
    display: block;

    /* para que el border top no ocupe todo el ancho */
    width: 60%;
    padding-top: 25px;
    font-family: "Founders Grotesk", sans-serif;
    font-size: 15px;
    color: rgb(214 214 214 / 65%);
    border-top: 1px solid #747279;
  }

  .overlayContent .overlayLanguages a {
    padding: 5px 5px 5px 0;
    margin-right: 30px;
    text-decoration: none;
  }

  /* Position the close button (top right corner) */
  .overlay .closeBtn {
    position: absolute;
    top: 20px;
    right: 30px;
    padding: 10px;
    font-size: 60px;
    cursor: pointer;
  }

  /* When the height of the screen is less than 450 pixels, change the font-size
   of the links and position the close button again, so they don't overlap */
  @media screen and (height <= 450px) {
    .overlay a {
      font-size: 20px;
    }

    .overlay .closeBtn {
      top: 15px;
      right: 35px;
      font-size: 40px;
    }
  }

  a.active {
    font-weight: bold;
    color: #fff;
  }
}
</style>
