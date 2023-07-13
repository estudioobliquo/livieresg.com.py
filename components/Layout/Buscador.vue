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
    <div v-if="$route.path.endsWith('/blog')" class="filter-container">
      <h4>Filtrar por tipo de publicación:</h4>
      <div class="inputs-container">
        <div class="option">
          <label>
            <input v-model="checkedFilter" value="Artículo" type="checkbox" @change="checkOption">
            Articulos
          </label>
        </div>
        <div class="option">
          <label>
            <input v-model="checkedFilter" value="news" type="checkbox" @change="checkOption">
            Novedades Jurídicas
          </label>
        </div>
        <div class="option">
          <label>
            <input v-model="checkedFilter" value="Deal" type="checkbox" @change="checkOption">
            Deals
          </label>
        </div>
        <div class="option">
          <label>
            <input v-model="checkedFilter" value="Evento" type="checkbox" @change="checkOption">
            Eventos
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useSearch } from '@/composables/useSearch'
import SVGLupa from '@/assets/svg/global/lupa.svg'
import SVGCancel from '@/assets/svg/global/cancel.svg'

const { text, handleInput, resetInput, checkOption, checkedFilter } = useSearch()
</script>

<style lang="scss">
.container-search {
  display: flex;
  align-items: center;
  width: 76%;
  max-width: 300px;
  height: 70px;
  padding: 0 25px 0 30px;
  margin: 0 auto;
  background-color: var(--accent-color);

  form {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 0;
    overflow: hidden;

    .input {
      width: 100%;
      overflow: hidden;
      font-family: "Founders Grotesk", sans-serif;
      font-size: 19px;
      font-weight: normal;
      color: #d6d6d6;
      background-color: var(--accent-color);
      border: none;

      &:focus {
        outline: none;
      }
    }

    button {
      cursor: pointer;
      background-color: transparent;
      border: none;

      &:focus {
        outline: none;
      }

      svg {
        min-width: 20px;
        margin-top: 7px;
      }
    }
  }
}

.filter-container {
  display: flex;
  flex-direction: column;
  width: 76%;
  max-width: 300px;
  margin: 24px auto 0;

  h4 {
    margin-bottom: 10px;
    font-family: 'Founders Grotesk',sans-serif;
    font-size: 15px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: .1em;
    opacity: .8;
  }

  .inputs-container {
    display: flex;
    flex-direction: column;
    row-gap: 8px;
    font-family: 'Founders Grotesk',sans-serif;
    color: var(--text-color);

    .option {
      display: flex;
      column-gap: 10px;
      align-items: center;

      input, label {
        cursor: pointer;
      }

      input {
        margin-right: 10px;
      }
    }
  }
}
</style>
