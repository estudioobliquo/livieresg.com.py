<!-- eslint-disable max-len -->
<template>
  <header class="header">
    <div class="subcont1">
      <div class="logoContainer2">
        <NuxtLink :to="localePath('/')">
          <nuxt-img
            src="/img/global/logoBlue.png"
            loading="lazy"
            format="webp"
            sizes="xs:38vw sm:38vw md:180px lg:180px"
            alt="Livieres Guggiari - Logo"
          />
        </NuxtLink>
      </div>
    </div>
    <div class="subcont2">
      <div class="buscadorMenuCont">
        <div v-if="$route.path.endsWith('/miembros')">
          <LayoutBuscadorMobile />
        </div>
        <div class="mobileHeader" @click="openMobileMenu">
          <svg width="33" height="23" viewBox="0 0 33 23" fill="none" xmlns="http://www.w3.org/2000/svg" class="svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0.375 22.25H32.625V18.6667H0.375V22.25ZM0.375 13.2917H32.625V9.70833H0.375V13.2917ZM0.375 0.75V4.33333H32.625V0.75H0.375Z"
              fill="#404040"
            />
          </svg>
        </div>
        <!-- <Menu /> -->
      </div>
      <div class="languagesContainer">
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
    </div>
    <!-- <Menu /> -->
  </header>
</template>

<script setup lang="ts">
const { locale } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const emit = defineEmits([ 'openMobileMenu' ])

const openMobileMenu = () => {
  emit('openMobileMenu')
}

const isCurrentLanguage = computed(() => {
  return (lang: string) => {
    return lang === locale.value
  }
})
</script>

<style lang="scss">
.header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 86%;
  padding: 25px 0 0;
  margin: 0 auto 50px;
  margin-bottom: 50px;

  .subcont1 {
    width: 45%;
    max-width: 450px;

    .logoContainer2 {
      width: 99%;
      max-width: 180px;
    }
  }

  .subcont2 {
    max-width: 1050px;
    padding-top: 10px;

    .buscadorMenuCont {
      display: flex;

      @media only screen and (width >= 1000px) {
        .mobileHeader {
          display: none;
        }
      }
    }
  }

  .languagesContainer {
    display: none;

    a {
      margin-left: 30px;
      font-size: 19px;
      color: #6a7476;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: #404040;
        transition: color 0.2s;
      }
    }
  }

  .svg {
    cursor: pointer;
    transform: scale(0.9);
  }

  .none {
    display: none;
  }

  .closeBtn {
    display: block;
    padding: 5px 0;
    margin-bottom: 25px;
    font-family: "Founders Grotesk";
    font-size: 19px;
    font-size: 1.375rem;
    color: #d6d6d6;
    text-decoration: none;
    border: none;
    transition: 0.3s;
  }

  @media screen and (height <= 450px) {
    .closeBtn {
      top: 15px;
      right: 35px;
      font-size: 40px;
    }
  }

  @media screen and (width >= 1000px) {
    justify-content: center;
    width: 100%;
    padding: 30px 0 0;
    margin-right: auto;
    margin-bottom: 44px;
    margin-left: auto;

    .subcont1 {
      width: 30%;

      .logoContainer2 {
        width: 100%;
        max-width: 200px;
        margin: 0;
        margin-left: 12%;

        @media only screen and (width >= 1390px) {
          margin-left: 16%;;
        }
      }
    }

    .subcont2 {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      width: 70%;
      padding-right: 8%;

      @media only screen and (width >= 1500px) {
        padding: 0 50px 0 0;
      }
    }

    .languagesContainer {
      display: block;
      align-self: center;
    }
  }
}
</style>
