<template>
  <div class="slug-container">
    <AtomVolver-Atras text="atom.goBack" to="/miembros" />
    <div v-if="miembro" class="container">
      <div class="flexcont">
        <div class="imgCont">
          <nuxt-img :src="`/img/miembros/${miembro.foto}`" loading="lazy" format="webp" />
        </div>
        <div class="subcont">
          <!-- Name -->
          <h1>{{ miembro.nombre }}</h1>
          <!-- Subtitle -->
          <h2>{{ $t(`${T}.subtitle`) }}</h2>
          <!-- Email -->
          <a :href="`mailto:${miembro.mail}`" target="_blank" rel="noopener noreferrer">
            {{ miembro.mail }}
          </a>
          <!-- Areas (adp) -->
          <h3>{{ $t(`staff.slug.areas`) }}</h3>
          <p>{{ $t(`${T}.adp`) }}</p>
          <!-- Formación profesional-->
          <h3>{{ $t(`staff.slug.education`) }} </h3>
          <p>{{ $t(`${T}.formacion`) }}</p>
          <!-- Experience -->
          <div v-if="$t(`${T}.experiencia`) != `${T}.experiencia` && $t(`${T}.experiencia`) != ''">
            <h3>{{ $t(`staff.slug.experiencia`) }} </h3>
            <p>{{ $t(`${T}.experiencia`) }}</p>
          </div>
          <!-- Idiomas -->
          <h3>{{ $t(`staff.slug.languages`) }} </h3>
          <p>{{ $t(`${T}.idiomas`) }}</p>
          <!-- Asociaciones -->
          <div v-if="$t(`${T}.asociaciones`) != `${T}.asociaciones` && $t(`${T}.asociaciones`) != ''">
            <h3>{{ $t(`staff.slug.members`) }} </h3>
            <p>{{ $t(`${T}.asociaciones`) }}</p>
          </div>
        </div>
      </div>
    </div>
    <h3 v-if="posts?.length">
      Publicaciones
    </h3>
    <div v-if="posts?.length" class="posts-container">
      <NuxtLink v-for="post in posts" :key="post.slug" :to="`/blog/${post.slug}`" class="post">
        <AtomPost :post="post" />
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { toDate } from 'date-fns'
import { client } from '@/tina/__generated__/client'
import { Post } from '~/tina/__generated__/types'
import { abogados, partners } from '@/assets/dataMiembros.js'

const router = useRouter()
const slug = router.currentRoute.value.params.slug
const datosAbogados = abogados
const datosPartners = partners
const miembros = [ ...datosAbogados, ...datosPartners ]
const T = `pages.team.${slug}`

const getMiembro = (slug) => {
  return miembros.find(miembro => miembro.slug === slug) || null
}

const miembro = getMiembro(slug)

const posts = ref<Post[]>()

const postsResponse: any = await client.queries.postConnection()

posts.value = postsResponse.data.postConnection.edges
  .map((post: any) => {
    const dateObj = toDate(new Date(post.node.date))
    const formattedDate = useFormatSpanishDate(dateObj, 1)

    return {
      slug: post.node._sys.filename,
      title: post.node.title,
      type: post.node.type,
      author: post.node.author,
      date: post.node.date,
      dateFormat: formattedDate,
      body: `${useParseTinaContentAsString(post.node.body).slice(0, 200)}...`,
    }
  })
  .filter((post: any) => post.author === miembro.nombre)
</script>

<style lang="scss">
.slug-container {
  .container {
    padding: 40px 30px 20px;
    margin-bottom: 40px;
    background-color: var(--secondary-color);

    @media only screen and (width <=768px) {
      padding: 8%;
    }

    .flexcont {
      display: flex;

      @media only screen and (width <=768px) {
        display: grid;
      }

      .imgCont {
        width: max-content;
        height: max-content;
        margin-bottom: 20px;

        @media only screen and (width <=768px) {
          width: 100%;
        }
      }

      h1 {
        margin-bottom: 10px;
      }

      h2 {
        margin-bottom: 25px;
        font-family: "Founders Grotesk", sans-serif;
        font-size: 1.2rem;
        font-style: normal;
        font-weight: 300;
        letter-spacing: 0;
      }

      a {
        display: block;
        width: fit-content;
        margin-bottom: 35px;
        color: var(--main-color);

        &::after {
          display: block;
          width: 150%;
          padding-top: 10px;
          content: "";
          border-bottom: 2px solid var(--main-color-light);
        }

        &:hover {
          color: #797979;
          transition: color .2s;
        }

      }

      h3 {
        margin-bottom: 10px;
      }

      p {
        margin-bottom: 35px;
      }

    }

  }

  .posts-container {
    a {
      text-decoration: none;
    }
  }

  @media only screen and (width >=750px) {
    & {
      .container {
        padding: 40px 30px 20px;
        margin-bottom: 64px;

        .flexcont {
          .imgCont {
            width: 70%;
            min-width: 150px;
            max-width: 200px;
          }

          .subcont {
            margin-left: 30px;

            h1 {
              font-size: 1.5rem;
            }

            h3 {
              font-size: 1.1rem;
            }
          }
        }
      }

      .posts-container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 40px 16px;
      }
    }
  }
}
</style>
