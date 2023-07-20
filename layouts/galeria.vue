<template>
  <div>
    <div class="mobileHeader">
      <LayoutMenu :menu-active="showMobileMenu" @closeMobileMenu="showMobileMenu = false" />
    </div>
    <LayoutHeader @openMobileMenu="showMobileMenu = true" />
    <div class="galleryLayoutWrapper">
      <slot />
    </div>
    <LayoutFooter />
  </div>
</template>

<script setup lang="ts">
const showMobileMenu = ref(false)
</script>
<style>
.galleryLayoutWrapper {
  width: 86%;
  max-width: 1340px;
  padding: 0;
  margin: 0 auto;
}

@media only screen and (min-width:1000px) {
  .mobileHeader {
    display: none;
  }
}
</style>
