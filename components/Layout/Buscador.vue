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
    width: 76%;
    height: 70px;
    max-width: 300px;
    background-color: var(--accent-color);
    margin: 0 auto;
    padding: 0 25px 0 30px;
    display: flex;
    align-items: center;
  }
  
  .container-search form {
    overflow: hidden;
    margin-bottom: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  
  .input {
    background-color: var(--accent-color);
    border: none;
    color: #d6d6d6;
    font-family: "Founders Grotesk", sans-serif;
    font-weight: normal;
    overflow: hidden;
    width: 100%;
    font-size: 19px;
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
  