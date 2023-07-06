<template>
  <div class="container-go-back">
    <NuxtLink :to="to" class="volverAtras">
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
    default: 'Volver Atrás',
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
.container-go-back {
  .volverAtras {
    .svg {
      transform: rotate();
    }
  }
}
</style>
