<!-- eslint-disable vue/max-attributes-per-line -->
<template>
  <div>
    <h2
      v-if=" !filteredDatosAbogados.length
        && !filteredDatosPartners.length
        && !filteredDatosAdmin.length
        && !filteredDatosParalegales.length"
    >
      No se han encontrado resultados con el término "{{ $store.state.page.query }}"
    </h2>
    <h1
      v-if="filteredDatosAbogados.length
        || filteredDatosPartners.length "
    >
    {{$t(`staff.atto`)}}    </h1>
    <!-- <h1>{{ filteredDatosAbogados[1].nombre }}</h1> -->
    <!-- <h1>{{ $store.state.page.query }}</h1> -->

    <!-- Partners -->
    <div class="partnersCont">
      <div v-for="partners in filteredDatosPartners" :key="partners.id" class="miembroCont">
        <div class="imgCont">
          <NuxtLink class="masinfo" :to="'/miembros/'+partners.slug ">
            <img :src="`/miembros`+ (partners.foto)">
          </NuxtLink>
        </div>
        <div class="subcont">
          <h2 class="nombre">
            {{ partners.nombre }}
          </h2>
          <a :href="`mailto:${partners.mail}`" target="_blank" rel="noopener noreferrer">
            {{ partners.mail }}
          </a>
        </div>
        <NuxtLink class="masinfo" :to="'/miembros/' + partners.slug ">
          {{$t(`atom.information`)}}
        </NuxtLink>
      </div>
    </div>

    <!-- Abogados!! -->
    <div class="abogadosCont">
      <!-- <div v-for="abogados in filteredDatosAbogados" :key="abogados.nombre">
        {{ abogados.nombre }}
      </div> -->
      <!-- <div v-for="abogados in datosAbogados" :key="abogados.slug" class="miembroCont"> -->
      <div v-for="abogados in filteredDatosAbogados" :key="abogados.id" class="miembroCont">
        <div class="imgCont">
          <NuxtLink class="masinfo" to="">
            <img :src="(abogados.foto)">
          </NuxtLink>
        </div>
        <div class="subcont">
          <h2 class="nombre">
            {{ abogados.nombre }}
          </h2>
          <a :href="`mailto:${abogados.mail}`" target="_blank" rel="noopener noreferrer">
            {{ abogados.mail }}
          </a>
        </div>
        <NuxtLink class="masinfo" :to="'/miembros/' + abogados.slug ">
          {{$t(`atom.information`)}}
        </NuxtLink>
      </div>
    </div>

    <!-- Paralegales -->
    <h1 v-if="filteredDatosParalegales.length">
      {{$t(`staff.paralegals`)}} 
    </h1>
    <div class="paralegalesCont">
      <div
        v-for="paralegales in filteredDatosParalegales"
        :key="paralegales.slug"
        class="miembroCont"
      >
        <div class="imgCont">
          <img :src="(paralegales.foto)">
        </div>
        <div class="subcont">
          <h2 class="nombre">
            {{ paralegales.nombre }}
          </h2>
          <a
            :href="`mailto:${paralegales.mail}`"
            target="_blank"
            rel="noopener noreferrer"
          >{{ paralegales.mail }}</a>
        </div>
      </div>
    </div>

    <!-- Administracion -->
    <h1 v-if="filteredDatosAdmin.length">
      {{$t(`staff.administration`)}} 
    </h1>
    <div class="administracionCont">
      <div v-for="admin in filteredDatosAdmin" :key="admin.slug" class="miembroCont">
        <div class="imgCont">
          <img :src="(admin.foto)">
        </div>
        <div class="subcont">
          <h2 class="nombre">
            {{ admin.nombre }}
          </h2>
          <a :href="`mailto:${admin.mail}`" target="_blank" rel="noopener noreferrer">{{
            admin.mail
          }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  ES,
  abogados,
  partners,
  paralegales,
  administracion,
} from '../../assets/dataMiembros.js'
definePageMeta({  layout: "central",});

export default {
  layout: 'layoutCentral',
  data () {
    return {
      datosAbogados: abogados,
      espanol: ES,
      datosPartners: partners,
      datosParalegales: paralegales,
      datosAdmin: administracion,
    }
  },
  computed: {
    filteredDatosAbogados () {
      return this.datosAbogados

      // if (this.$store.state.page.query) {
      // return this.datosAbogados.filter((item) => {
      //   return item.nombre.toLowerCase().includes(this.$store.state.page.query)
      // })} 
      // else {
      //   return this.datosAbogados
      // }
    },
    filteredDatosPartners () {
      return this.datosPartners

      // if (this.$store.state.page.query) {
      // return this.datosPartners.filter((item) => {
      //   return item.nombre.toLowerCase().includes(this.$store.state.page.query)
      // })}
      // else {
      //   return this.datosPartners
      // }
    },
    filteredDatosParalegales () {
      return this.datosParalegales

      // if (this.$store.state.page.query) {
      // return this.datosParalegales.filter((item) => {
      //   return item.nombre.toLowerCase().includes(this.$store.state.page.query)
      // })}
      // else {
      //   return this.datosParalegales
      // }
    },
    filteredDatosAdmin () {
      return this.datosAdmin

      // if (this.$store.state.page.query) {
      // return this.datosAdmin.filter((item) => {
      //   return item.nombre.toLowerCase().includes(this.$store.state.page.query)
      // })}
      // else {
      //   return this.datosAdmin
      // }
    },
  },
}
</script>

<style lang="scss" >

.miembroCont {
  display: grid;
  /* 61% - 12px del gap */
  grid-template-columns: 39% calc(61% - 12px);
  grid-template-rows: 86% 14%;
  column-gap: 12px;
  margin-bottom: 40px;
  padding-bottom: 13px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.23);
}

.imgCont{
  grid-row: 1/3;
  transition: filter 0.2s;
}

.imgCont img{
  object-fit: cover;
  max-width: 100%;
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.45rem;
}

.partnersCont .imgCont:hover,
.abogadosCont .imgCont:hover {
  filter: brightness(110%);
  transition: filter 0.2s;
}

.miembroCont h2 {
  font-family: "Founders Grotesk", sans-serif;
  font-style: normal;
  font-weight: medium;
  font-size: 1.25rem;
  line-height: 128.2%;
  letter-spacing: 0;
  margin-bottom: 5px;
}

.miembroCont a[href^="mailto:"] {
  font-size: 0.95rem;
  font-weight: 300;
  word-break: break-all;
}

.masinfo {
  font-size: 13px;
  text-transform: uppercase;
  color: var(--main-color);
  text-decoration: none;
  letter-spacing: 0.03em;
  width: fit-content;
  justify-self: end;
  align-self: end;
  transition: color 0.2s;
}

.masinfo:hover {
  color: var(--main-color-light);
  transition: color 0.2s;
}

@media only screen and (min-width: 768px) {
  .partnersCont,
  .abogadosCont,
  .administracionCont,
  .paralegalesCont {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    column-gap: 30px;
  }

  .abogadosCont,
  .administracionCont,
  .paralegalesCont {
    margin-bottom: 60px;
  }

  .miembroCont {
    /* display: flex;
    flex-direction: column;
    padding: 0;
    margin: 0 0 60px;
    max-width: 238px; */
    /* grid-template-columns: 1fr;
    grid-template-rows: 170px 47px 43px; */
    grid-template-columns: initial;
    grid-template-rows: initial;
    padding: 0;
    margin: 0 0 60px;
    max-width: 238px;
  }

  .imgCont {
    /* grid-row: 1/2; */
    grid-row: initial;
    max-width: 238px;
    margin-bottom: 10px;
  }

  .imgCont .masinfo {
    height: 100%;
  }

  .imgCont .masinfo > div {
    aspect-ratio: 0.665;
  }

  .miembroCont .subcont {
    grid-row: 2/3;
    grid-row: initial;
    min-height: 83px;
    margin-bottom: 20px;
  }

  .miembroCont h2 {
    font-size: 1.2rem;
    margin: 0;
  }
}
</style>
