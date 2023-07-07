<!-- eslint-disable vue/max-attributes-per-line -->
<template>
  <div class="miembros-container">
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
      class="title-occupation"
    >
      {{ $t(`staff.atto`) }}
    </h1>

    <!-- Partners -->
    <div class="partnersCont">
      <div v-for="partners in filteredDatosPartners" :key="partners.id" class="miembroCont">
        <div class="imgCont">
          <NuxtLink class="masinfo" :to="'/miembros/'+partners.slug ">
            <nuxt-img :src="`/img/miembros/${partners.foto}`" loading="lazy" format="webp" />
          </NuxtLink>
          <!-- {{ partners.foto }} -->
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
          {{ $t(`atom.information`) }}
        </NuxtLink>
      </div>
    </div>

    <!-- Abogados!! -->
    <div class="abogadosCont">
      <div v-for="abogados in filteredDatosAbogados" :key="abogados.id" class="miembroCont">
        <div class="imgCont">
          <NuxtLink class="masinfo" to="">
            <nuxt-img :src="`/img/miembros/${abogados.foto}`" loading="lazy" format="webp" />
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
          {{ $t(`atom.information`) }}
        </NuxtLink>
      </div>
    </div>

    <!-- Paralegales -->
    <h1 v-if="filteredDatosParalegales.length" class="title-occupation">
      {{ $t(`staff.paralegals`) }}
    </h1>
    <div class="paralegalesCont">
      <div
        v-for="paralegales in filteredDatosParalegales"
        :key="paralegales.slug"
        class="miembroCont"
      >
        <div class="imgCont">
          <nuxt-img :src="`/img/miembros/${paralegales.foto}`" loading="lazy" format="webp" />
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
    <h1 v-if="filteredDatosAdmin.length" class="title-occupation">
      {{ $t(`staff.administration`) }}
    </h1>
    <div class="administracionCont">
      <div v-for="admin in filteredDatosAdmin" :key="admin.slug" class="miembroCont">
        <div class="imgCont">
          <nuxt-img :src="`/img/miembros/${admin.foto}`" loading="lazy" format="webp" />
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
} from '@/assets/dataMiembros.js'
definePageMeta({ layout: 'central' })

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

      if (this.$store.state.page.query) {
        return this.datosAbogados.filter((item) => {
          return item.nombre.toLowerCase().includes(this.$store.state.page.query)
        })
      }
      else {
        return this.datosAbogados
      }
    },
    filteredDatosPartners () {
      return this.datosPartners

      if (this.$store.state.page.query) {
        return this.datosPartners.filter((item) => {
          return item.nombre.toLowerCase().includes(this.$store.state.page.query)
        })
      }
      else {
        return this.datosPartners
      }
    },
    filteredDatosParalegales () {
      return this.datosParalegales

      if (this.$store.state.page.query) {
        return this.datosParalegales.filter((item) => {
          return item.nombre.toLowerCase().includes(this.$store.state.page.query)
        })
      }
      else {
        return this.datosParalegales
      }
    },
    filteredDatosAdmin () {
      return this.datosAdmin

      if (this.$store.state.page.query) {
        return this.datosAdmin.filter((item) => {
          return item.nombre.toLowerCase().includes(this.$store.state.page.query)
        })
      }
      else {
        return this.datosAdmin
      }
    },
  },
}
</script>

<style lang="scss" >
.title-occupation {
  font-size: 1.56rem;
}

.miembros-container{
.miembroCont {
  display: grid;
  grid-template-rows: 86% 14%;
  grid-template-columns: 39% calc(61% - 12px);
  column-gap: 12px;
  padding-bottom: 13px;
  margin-bottom: 40px;
  border-bottom: 1px solid rgb(0 0 0 / 23%);
}

.imgCont{
  grid-row: 1/3;
  transition: filter 0.2s;
}

.imgCont img{
  max-width: 100%;
  max-height: 338px;
  padding: 0;
  object-fit: cover;
}

.partnersCont .imgCont:hover,
.abogadosCont .imgCont:hover {
  filter: brightness(110%);
  transition: filter 0.2s;
}

.miembroCont .nombre {
  margin-bottom: 5px;
  font-family: "Founders Grotesk", sans-serif;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: medium;
  line-height: 128.2%;
  letter-spacing: 0;
}

.miembroCont a[href^="mailto:"] {
  font-size: 0.95rem;
  font-weight: 300;
  word-break: break-all;
}

.masinfo {
  align-self: end;
  justify-self: end;
  width: fit-content;
  font-size: 13px;
  color: var(--main-color);
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.03em;
  transition: color 0.2s;
}

.masinfo:hover {
  color: var(--main-color-light);
  transition: color 0.2s;
}

@media only screen and (width >= 768px) {
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
    grid-template-rows: initial;
    grid-template-columns: initial;
    max-width: 238px;
    padding: 0;
    margin: 0 0 60px;
  }

  .imgCont {
    grid-row: initial;
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
    margin: 0;
    font-size: 1.2rem;
  }
}}
</style>
