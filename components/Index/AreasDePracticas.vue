<template>
  <div class="mainContainer">
    <h2>{{ $t(`index.ourAreas`) }}</h2>
    <div class="adpsContainer">
      <div v-for="adp in adps" :key="adp.title" class="adpContainer">
        <div class="iconContainer">
          <component :is="adp.icon" class="svg" />
        </div>
        <h3 class="titleContainer">
          {{ $t(`index.aboutUs.${adp.title}`) }}
        </h3>
      </div>
    </div>
    <div class="buttonContainer">
      <NuxtLink style="text-decoration: none" :to="localePath('/areas-de-practica')">
        <AtomButton-Link text="Conocer mas" />
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import SVGCoin from '@/assets/svg/index/coins.svg'
import SVGInversion from '@/assets/svg/index/inversion.svg'
import SVGSucesion from '@/assets/svg/index/sucesion.svg'
import SVGFolder from '@/assets/svg/index/folder.svg'
import SVGFoco from '@/assets/svg/index/foco.svg'

const adps = [
  { title: 'Derecho Comercial y Societario', icon: SVGCoin },
  { title: 'Inversiones - Derecho Tributario', icon: SVGInversion },
  { title: 'Sucesiones', icon: SVGSucesion },
  { title: 'Asuntos Administrativos', icon: SVGFolder },
  { title: 'Propiedad Intelectual', icon: SVGFoco },
]

</script>

<style scoped>
.mainContainer {
  margin-bottom: 60px;
}

.mainContainer h2 {
  text-align: center;
}

.buttonContainer {
  display: flex;
  justify-content: center;
  margin-top: 40px;
}

.adpsContainer {
  display: flex;
  flex-wrap: wrap;
  column-gap: 120px;
  justify-content: center;
  margin-top: 40px;
}

.adpContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
}

.adpContainer .svg {
  margin-bottom: 10px;
  transform: scale(1.3);
}

.adpContainer h3 {
  max-width: 180px;
  font-family: "Founders Grotesk";
  font-size: 20px;
  text-align: center;
}

@media only screen and (min-width: 900px) {
  .mainContainer {
    margin-bottom: 120px;
  }

  .mainContainer h2:first-child {
    padding-bottom: 20px;
    text-align: left;
    border-bottom: 1px solid var(--main-color-light);
  }

  .adpsContainer {
    column-gap: 50px;
    justify-content: space-evenly;
    width: 78%;
    max-width: 1200px;
    margin: 0 auto;
  }
}
</style>
