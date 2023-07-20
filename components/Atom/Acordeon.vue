<template>
  <div class="adp" :class="{ open: isOpen }">
    <div class="iconoContainer">
      <nuxt-img :src="`/svg/adp` + (cardsSection.icono)" />
    </div>
    <div class="titulo" @click="isOpen = !isOpen">
      <p>{{ $t(`${T}.title.${cardsSection.titulo}`) }}</p>
    </div>
    <div v-show="isOpen" class="contenido" v-html="$t(`${T}.content.${cardsSection.titulo}`)" />
  </div>
</template>

<script setup lang="ts">
const T = 'pages.adp'

defineProps({
  cardsSection: {
    type: Object,
    default: () => ({}),
  },
})

const isOpen = ref(false)
</script>

<style>
.titulo p {
  font-family: "Founders Grotesk", serif;
  font-size: 20px;
  font-weight: 400;
}

.adp {
  display: grid;
  grid-template-rows: 100px calc(100% - 100px);
  grid-template-columns: 40px calc(100% - 40px);
  align-items: center;
  width: 100%;
  margin: 0 auto;
  border-bottom: rgb(0 0 0 / 23%) 1px solid;
}

.adp .iconoContainer {
  display: flex;
  margin: 0 auto;
}

.adp .titulo {
  position: relative;
  display: flex;
  width: 100%;
  padding: 25px 20px;
  font-family: "Founders Grotesk", serif;
  font-size: 20px;
  font-style: normal;
  font-weight: normal;
  color: var(--gray-dark);
  text-align: left;
  letter-spacing: 0.05em;
  cursor: pointer;
  background-color: #fff;
  border: none;
  outline: none;
  transition: background-color 0.2s linear;
}

.titulo p {
  margin-bottom: 0;
}

/* max-width de 23 caracteres. Para que el titulo no toque a la flecha */
@media only screen and (max-width: 475px) {
  .adp p {
    display: block;
    max-width: 23ch;
  }
}

.adp .contenido {
  grid-column: 1/3;
  max-height: 0;
  padding: 0;
  overflow: hidden;
  background-color: var(--secondary-color);
}

/* styles para el acordeon abierto */
.adp.open .contenido {
  max-height: 1500px;
  padding: 25px;
  opacity: 1;
}

@media only screen and (min-width: 1000px) {
  .adp.open .contenido {
    padding: 40px 45px;
  }

  .adp .titulo p {
    font-size: 21px;
    letter-spacing: 0.03em;
  }
}

.adp .titulo::after {
  position: absolute;
  top: 32%;
  right: 5px;
  content: url('@/assets/svg/adp/show-more.svg');
}

.adp.open .titulo::after {
  position: absolute;
  top: 24%;
  right: 5px;
  content: url('@/assets/svg/adp/show-less.svg');
}
</style>
