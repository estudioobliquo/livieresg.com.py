<template>
  <div class="container-go-back">
    <NuxtLink :to="localePath(`${to}`)" class="volverAtras">
      <div>
        <SVGflecha style="transform:rotate(180deg)" />
        <p>{{ $t(text) }}</p>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts" >
import SVGflecha from '@/assets/svg/global/arrow.svg'
defineProps({
  text: {
    type: String,
    default: 'atom.goBack',
  },
  to: {
    type: String,
    default: '/miembros',
  },
  direction: {
    type: String,
    default: '180deg',
  },
})
</script>

<style lang="scss">
</style>
