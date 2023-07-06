<template>
  <div>
    {{ postSlug }}
  </div>
</template>

<script setup lang="ts">
const postSlug = useRoute().params.postSlug
</script>

<style scoped>

</style>
