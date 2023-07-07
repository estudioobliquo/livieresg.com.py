<!-- eslint-disable vue/require-prop-types -->
<!-- eslint-disable vue/require-prop-types -->

<template>
    <div>
      <div v-if=" card.id === 1 " class="costumerImageContainer">
        <!-- <img :src="require(`@/assets/img/costumers/${card.image}`)"> -->
        <img :src="`@/assets/img/costumers/`+ card.image" >
      </div>
      <div v-else class="costumerImageContainer full">
        <img :src="require(`@/assets/img/costumers/${card.image}`)">
        <img :src="`@/assets/img/costumers/`+ card.image" >
            </div>
    </div>
  </template>
  
  <script>
  export default {
    props: [ 'card' ],
  }
  </script>
  
  <style >
  
  .costumerImageContainer {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 70px;
    filter: saturate(0);
    opacity: 0.7;
    transition: filter 0.5s, opacity 0.5s;
  
  }
  
  .costumerImageContainer img{
    object-fit: contain;
  }
  
  .costumerImageContainer > div {
    width: 100%;
    height: 100%;
  }
  
  .costumerImageContainer:hover {
    filter: saturate(100%);
    opacity: 1;
    transition: filter 0.5s, opacity 0.5s;
  }
  
  @media only screen and (width >= 900px) {
    .full .costumerImageContainer {
      width: 100px;
      height: 50px;
    }
  
    .costumerImageContainer {
      width: 200px;
      height: 110px;
    }
  }
  </style>
  
  <!-- /* TESTING
  <template>
    <div class="mainContainer">
      <h2>{{ title }}</h2>
  
      <div class="costumersContainer">
        <div v-for="empresas in empresasIndex" :key="empresas.id" class="costumerImageContainer">
          <img :src="empresas.src">
        </div>
      </div>
      <div class="buttonContainer">
        <nuxt-link style="text-decoration: none" to="/nosotros">
          <button-Link text="Ver todos" />
        </nuxt-link>
      </div>
    </div>
  </template>
  
   Testing here
  
  <script>
  /* importa carpeta imag */
  import asepasa from '@/assets/img/costumers/asepasa.png'
  import asismed from '@/assets/img/costumers/asismed.png'
  import chortitzer from '@/assets/img/costumers/chortitzer.png'
  import bahia from '@/assets/img/costumers/bahia.png'
  import coop from '@/assets/img/costumers/coop.png'
  import neuland from '@/assets/img/costumers/cooperativa-neuland.png'
  
  /* import asepasa from '@/assets/img/costumers/asepasa.png' */
  
  export default {
  
    data () {
      return {
        title: 'Trabajamos con',
  
        empresasIndex: [
          { src: asepasa, id: 1 },
          { src: asismed, id: 2 },
          { src: chortitzer, id: 3 },
          { src: bahia, id: 4 },
          { src: coop, id: 4 },
          { src: neuland, id: 4 },
        ],
  
        empresasFull: [
  
        ],
  
      }
    },
  }
  
  <img src="../../assets/img/logos-asociaciones/ccpf.png" alt="">
  </script>*/ -->
  