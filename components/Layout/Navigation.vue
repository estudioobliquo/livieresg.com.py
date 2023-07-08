<template>
  <div class="navigation">
    <div id="menu" class="navigation-links">
      <NuxtLink :to="localePath('/')">
        {{ $t(`menu.home`) }}
      </NuxtLink>
      <NuxtLink :to="localePath('/nosotros')">
        {{ $t(`menu.aboutUs`) }}
      </NuxtLink>
      <NuxtLink :to="localePath('/miembros')">
        {{ $t(`menu.staff`) }}
      </NuxtLink>
      <NuxtLink :to="localePath('/areas-de-practica')">
        {{ $t(`menu.areas`) }}
      </NuxtLink>
      <NuxtLink :to="localePath('/blog')">
        {{ $t(`menu.blog`) }}
      </NuxtLink>
      <NuxtLink :to="localePath('/galeria')">
        {{ $t(`menu.art`) }}
      </NuxtLink>
      <a to="#footer">{{ $t(`menu.contact`) }}</a>
    </div>
    <div v-if="$route.path === '/miembros'">
      <LayoutBuscador />
    </div>
  </div>
</template>
<script setup lang="ts">
</script>

<style lang="scss">
.navigation {
  .imgContainer {
    width: 135px;
    margin-bottom: 30px;
  }

  .navigation-links {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 76%;
    max-width: 300px;
    height: 375px;
    padding: 30px 0 30px 30px;
    padding-top: 30px;
    padding-left: 30px;
    margin: 0 auto 15px;
    background-color: var(--gray-dark);

    a {
      padding: 0;
      font-size: 1.1rem;
      font-weight: normal;
      color: #d6d6d6;
      text-decoration: none;
      transition: color 0.2s;
    }

    a:hover {
      color: #fff;
      transition: color 0.2s;
    }

    a.router-link-exact-active {
      font-weight: bold;
      color: white;
    }
  }

  .buscadorMenuCont {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 76%;
    max-width: 300px;
    height: max-content;
    padding: 30px 0 30px 30px;
    padding-top: 30px;
    padding-left: 30px;
    margin: 0 auto 15px;
    background-color: var(--gray-dark);
  }
}
</style>
