<!-- eslint-disable max-len -->
<template>
    <header class="header">
      <div class="subcont1">
        <div class="logoContainer2">
          <!-- /* deberia de ser class='logoContainer'pero no aparece la imagen si uso esa clase */ -->
          <NuxtLink to="/">
            <img src="../../assets/img/logo-nuevo-2.png" alt="">
          </NuxtLink>
        </div>
      </div>
      <div class="subcont2">
        <div class="buscadorMenuCont">
          <div class="buscadorContainer">
            <!-- <Buscador />  deberia de ser un propio componente pero para testear asi por ahora-->
            <!-- <div class="searchState">
                <input type="text" class="input" placeholder="Buscar">
                <button type="reset" class="quiteSearchButton" />
              </div> -->
          </div>
          <div class="mobileHeader" @click="showMobileMenu">
            <svg
              width="33"
              height="23"
              viewBox="0 0 33 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.375 22.25H32.625V18.6667H0.375V22.25ZM0.375 13.2917H32.625V9.70833H0.375V13.2917ZM0.375 0.75V4.33333H32.625V0.75H0.375Z"
                fill="#404040"
              />
            </svg>
          </div>
  
          <!-- <Menu /> -->
        </div>
        <div class="languagesContainer">
          <NuxtLink :to="switchLocalePath('es')" >
              Español
            </NuxtLink>
            <NuxtLink :to="switchLocalePath('en')" >
              English
            </NuxtLink>
            <NuxtLink :to="switchLocalePath('de')" >
              Deutsch
            </NuxtLink>
            <NuxtLink :to="switchLocalePath('pt')" >
              Português
            </NuxtLink>
        </div>
      </div>
      <!-- <Menu /> -->
    </header>
  </template>
  
  <script>
  
  export default {
    methods: {
      showMobileMenu () {
        this.$emit('showMobileMenu') // closes the mobile menu if in open state and when route changes
      },
    },
  }
  </script>
  
  <style>
  @media only screen and (min-width: 1000px) {
    .mobileHeader {
      display: none;
    }
  }
  .header {
    margin-bottom: 50px;
    display: flex;
    flex-direction: row;
    width: 86%;
    justify-content: space-between;
    /* max-width: 1550px; */
    margin: 0 auto 50px;
    padding: 25px 0 0;
  }
  
  .subcont1 {
    width: 45%;
    max-width: 450px;
  }
  
  .subcont2 {
    padding-top: 10px;
    max-width: 1050px;
  }
  
  /* .logoContainer {
    width: 55%;
    max-width: 200px;
    margin: 50px auto 25px;
  } */
  .logoContainer2 {
    width: 55%;
    max-width: 180px;
  }
  
  .buscadorMenuCont {
    display: flex;
  }
  
  .buscadorContainer {
    width: 100%;
    max-width: 30px;
    margin-right: 25px;
    display: flex;
    align-items: center;
  }
  
  @media screen and (min-width: 1000px) {
    .header {
      width: 100%;
      padding: 30px 0 0;
      margin-left: auto;
      margin-right: auto;
      justify-content: center;
    }
  
    .subcont1 {
      width: 30%;
    }
  
    .subcont2 {
      width: 70%;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      padding-right: 8%;
    }
  
    .logoContainer2 {
      max-width: 200px;
      width: 100%;
      margin: 0 auto;
    }
  
    .buscadorContainer {
      display: none;
    }
  }
  
  @media only screen and (min-width: 1500px) {
    .subcont2 {
      padding: 0 50px 0 0;
    }
  }
  
  /* Languages Container */
  
  .languagesContainer {
    display: none;
  }
  
  .languagesContainer a {
    /* color: var(--accent-color); */
    color: #6a7476;
    margin-left: 30px;
    text-decoration: none;
    transition: color 0.2s;
    font-size: 19px;
  }
  
  .languagesContainer a:hover {
    color: #404040;
    transition: color 0.2s;
  }
  
  @media screen and (min-width: 1000px) {
    .languagesContainer {
      display: block;
      align-self: center;
    }
  }
  .closeBtn {
    font-family: "Founders Grotesk";
    font-size: 19px;
    border: none;
    margin-bottom: 25px;
    padding: 5px 0;
    text-decoration: none;
    font-size: 1.375rem;
    color: #d6d6d6;
    display: block;
    transition: 0.3s;
  }
  /* .closeBtn {
    position: absolute;
    top: 20px;
    right: 30px;
    font-size: 60px;
    cursor: pointer;
    padding: 10px;
  } */
  @media screen and (max-height: 450px) {
    .closeBtn {
      font-size: 40px;
      top: 15px;
      right: 35px;
    }
  }
  .svg {
    cursor: pointer;
  }
  </style>
  