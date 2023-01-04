<template>
    <div>
      <div class="gallery">
        <AtomVolver-Atras text="atom.buttonBack" to="/" />
        <h1>{{$t(`gallery.galleryTitle`)}}</h1>
        <p>
          {{$t(`gallery.subtitle`)}}
        </p>
        <div class="galleryNav">
          <div class="activeSection">
            <a @click="typeSelected = 0">
              {{$t(`gallery.paint`)}} 
            </a>
          </div>
          <div class="activeSection">
            <a @click="typeSelected = 1">
              {{$t(`gallery.sculp`)}}
            </a>
          </div>
        </div>
        <div class="galleryContainer " data-aos="fade-up" data-aos-delay="300">
          <div
            v-for="art in arte"
            :key="art.img"
           
            class="galleryItem"
          >
            <div v-if="art.type === typeSelected">
              <img :src="(art.img)">
              <div class="textContainer">
                <p>{{ art.description }}</p>
                <p>{{ art.author }}</p>
                <p>{{ art.technic }}</p>
              </div>
            </div>
          </div>
        </div>
        <!-- Aqui va galeriaContainer -->
      </div>
    </div>
  </template>
<script setup >
import sal from 'sal.js'
import {dataArt}  from '../assets/dataArt.js'
import { seoData } from '~~/assets/seoData'
const { locale } = useI18n()
//  *** SEO ***
useHead(seoData['/galeria'][locale.value])
definePageMeta({  layout: "galeria",});

const arte = dataArt
const typeSelected = ref(0)
  // export default {
  //   data () {
  //     return {
  //       arte: dataArt,
  //       typeSelected: 0,
  //     }
     
  //   }
  // }

  </script>
  
  <style>
  @import "../node_modules/sal.js/dist/sal.css";
  
  .gallery {
    padding-bottom: 40px;
  }
  
  .gallery h1 {
    margin-bottom: 16px;
    max-width: 450px;
  }
  
  .gallery > p {
    max-width: 450px;
  }
  
  .galleryNav {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-items: center;
    margin-bottom: 64px;
    max-width: 550px;
  }
  
  .galleryNav div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px 0;
    cursor: pointer;
  }
  
  .galleryNav div:first-of-type {
    border-right:1px solid var(--main-color-light) ;
  }
  
  .galleryNav div:not(.activeSection){
    opacity: 0.6;
  }
  
  .galleryNav p {
    margin: 0;
  }
  
  /* items */
  .galleryItem {
    margin-left: auto;
    width: 75%;
    margin-bottom: 24px;
    max-width: 450px;
  }
  
  .galleryContainer > div:nth-child(2n + 1) {
    margin-right: auto;
    margin-left: 0;
  }
  
  .galleryContainer > div:nth-child(4n + 3) {
    width: 50%;
  }
  
  .galleryItem .textContainer {
    display: flex;
    flex-direction: column;
    padding-top: 4px;
    padding-left: 4px;
  }
  
  .galleryItem .textContainer p {
    margin-bottom: 0;
    line-height: normal;
    font-size: 12px;
  }
  
  @media only screen and (min-width: 800px) {
    .galleryItem{
      margin-bottom: 80px;
    }
  
    .galleryContainer > div:nth-child(4n + 4) {
      width: 60%;
      margin-right: auto;
      margin-left: auto;
    }
  }
  
  @media only screen and (min-width: 1260px) {
    .gallery {
      padding-bottom: 400px;
    }
  
    .gallery h1 {
      font-size: 50px;
    }
  
    .galleryNav {
      max-width: 400px;
    }
  
    .galleryNav div:first-of-type {
      justify-content: flex-start;
    }
  
    .galleryNav div:nth-of-type(2) {
      justify-content: flex-end;
    }
  
    /* items */
    .galleryContainer {
      margin-top: -220px;
    }
  
    .galleryItem{
      margin-bottom: -150px;
      max-width: 500px;
      margin-right: auto;
      margin-left: 0;
    }
  
    .galleryContainer > div:nth-child(2n + 1) {
      margin-right: 0;
      margin-left: auto;
    }
  
    .galleryContainer > div:nth-child(4n + 4) {
      width: 60%;
      margin-top: 300px;
      margin-bottom: 150px;
    }
  
    .galleryItem .textContainer p {
      font-size: 14px;
    }
  }
  
  /* scroll to top */
  .scrollToTop {
    position: fixed;
    bottom: 40px;
    right: 40px;
    z-index: 9999;
    cursor: pointer;
    border-radius: 50%;
    background-color: white;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
    width: 40px;
    height: 40px;
    font-family: "Founders Grotesk", sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .scrollToTop svg {
    transform: rotate(270deg);
  }
  
  </style>
  