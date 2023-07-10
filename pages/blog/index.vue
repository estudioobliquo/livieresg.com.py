<template>
  <div class="blog-page">
    <h1 class="blog-title">
      {{ $t(`${T}.title`) }}
    </h1>
    <div v-if="posts" class="posts-container">
      <NuxtLink v-for="post in filteredPosts" :key="post.slug" :to="`/blog/${post.slug}`" class="post">
        <div class="blog-post">
          <p class="post-type">
            {{ post.type }}
          </p>
          <h2>{{ post.title }}</h2>
          <p class="post-date">
            {{ post.dateFormat }}
          </p>
          <p class="post-excerpt">
            {{ post.body }}
          </p>
          <div class="read-post">
            <p>Continuar leyendo</p>
            <SVGArrow />
          </div>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { toDate } from 'date-fns'
import { client } from '@/tina/__generated__/client'
import { Post } from '~/tina/__generated__/types'
import SVGArrow from '@/assets/svg/global/arrow.svg'
import useFormatSpanishDate from '~/composables/useFormatSpanishDate'
const T = 'pages.blog'

// TODO: remove
definePageMeta({ layout: 'central' })

const posts = ref<Post[]>()

const postsResponse: any = await client.queries.postConnection()

posts.value = postsResponse.data.postConnection.edges.map((post: any) => {
  const dateObj = toDate(new Date(post.node.date))
  const formattedDate = useFormatSpanishDate(dateObj, 1)

  return {
    slug: post.node._sys.filename,
    title: post.node.title,
    type: post.node.type,
    date: post.node.date,
    dateFormat: formattedDate,
    body: `${useParseTinaContentAsString(post.node.body).slice(0, 200)}...`,
  }
})

const filteredPosts = computed(() => {
  return posts.value.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
})

</script>

<style lang="scss">
.blog-page {
  .blog-title {
    margin: 0 0 40px;
    font-family: Chartre, serif;
    font-size: 1.56rem;
    font-weight: 400;
    line-height: 1.3;
    letter-spacing: .03em;
  }

  .posts-container {
    .post {
      font-family: 'Founders Grotesk', sans-serif;
      font-weight: 400;
      text-decoration: none;

      .blog-post {
        padding: 23px 23px 40px;
        margin-bottom: 40px;
        background-color: var(--secondary-color);
        transition: background-color .2s;

        &:hover {
          background-color: var(--secondary-color-hover);
        }

        .post-type {
          margin-bottom: 8px;
          font-size: 12px;
          font-weight: 500;
          color: var(--text-color);
          text-transform: uppercase;
          letter-spacing: 1px;
          opacity: .7;
        }

        h2 {
          margin: 0 0 1.45rem;
          margin-bottom: 0.187em;
          font-size: 1.25rem;
          line-height: 1.3em;
          color: var(--text-color);
          text-decoration: none;
          letter-spacing: .05em;
        }

        .post-date {
          width: fit-content;
          padding-bottom: 5px;
          color: rgb(47 47 47 / 75%);
          text-decoration: none;
          border-bottom: 1px solid var(--main-color);
        }

        .post-excerpt {
          max-width: 1000px;
          color: var(--text-color);
        }

        .read-post {
          display: flex;
          align-items: center;

          p {
            margin-bottom: 0;
            font-size: 12px;
            color: var(--main-color);
            text-decoration: none;
            text-transform: uppercase;
            letter-spacing: .03em;
          }

          svg {
            margin-bottom: 1px;
            margin-left: 5px;

            path {
              fill: var(--main-color);
            }
          }
        }
      }
    }
  }

  @media only screen and (width >=1000px) {
    .blog-title {
      display: none;
    }

    .posts-container {
      @media only screen and (width >=1000px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 40px 16px;
      }

      .post {
        .blog-post {
          display: flex;
          flex-direction: column;
          height: 100%;
          padding: 28px 40px 20px;

          .post-type {
            font-size: 15px;
          }

          h2 {
            font-size: 1.222rem;
          }

          .post-date {
            font-size: 18px;
          }

          .post-excerpt {
            font-size: 19px;
          }

          .read-post {
            align-self: flex-end;
            margin-top: auto;
            font-size: 15px;
          }
        }
      }
    }
  }
}
</style>
