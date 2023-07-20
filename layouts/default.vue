<template>
  <div>
    <!-- <transition name="fade"> -->
    <div class="mobileHeader">
      <LayoutMenu :menu-active="showMenu" @closeMobileMenu="showMenu = false" />
    </div>

    <!-- </transition> -->
    <LayoutHeader @openMobileMenu="showMenu = true" />
    <div class="layoutWrapper">
      <div class="navContainer">
        <LayoutNavigation />
        <div v-if="$route.path.endsWith('/miembros') || $route.path.endsWith('/blog')">
          <LayoutBuscador />
        </div>
      </div>
      <div class="mainContainer">
        <slot />
      </div>
    </div>

    <LayoutFooter />
  </div>
</template>

<script setup lang="ts">
const showMenu = ref(false)

</script>

<style scoped>

@media only screen and (min-width: 1000px) {
  .mobileHeader {
    display: none;
  }
}

.layoutWrapper {
  display: flex;
  margin-bottom: 100px;
}

.navContainer {
  position: initial;
  top: 40px;
  width: 30%;
  max-width: 450px;
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
    position: absolute;
    display: none;
  }

  .mainContainer {
    width: 86%;
    padding: 0;
    margin: 0 auto;
  }
}

/* Large Screen Styles */
@media screen and (min-width: 1500px) {
  .layoutWrapper {
    justify-content: center;
  }

  .mainContainer {
    padding: 0 50px 0 0;
    margin-bottom: 0;
  }
}

/* Gallery */

/* TODO: mover a layout para galeria */
.galleryLayoutWrapper {
  width: 86%;
  max-width: 1340px;
  padding: 0;
  margin: 0 auto;
}
</style>
