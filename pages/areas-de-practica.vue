<template>
  <div>
    <h1 class="title-areas-practica">
      {{ $t(`menu.areas`) }}
    </h1>
    <AtomAcordeon
      v-for="acordeonSection in datosAreas"
      :key="acordeonSection.titulo"
      :cards-section="acordeonSection"
    />
  </div>
</template>

<script setup lang="ts">
import { seoData } from 'assets/seoData'
import { dataAdp } from '@/assets/dataAdp.js'
const datosAreas = dataAdp

const { locale } = useI18n()

useHead(seoData['/areas-de-practica'][locale.value])
</script>

<style lang="scss">
.title-areas-practica {
  display: block;

  @media only screen and (min-width: 1000px) {
    &{
      display: none;
    }
  }
}

</style>
