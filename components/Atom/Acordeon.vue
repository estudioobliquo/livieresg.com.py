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
@media only screen and (width <= 475px) {
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

@media only screen and (width >= 1000px) {
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

  /* content: url(~assets/img/show-more.svg); */
  content: url("data:image/svg+xml,%3Csvg width='27' height='27' viewBox='0 0 27 27' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cline x1='13.5996' y1='4.37114e-08' x2='13.5996' y2='27' stroke='%231D5D68' strokeWidth='2'/%3E%3Cline x1='27' y1='13.6' y2='13.6' stroke='%231D5D68' strokeWidth='2'/%3E%3C/svg%3E%0A");
}

.adp.open .titulo::after {
  position: absolute;
  top: 24%;
  right: 5px;
  content: url("data:image/svg+xml,%3Csvg width='27' height='2' viewBox='0 0 27 2' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cline x1='27' y1='1' y2='1' stroke='%231D5D68' strokeWidth='2'/%3E%3C/svg%3E%0A");
}
</style>
