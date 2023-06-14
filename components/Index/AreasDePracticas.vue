<template>
    <div class="mainContainer">
      <h2>{{$t(`index.ourAreas`)}}</h2>
      <div class="adpsContainer">
        <div v-for="adp in adps" :key="adp.title" class="adpContainer">
          <div class="iconContainer">
            
            <img :src="(adp.icono)">
          </div>
          <h3 class="titleContainer">
            {{$t(`index.aboutUs.${adp.title}`)}}
          </h3>
        </div>
      </div>
      <div class="buttonContainer">
        <NuxtLink style="text-decoration: none" to="/areas-de-practica">
          <AtomButton-Link text="Conocer mas" to="/areas-de-practica" />
        </NuxtLink>
      </div>
    </div>
  </template>
  
  <script>

  export default {
    name: 'AdpIndex',
    data () {
      return {
        adps: [
          {
            title: 'Derecho Comercial y Societario',
            icono: 'svg/coins.svg',
          },
          {
            title: 'Inversiones - Derecho Tributario',
            icono: 'svg/inversion.svg',
          },
          {
            title: 'Sucesiones',
            icono: 'svg/sucesion.svg',
          },
          {
            title: 'Asuntos Administrativos',
            icono: 'svg/folder.svg',
          },
          {
            title: 'Propiedad Intelectual',
            icono: 'svg/foco.svg',
          },
        ],
      }
    },
  }
  </script>
  
  <style scoped>
  .mainContainer {
    margin-bottom: 60px;
  }
  
  .mainContainer h2 {
    text-align: center;
  }
  
  .buttonContainer {
    display: flex;
    justify-content: center;
    margin-top: 40px;
  }
  
  .adpsContainer {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 40px;
    column-gap: 120px;
  }
  
  .adpContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
  }
  
  .adpContainer img {
    margin-bottom: 10px;
  }
  
  .adpContainer h3 {
    font-size: 20px;
    max-width: 180px;
    text-align: center;
    font-family: "Founders Grotesk";
  }
  
  @media only screen and (min-width: 900px) {
    .mainContainer {
      margin-bottom: 120px;
    }
  
    .mainContainer h2 {
      text-align: left;
      border-bottom: 1px solid var(--main-color-light);
      padding-bottom: 20px;
    }
  
    .adpsContainer {
      justify-content: space-evenly;
      width: 78%;
      max-width: 1200px;
      margin: 0 auto;
      column-gap: 50px;
    }
  }
  </style>
  
  