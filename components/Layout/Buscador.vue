<template>
  <div>
    <div class="container-search">
      <form>
        <input v-model="query" type="text" class="input" placeholder="Buscar" @input="handleQuery">
        <!-- <button v-if="!$store.state.page.query">
            <SVGlupa />
          </button>
          <button v-else type="reset" @click="reset">
            <SVGcancel />
          </button> -->
      </form>
    </div>
  </div>
</template>

<script>
import SVGlupa from '@/assets/svg/lupa.svg'
import SVGcancel from '@/assets/svg/cancel.svg'

//   import { createPinia } from "pinia";
// import { createApp } from "vue";
// import App from '../App.vue';
// createApp(App)
//   .use(createPinia())
//   .mount("#app");
//   export default {
//     components: {
//       SVGlupa,
//       SVGcancel,
//     },
//     data () {
//       return {
//         query: '',
//       }
//     },
//     methods: {
//       handleQuery () {
//         this.$store.dispatch('page/setQuery', this.query)
//       },
//       reset () {
//         this.query = ''
//         this.$store.dispatch('page/reset', this.query)
//       },
//     },
//   }
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
