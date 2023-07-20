<template>
  <div>
    <AtomVolverAtras to="/blog" />
    <div class="post-page">
      <template v-if="post">
        <div class="post-header">
          <h1>{{ post.title }}</h1>
          <div class="post-data">
            <div class="author-img-container">
              <nuxt-img
                :src="`/img/miembros/${foto? foto : 'miembro-placeholder.png'}`"
                width="80px"
                height="80px"
                :alt="post.author || 'autor img'"
                format="webp"
                loading="lazy"
              />
            </div>
            <div class="author-data">
              <p class="date">
                {{ date }}
              </p>
              <p><span>Autor: </span>{{ post.author || 'Estudio Livieres Guggiari' }}</p>
              <a
                :href=" `mailto:${post.author_email || 'info@livieresg.com.py'}` "
              >{{ post.author_email || 'info@livieresg.com.py' }}</a>
            </div>
          </div>
        </div>
        <div class="post-content">
          <div v-html="post.body " />
        </div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { toDate } from 'date-fns'
import { abogados, administracion, paralegales, partners } from '@/assets/dataMiembros'
import { usePostsStore, ExtendedPost } from '@/store/posts'

const postSlug = useRoute().params.postSlug as string

const post = computed<ExtendedPost | undefined>(() => usePostsStore().posts.find(post => post.slug === postSlug))
const date = ref<string>()
const foto = ref<string>()

if (post.value) {
  const dateObj = toDate(new Date(post.value.date))

  date.value = useFormatSpanishDate(dateObj, 2)

  const miembros = [ ...abogados, ...administracion, ...paralegales, ...partners ]

  foto.value = miembros.find(miembro => miembro.nombre === post.value?.author)?.foto
}

useHead({
  title: `${post.value?.title} | Livieres Guggiari`,
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: post.value?.excerpt,
    },
  ],
})
</script>

<style lang="scss">
.post-page {
  .post-header {
    margin-bottom: 40px;
    text-align: center;

    h1 {
      margin-top: 0.72em;
      margin-bottom: 1.3em;
    }

    .post-data {
      display: flex;
      align-items: flex-start;
      justify-content: center;
      margin-bottom: 16px;
      text-align: left;

      .author-img-container {
        width: 80px;
        height: 80px;
        overflow: hidden;
        border-radius: 50%;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center center;
        }
      }

      .author-data {
        p {
          margin: 0 0 0 16px;
          font-family: 'Founders Grotesk', sans-serif;
          font-size: 1.2rem;
          font-weight: 400;

          span {
            font-weight: 490;
            opacity: .85;
          }
        }

        .date {
          margin: 0 0 0 16px;
          font-size: 18px;
          font-weight: 400;
          color: rgb(47 47 47 / 75%);
          letter-spacing: .02em;
        }

        a {
          display: block;
          margin: 0 0 0 16px;
          margin-top: -3px;
          margin-bottom: 16px;
          font-size: 18px;
          font-weight: 400;
          color: var(--main-color);
          opacity: .8;

          &:hover {
            color: #797979;
            transition: color .2s;
          }
        }
      }
    }
  }

  @media only screen and (min-width:1000px) {
    .post-content {
      padding-left: 33px;
      border-left: 1px solid #919191;
    }
  }
}
</style>
