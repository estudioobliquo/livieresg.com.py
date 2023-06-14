<!-- eslint-disable vue/attribute-hyphenation -->
<template>
    <div >
      <div class="imgContainer2"
            >
        <img src="../assets/img/nosotros-1.jpg" alt="">
      </div>
      <h1 >{{$t(`pages.us.usTitle`)}}</h1>
      <section class="section2" 
           >
        <p>
          {{$t(`pages.us.us1`)}}
        </p>
        <p>
          {{$t(`pages.us.us2`)}}
        </p>
        <p>
          {{$t(`pages.us.us3`)}}
        </p>
        <p>
          {{$t(`pages.us.us4`)}}
        </p>
      </section>
      <div class="imgContainer2">
        <img src="../assets/img/nosotros-2.jpg" alt="">
      </div>
  
      <ProjectCostumers
        id="costumers"
        :isIndex="false"
     
      />
    </div>
  </template>
  
<script setup>
import { seoData } from '~~/assets/seoData'
import { dataFullCostumers } from '../assets/dataCostumer.js'

const { locale } = useI18n()

//  *** SEO ***
useHead(seoData['/nosotros'][locale.value])

definePageMeta({  layout: "central",});
const fullCostumers = dataFullCostumers
</script>
  
  <style scoped>

  
  .imgContainer2 {
    margin-bottom: 50px;
  }
  
  .imgContainer2.img2Mobile {
    margin-top: 50px;
  }
  
  .img2Desktop {
    display: none;
  }
  
  .section {
    margin-bottom: 64px;
  }
  
  @media screen and (min-width: 1000px) {
    .section2 {
      border-left: 1px solid #919191;
      padding-left: 33px;
      margin-bottom: 0;
    }
  
    .section2 p {
      text-align: justify;
    }
  
    .imgContainer2 {
      margin-bottom: 65px;
    }
  
    .imgContainer2.img2Desktop {
      margin-top: 70px;
    }
  
    .img2Mobile {
      display: none;
    }
    .img2Desktop {
      display: block;
    }
  }
  
  .layoutWrapper {
    display: flex;
    margin-bottom: 100px;
  }
  
  .navContainer {
    width: 30%;
    max-width: 450px;
    position: sticky;
    top: 40px;
    height: fit-content;
  }
  
  .mainContainer {
    width: 70%;
    max-width: 1050px;
    padding: 0 8% 0 2%;
  }
  
  /* Mobile Styles */
  @media screen and (max-width: 1000px) {
    .navContainer {
      display: none;
      position: absolute;
    }
  
    .mainContainer {
      width: 86%;
      margin: 0 auto;
      padding: 0;
    }
  }
  
  /* Large Screen Styles */
  @media screen and (min-width: 1500px) {
    .layoutWrapper {
      justify-content: center;
    }
  
    .mainContainer {
      padding: 0 50px 0 0;
    }
  }
  
  /* Gallery */
  
  .galleryLayoutWrapper {
    width: 86%;
    margin: 0 auto;
    padding: 0;
    max-width: 1340px;
  }
  
  </style>
  