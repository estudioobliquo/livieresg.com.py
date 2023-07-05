<template>
  <div>
    <!-- <transition name="fade"> -->
    <div class="mobileHeader">
      <LayoutMenu :menu-active="showMobileMenu" @closeMobileMenu="showMobileMenu = false" />
    </div>

    <!-- </transition> -->
    <LayoutHeader @click="showMobileMenu = true" />
    <div class="layoutWrapper">
      <div class="navContainer">
        <LayoutNavigation />
        <!-- <Buscador v-show="$route.name.includes('miembros')" /> -->
      </div>
      <div class="mainContainer">
        <!-- <main><Nuxt /></main> -->
        <slot />
      </div>
    </div>

    <LayoutFooter />
  </div>
</template>

<script>

export default {
  // name: 'DefaultInicio',
  // transition: {
  //   name: 'page',
  //   mode: 'out-in',
  // },
  data () {
    return {
      showMobileMenu: false,
    }
  },
  computed: {
    isMiembros () {
      return this.$route.name === 'Miembros'
    },
  },
  watch: {
    '$route' () {
      this.showMobileMenu = false
    },
  },
}

</script>

<style scoped>
.fade-enter-from {
  opacity: 0;
}

.fade- -to {
  opacity: 1;
}

.fade-enter-active {
  transition: all 2s ease;
}

.fade-leave-from {}

.fade-leave-to {}

.fade-leave-active {}

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
  width: 30%;
  max-width: 450px;
  position: initial;
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
    margin-bottom: 0;
    padding: 0 50px 0 0;
  }
}

/* Gallery */
/* TODO: mover a layout para galeria */
.galleryLayoutWrapper {
  width: 86%;
  margin: 0 auto;
  padding: 0;
  max-width: 1340px;
}
</style>
