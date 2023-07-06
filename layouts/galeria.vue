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
  max-width: 1340px;
  padding: 0;
  margin: 0 auto;
}
</style>
