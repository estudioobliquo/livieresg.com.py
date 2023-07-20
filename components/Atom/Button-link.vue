<template>
  <div class="buttonLink">
    <a @click="handleClick">{{ $t(`atom.${text}`) }}</a>
  </div>
</template>

<script>
export default {
  props: {
    text: String,
  },
  methods: {
    handleClick () {
      this.$emit('click')
    },
  },
}
</script>

<style lang="scss">
  .buttonLink {
  padding: 10px 20px 12px;
  color: white;
  text-decoration: none;
  background-color: var(--main-color);
  transition: background-color 0.25s;

    @media screen and (min-width: 1000px) {
      font-size: 20px;
    }
  }

  .buttonLink:hover {
  background-color: var(--main-color-light);
  transition: background-color 0.25s;
  }
</style>
