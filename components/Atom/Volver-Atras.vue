<!-- eslint-disable max-len -->
<template>
  <div class="container-go-back">
    <NuxtLink :to="to" class="volverAtras">
      <div>
        <img class="svg" src="@/assets/svg/flecha.svg" alt="" style="transform:rotate(180deg)">
        <p>{{ $t( text ) }}</p>
      </div>
    </NuxtLink>
  </div>
</template>

<script >
import SVGflecha from '@/assets/svg/flecha.svg'

export default {

  props: {
    text: { type: String, default: 'Volver Atras' },
    to: String,
    direction: { type: String, default: '180deg' },

  },

}

</script>

  <style lang="scss">
  .container-go-back{
    .volverAtras{
      .svg{
        transform: rotate();
      }

      }
  }
  </style>
