<template>
  <div class="navigation">
    <div id="menu" class="navigation-links">
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
   <div v-if="$route.path.includes('miembros')">
    <LayoutBuscador />
  </div>
      </div>
  </template>
  <script>
  export default {
  
  }
  </script>
  
  <style lang="scss">

.navigation{
  .imgContainer {
    width: 135px;
    margin-bottom: 30px;
  }

  .navigation-links {
    padding: 30px 0 30px 30px;
    margin: 0 auto 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 76%;
    height: 375px;
    max-width: 300px;
    background-color: var(--gray-dark);
    padding-left: 30px;
    padding-top: 30px;
    
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
.buscadorMenuCont {
  padding: 30px 0 30px 30px;
    margin: 0 auto 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 76%;
    height: max-content;
    max-width: 300px;
    background-color: var(--gray-dark);
    padding-left: 30px;
    padding-top: 30px;
  }
  

}

  </style>
  