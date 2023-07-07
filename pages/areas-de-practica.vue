<!-- eslint-disable vue/attribute-hyphenation -->
<template>
  <div>
    <AtomAcordeon
      v-for="acordeonSection in datosAreas"
      :key="acordeonSection.id"
      :cardsSection="acordeonSection"
    />
  </div>
</template>

<script>
import { dataAdp } from '../assets/dataAdp.js'
//   import Acordeon from '../components/Acordeon.vue'
definePageMeta({ layout: 'central' })

export default {

  data () {
    return {
      datosAreas: dataAdp,
    }
  },
}
</script>

  <style>

  </style>
