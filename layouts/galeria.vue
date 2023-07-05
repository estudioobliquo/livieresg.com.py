<template>
  <div>
    <LayoutHeader />
    <div class="galleryLayoutWrapper">
      <slot />
    </div>
    <LayoutFooter />
  </div>
</template>

<style>
.galleryLayoutWrapper {
  width: 86%;
  margin: 0 auto;
  padding: 0;
  max-width: 1340px;
}
</style>
