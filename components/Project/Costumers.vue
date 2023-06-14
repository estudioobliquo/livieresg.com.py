<template>
    <div class="main">
      <h2>
        {{$t(`index.workWith`)}}
      </h2>
  
      <div class="costumersContainer">
        <div 
          v-for="(img, index) in costumers"
          :key="index"
          class="costumerImageContainer"
          :class="{ full: !isIndex}"
        >
          
          <img :src="`/images/costumers/` + (img.image)">
          
        </div>
      </div>
  
      <div v-if="isIndex" class="buttonContainer">
        <NuxtLink style="text-decoration: none" to="/nosotros#costumers">
          <AtomButton-Link text="Ver todos" />
        </NuxtLink>
      </div>
    </div>
  </template>
  
  <script>
  import { dataFullCostumers } from '@/assets/dataCostumer.js'
  
  export default {
  
    props: {
  
      isIndex: {
        type: Boolean,
        default: false,
      },
    },
    data () {
      return {
        fullCostumers: dataFullCostumers,
  
      }
    },
    computed: {
      costumers () {
        if (this.isIndex) {
          return this.fullCostumers.costumers.slice(0, 6)
        }
        else {
          return this.fullCostumers.costumers
        }
      },
    },
  
  }
  </script>
  
<style lang="scss" >
 .main {
  margin-bottom: 60px;
}

.main h2 {
  text-align: left;
  border-bottom: 1px solid var(--main-color-light);
  padding-bottom: 20px;


}

.buttonContainer {
  display: flex;
  justify-content: center;
  margin-top: 40px;
}

.main.full .buttonContainer {
  display: none;
}

.costumersContainer {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  column-gap: 24px;
  row-gap: 32px;
  img{
    object-fit: contain;
  }
  
  .costumerImageContainer {
  width: 100px;
  height: 70px;
  filter: saturate(0);
  transition: filter 0.5s, opacity 0.5s;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  opacity: 0.7;
  object-fit: contain;
  img{

  }
  
  
}

.costumerImageContainer > div {
  width: 100%;
  height: 100%;
}

.costumerImageContainer:hover {
  opacity: 1;
  filter: saturate(100%);
  transition: filter 0.5s, opacity 0.5s;
}

}


@media only screen and (min-width: 900px) {
  .main {
    margin-bottom: 120px;
  }
  
  .main h2 {
    text-align: left;
    border-bottom: 1px solid var(--main-color-light);
    padding-bottom: 20px;
  }

  .costumersContainer {
    align-items: center;
    justify-content: space-evenly;
    width: 78%;
    max-width: 1200px;
    margin: 0 auto;
    column-gap: 120px;
  }

  .main.full .costumersContainer {
    width: 100%;
    justify-content: space-evenly;
    column-gap: 80px;
  }

  .main.full .costumersContainer .costumerImageContainer {
    width: 100px;
    height: 50px;
  }

  .costumerImageContainer {
    width: 200px;
    height: 110px;
  }
}
  </style>
  