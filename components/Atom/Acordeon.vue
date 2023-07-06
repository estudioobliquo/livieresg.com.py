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
  font-weight: 400;
  font-size: 20px;
}

.adp {
  display: grid;
  width: 100%;
  margin: 0 auto;
  border-bottom: rgba(0, 0, 0, 0.23) 1px solid;
  grid-template-columns: 40px calc(100% - 40px);
  align-items: center;
  grid-template-rows: 100px calc(100% - 100px);
}

.adp .iconoContainer {
  margin: 0 auto;
  display: flex;
}

.adp .titulo {
  display: flex;
  position: relative;
  width: 100%;
  background-color: #ffffff;
  border: none;
  outline: none;
  text-align: left;
  padding: 25px 20px;
  font-family: "Founders Grotesk", serif;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  letter-spacing: 0.05em;
  color: var(--gray-dark);
  cursor: pointer;
  -webkit-transition: background-color 0.2s linear;
  -moz-transition: background-color 0.2s linear;
  -o-transition: background-color 0.2s linear;
  transition: background-color 0.2s linear;
}

.titulo p {
  margin-bottom: 0;
}

/* max-width de 23 caracteres. Para que el titulo no toque a la flecha */
@media only screen and (max-width: 475px) {
  .adp span {
    max-width: 23ch;
    display: block;
  }
}

.adp .contenido {
  padding: 0;
  max-height: 0;
  overflow: hidden;
  background-color: var(--secondary-color);
  grid-column: 1/3;
}

/* styles para el acordeon abierto */
.adp.open .contenido {
  max-height: 1500px;
  opacity: 1;
  padding: 25px;
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
  /* content: url(~assets/img/show-more.svg); */
  content: url("data:image/svg+xml,%3Csvg width='27' height='27' viewBox='0 0 27 27' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cline x1='13.5996' y1='4.37114e-08' x2='13.5996' y2='27' stroke='%231D5D68' strokeWidth='2'/%3E%3Cline x1='27' y1='13.6' y2='13.6' stroke='%231D5D68' strokeWidth='2'/%3E%3C/svg%3E%0A");
  top: 32%;
  position: absolute;
  right: 5px;
}

.adp.open .titulo::after {
  content: url("data:image/svg+xml,%3Csvg width='27' height='2' viewBox='0 0 27 2' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cline x1='27' y1='1' y2='1' stroke='%231D5D68' strokeWidth='2'/%3E%3C/svg%3E%0A");
  top: 24%;
  position: absolute;
  right: 5px;
}
</style>
