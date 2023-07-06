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
import { dataAdp } from '@/assets/dataAdp.js'
definePageMeta({ layout: 'central' })
const datosAreas = dataAdp
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
