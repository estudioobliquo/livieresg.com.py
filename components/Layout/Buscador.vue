<template>
  <div>
    <div class="container-search">
      <form>
        <input v-model="text" type="text" class="input" placeholder="Buscar" @input="handleInput">
        <button v-if="text === ''" @keydown.enter.prevent @click.prevent>
          <SVGLupa />
        </button>
        <button v-else type="reset" @click="resetInput">
          <SVGCancel />
        </button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useSearch } from '~/composables/useSearch'
import SVGLupa from '@/assets/svg/global/lupa.svg'
import SVGCancel from '@/assets/svg/global/cancel.svg'

const { text, handleInput, resetInput } = useSearch()
</script>

  <style>
  .container-search {
    display: flex;
    align-items: center;
    width: 76%;
    max-width: 300px;
    height: 70px;
    padding: 0 25px 0 30px;
    margin: 0 auto;
    background-color: var(--accent-color);
  }

  .container-search form {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 0;
    overflow: hidden;
  }

  .input {
    width: 100%;
    overflow: hidden;
    font-family: "Founders Grotesk", sans-serif;
    font-size: 19px;
    font-weight: normal;
    color: #d6d6d6;
    background-color: var(--accent-color);
    border: none;
  }

  .input:focus {
    outline: none;
  }

  .container-search button {
    cursor: pointer;
  }

  .container-search svg {
    min-width: 20px;
    margin-top: 7px;
  }

  button {
    background-color: transparent;
    border: none;
  }

  button:focus {
    outline: none;
  }
  </style>
