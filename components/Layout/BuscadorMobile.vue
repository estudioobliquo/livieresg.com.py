<template>
  <div class="buscador-container">
    <SVGLupa class="search-icon" @click="openSearchInput = true" />
    <div class="search-bar" :class="{'class-block': openSearchInput}">
      <form>
        <input v-model="text" type="text" class="input" placeholder="Buscar" @input="handleInput">
        <button type="reset" @click="resetAll">
          <SVGCancel />
        </button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import SVGLupa from '@/assets/svg/global/lupaMobile.svg'
import SVGCancel from '@/assets/svg/global/cancelMobile.svg'

const openSearchInput = ref(false)
const { text, handleInput, resetInput } = useSearch()
const resetAll = () => {
  text.value === '' ? openSearchInput.value = false : resetInput()
}
</script>

<style lang="scss">
.buscador-container {
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 30px;
  margin-right: 34px;

  .search-icon {
    width: 100%;
    height: 100%s;
    transform: scale(1.1);
  }

  .search-bar {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    height: 70px;
    padding: 23px 25px 12px;
    overflow-x: hidden;
    background-color: var(--gray-dark);
    transition: transform 0.3s ease-in-out;
    transform: translateY(-100%);

    &.class-block {
      transform: translateY(0);
    }

    form {
      width: 100%;
      padding: 0;
      margin: 0 0 1.45rem;

      input {
        position: relative;
        width: 80%;
        margin: 0 auto;
        font-family: "Founders Grotesk", sans-serif;
        font-size: 17px;
        color: #d6d6d6;
        background-color: transparent;
        border: none;
        outline: none;
      }

      button {
        padding-top: 5px;
        padding-bottom: 5px;
        margin-left: 8%;
        background-color: transparent;
        border: none;
      }
    }
  }

  @media screen and (width >=1000px) {
    display: none;
  }

}
</style>
