<template>
    <div id="menu" class="navigation">
      <NuxtLink to="/" >
        {{$t(`menu.home`)}}
      </NuxtLink>
      <NuxtLink :to="localePath('/nosotros')"> 
        {{$t(`menu.aboutUs`)}}
      </NuxtLink>
      <NuxtLink :to="localePath('/miembros')">
        {{$t(`menu.staff`)}}
      </NuxtLink>
      <NuxtLink :to="localePath('/areas-de-practica')">
        {{$t(`menu.areas`)}}
      </NuxtLink>
      <NuxtLink :to="localePath('/blog')">
        {{$t(`menu.blog`)}} 
      </NuxtLink>
      <NuxtLink :to="localePath('/galeria')">
        {{$t(`menu.art`)}}
      </NuxtLink>
      <a to="#footer">{{$t(`menu.contact`)}}</a>
    </div>
  </template>
  <script>
  export default {
  
  }
  </script>
  
  <style lang="scss">
  /* .NuxtLink-active {
      font-weight: 900;
      font-family: cursive;
  } */
  /* .navigation a.NuxtLink-exact-active {
      font-weight: bold;
  } */
  
  /* .navigation a.router-link-exact-active {
      font-weight: bold;
  } */

//   .navigation a.nuxt-link-exact {
//   color: #00c58e;
// }

  .imgContainer {
    width: 135px;
    margin-bottom: 30px;
  }
  
.navigation {
    width: 76%;
    height: 375px;
    max-width: 300px;
    margin: 0 auto 15px;
    background-color: var(--gray-dark);
    padding-left: 30px;
    padding-top: 30px;
    padding: 30px 0 30px 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    
    a {
    padding: 0;
    text-decoration: none;
    font-weight: normal;
    font-size: 1.1rem;
    color: #d6d6d6;
    transition: color 0.2s;
  }
  a:hover {
    color:#ffffff;
    transition: color 0.2s;
  }
//   a.router-link-exact-active {
//     font-weight: bold;
// }
  }
  </style>
  