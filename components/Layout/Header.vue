<!-- eslint-disable max-len -->
<template>
  <header class="header">
    <div class="subcont1">
      <div class="logoContainer2">
        <!-- /* deberia de ser class='logoContainer'pero no aparece la imagen si uso esa clase */ -->
        <NuxtLink :to="localePath('/')">
          <img src="@/assets/img/logo-nuevo-2.png" alt="Livieres Guggiari - Logo">
        </NuxtLink>
      </div>
    </div>
    <div class="subcont2">
      <div class="buscadorMenuCont">
        <div class="buscadorContainer">
          <!-- <Buscador />  deberia de ser un propio componente pero para testear asi por ahora-->
        </div>
        <div class="mobileHeader" @click="showMobileMenu">
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
const emit = defineEmits([ 'showMobileMenu' ])

const showMobileMenu = () => {
  emit('showMobileMenu')
}

const isCurrentLanguage = computed(() => {
  return (lang: string) => {
    return lang === locale.value
  }
})
</script>

<style>
@media only screen and (width >= 1000px) {
  .mobileHeader {
    display: none;
  }
}

.header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 86%;
  padding: 25px 0 0;
  margin: 0 auto 50px;
  margin-bottom: 50px;
}

.subcont1 {
  width: 45%;
  max-width: 450px;
}

.subcont2 {
  max-width: 1050px;
  padding-top: 10px;
}

.logoContainer2 {
  width: 99%;
  max-width: 180px;
}

.buscadorMenuCont {
  display: flex;
}

.buscadorContainer {
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 30px;
  margin-right: 25px;
}

@media screen and (width >= 1000px) {
  .header {
    justify-content: center;
    width: 100%;
    padding: 30px 0 0;
    margin-right: auto;
    margin-bottom: 44px;
    margin-left: auto;
  }

  .subcont1 {
    width: 30%;
  }

  .subcont2 {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 70%;
    padding-right: 8%;
  }

  .logoContainer2 {
    width: 100%;
    max-width: 200px;
    margin: 0 auto;
  }

  .buscadorContainer {
    display: none;
  }
}

@media only screen and (width >= 1500px) {
  .subcont2 {
    padding: 0 50px 0 0;
  }
}

/* Languages Container */

.languagesContainer {
  display: none;
}

.languagesContainer a {
  margin-left: 30px;
  font-size: 19px;
  color: #6a7476;
  text-decoration: none;
  transition: color 0.2s;
}

.languagesContainer a:hover {
  color: #404040;
  transition: color 0.2s;
}

@media screen and (width >= 1000px) {
  .languagesContainer {
    display: block;
    align-self: center;
  }
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

.svg {
  cursor: pointer;
  transform: scale(0.9);
}

.none {
  display: none;
}
</style>
