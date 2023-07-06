<template>
  <div class="adp" :class="{ open: isOpen }">
    <div class="iconoContainer">
      <img :src="(cardsSection.icono)">
    </div>
    <div class="titulo" @click="isOpen = !isOpen">
      <p>{{ $t(`pages.adp.${cardsSection.titulo}`) }}</p>
    </div>

    <div v-show="isOpen" class="contenido" v-html="cardsSection.contenido" />
  </div>
</template>

<script>

export default {
  props: [ 'cardsSection' ],
  data () {
    return {
      isOpen: false,
    }
  },
}
</script>

  <!-- eslint-disable max-len -->

  <style>

  /* .adp.open .titulo {
    top: 32%;
    position: absolute;
    right: 5px;

  } */

  /* img{
    max-width: 2cm;
    max-height: 2cm;
    object-fit: contain;
    display: flex;
    margin: 0 auto;
  } */

  .adp {
    display: grid;
    grid-template-rows: 100px calc(100% - 100px);

    /* display: flex; */

    grid-template-columns: 40px calc(100% - 40px);
    align-items: center;

    /* flex-direction: row; */
    width: 100%;
    margin: 0 auto;
    border-bottom: rgb(0 0 0 / 23%) 1px solid;
  }

  /* .adp .iconoContainer img{
    margin: 0 auto;
    display: block;
    max-width: 1cm;
    max-height: 1cm;
    object-fit: contain;
    display: flex;
    margin: 0 auto;
  } */

  .adp .iconoContainer {
    display: flex;
    margin: 0 auto;

    /* height: 50px; */
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

  .titulo p{
    margin-bottom: 0;
  }

  /* max-width de 23 caracteres. Para que el titulo
  no toque a la flecha */
  @media only screen and (width <= 475px) {
    .adp span {
      display: block;
      max-width: 23ch;
    }
  }

  .adp .contenido {
    grid-column: 1/3;
    max-height: 0;
    padding: 0;
    overflow: hidden;

    /* Padding transition con delay para que no se note la transicion
    entre padding:0 y padding:40px  */

    /* -webkit-transition: max-height 0.2s ease-in-out, padding 0.01s 0.2s;
    -moz-transition: max-height 0.2s ease-in-out, padding 0.01s 0.2s;
    -o-transition: max-height 0.2s ease-in-out, padding 0.01s 0.2s;
    transition: max-height 0.2s ease-in-out, padding 0.01s 0.2s; */
    background-color: var(--secondary-color);
  }

  /* styles para el acordeon abierto */
  .adp.open .contenido {
    max-height: 1500px;
    padding: 25px;
    opacity: 1;

    /* -webkit-transition:  max-height 0.2s;
    -moz-transition:  max-height 0.2s;
    -o-transition:  max-height 0.2s;
    transition:  max-height 0.2s;  */

    /* 0s para que la transicion del padding se haga solo al cerrarse el acordeon */

    /* -webkit-transition: padding 0s, max-height 0.2s;
    -moz-transition: padding 0s, max-height 0.2s;
    -o-transition: padding 0s, max-height 0.2s;
    transition: padding 0s, max-height 0.2s; */
  }

  @media only screen and (width >= 1000px) {
    .adp .contenido {
      padding: 40px 45px;
    }

    .adp .titulo {
      font-size: 21px;
      letter-spacing: 0.03em;
    }
  }

  .adp .titulo::after {
    position: absolute;  top: 32%;
    right: 5px;

    /* content: url(~assets/img/show-more.svg); */
    content: url("data:image/svg+xml,%3Csvg width='27' height='27' viewBox='0 0 27 27' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cline x1='13.5996' y1='4.37114e-08' x2='13.5996' y2='27' stroke='%231D5D68' strokeWidth='2'/%3E%3Cline x1='27' y1='13.6' y2='13.6' stroke='%231D5D68' strokeWidth='2'/%3E%3C/svg%3E%0A");

    /* -webkit-transition: transform 0.2s linear;
    -moz-transition: transform 0.2s linear;
    -o-transition: transform 0.2s linear;
    transform: translateY(-50%);
    transition: transform 0.2s linear; */
  }

  .adp.open .titulo::after {
    position: absolute;
    top: 24%;
    right: 5px;

    /* -webkit-transform: translateY(-50%) rotate(180deg);
    -moz-transform: translateY(-50%) rotate(180deg);
    -o-transform: translateY(-50%) rotate(180deg);
    transform: translateY(-50%) rotate(180deg); */

    content: url("data:image/svg+xml,%3Csvg width='27' height='2' viewBox='0 0 27 2' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cline x1='27' y1='1' y2='1' stroke='%231D5D68' strokeWidth='2'/%3E%3C/svg%3E%0A");
  }
  </style>
