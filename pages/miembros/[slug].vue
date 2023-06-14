<template>
  <div class="slug-container">
    <AtomVolver-Atras text="atom.goBack" to="/miembros" />
      <div v-for="partners in datosPartners" :key="partners.id" >
        <div v-if="partners.slug === $route.params.slug">
        <div class="container">
            <div class="flexcont">
                <div class="imgCont">
                    <img :src="(partners.foto)">

                </div>
                <div class="subcont">
                    <h1>{{ partners.nombre }}</h1>
                    <h2>{{ partners.subtitle }}</h2>
                    <a
                        target="_blank"
                        rel="noopener noreferrer">
                        {{partners.mail }}
                    </a>
                    <h3>{{$t(`staff.slug.areas`)}}</h3>
                    <div>
                        <p v-if="$route.path.includes('pt')">{{partners.PTadp}}</p>
                        <p v-else>{{partners.adp}}</p>

                    </div> 
                    
                    <h3>{{$t(`staff.slug.education`)}}  </h3>
                    <p>{{partners.formacion}}</p>
                    <div v-if="partners.experiencia">
                        <h3>{{$t(`staff.slug.experiencia`)}} </h3>
                        <p>{{partners.experiencia}}</p>
                    </div>
                    <h3>{{$t(`staff.slug.languages`)}} </h3>
                    <p>{{partners.idiomas}}</p>    
                    <div v-if="partners.asociaciones">
                        <h3>{{$t(`staff.slug.members`)}} </h3>
                        <p>{{partners.asociaciones}}</p>
                    </div> 
                </div>
            </div>
        </div>
        </div>
    </div>
    <div v-for="abogados in datosAbogados" :key="abogados.id" >
        <div v-if="abogados.slug === $route.params.slug">
        <div class="container">
            <div class="flexcont">
                <div class="imgCont">
                    <img :src="(abogados.foto)">
                </div>
                <div class="subcont">
                    <h1>{{ abogados.nombre }}</h1>
                    <h2>{{ abogados.subtitle }}</h2>
                    <a
                        target="_blank"
                        rel="noopener noreferrer">
                        {{abogados.mail}}
                    </a>
                    <h3>{{$t(`staff.slug.areas`)}}</h3>
                    <p>{{abogados.adp}}</p>
                    <h3>{{$t(`staff.slug.education`)}}  </h3>
                    <p>{{abogados.formacion}}</p>
                    <div v-if="abogados.experiencia">
                        <h3>{{$t(`staff.slug.experiencia`)}} </h3>
                        <p>{{abogados.experiencia}}</p>
                    </div>
                    <h3>{{$t(`staff.slug.languages`)}} </h3>
                    <p>{{abogados.idiomas}}</p>    
                    <div v-if="abogados.asociaciones">
                        <h3>{{$t(`staff.slug.members`)}} </h3>
                        <p>{{abogados.asociaciones}}</p>
                    </div> 
                </div>
            </div>
        </div>
        </div>
    </div>
</div>
</template>

<script>
import { localeCodes } from '~~/.nuxt/i18n.options.mjs';
import {
  ES,
  abogados,
  partners,
} from '../../assets/dataMiembros.js'

definePageMeta({  layout: "central",});

export default {
  layout: 'layoutCentral',
  data () {
    return {
      datosAbogados: abogados,
      espanol: ES,
      datosPartners: partners,
    }
  },}

</script>

<style lang="scss">
.slug-container{
.container {
  padding: 40px 30px 20px;
  background-color: var(--secondary-color);
  margin-bottom: 40px;

  @media only screen and (max-width: 768px) {
      padding: 8%;
    }
  .flexcont{
    display: flex;
    @media only screen and (max-width: 768px) {
      display: grid;
     
    }
      .subcont {
     margin-left: 30px; 
      }


    .imgCont {
      margin-bottom: 20px;
      width: max-content;
      height: max-content;

      @media only screen and (max-width: 768px) {
     
       width: 100%; 
    
   
    }
    }
    h1 {
    margin-bottom: 10px;
    }   

    h2 {
      font-family: "Founders Grotesk", sans-serif;
      font-style: normal;
      font-weight: 300;
      font-size: 1.2rem;
      letter-spacing: 0;
      margin-bottom: 25px;
    }
    a {
      display: block;
      margin-bottom: 35px;
      width: fit-content;
      color: var(--main-color);
    }

    a::after {
      padding-top: 10px;
      content: "";
      display: block;
      width: 150%;
      border-bottom: 2px solid var(--main-color-light);
    }

    h3 {
      margin-bottom: 10px;
    }

    p {
    margin-bottom: 35px;
    }

  }

}

// .imgCont {
//   margin-bottom: 20px;
//   /* height: 0%; */
// }

// .container h1 {
//   margin-bottom: 10px;
// }

// .container h2 {
//   font-family: "Founders Grotesk", sans-serif;
//   font-style: normal;
//   font-weight: 300;
//   font-size: 1.2rem;
//   letter-spacing: 0;
//   margin-bottom: 25px;
// }

// .container a {
//   display: block;
//   margin-bottom: 35px;
//   width: fit-content;
//   color: var(--main-color);
// }

// .container a::after {
//   padding-top: 10px;
//   content: "";
//   display: block;
//   width: 150%;
//   border-bottom: 2px solid var(--main-color-light);
// }

// .container h3 {
//   margin-bottom: 10px;
// }

// .container p {
//   margin-bottom: 35px;
// }

// @media only screen and (min-width: 750px) {
//   .container {
//     padding: 40px 30px 20px;
//     margin-bottom: 64px;
//   }

//   .flexcont {
//     display: flex;
//   }

//   .subcont {
//     /* margin-left: 30px; */
//   }

//   .imgCont {
//     /* width: 70%; */
//     min-width: 150px;
//     /* max-width: 200px; */
//   }

//   .container h1 {
//     font-size: 1.5rem;
//   }

//   .container h3 {
//     font-size: 1.1rem;
//   }
// }

// // @media only screen and (min-width: 1280px) {
// //   .postsContainer {
// //     display: grid;
// //     grid-template-columns: 1fr 1fr;
// //     grid-gap: 40px 16px;
// //   }
// // }
}

</style>