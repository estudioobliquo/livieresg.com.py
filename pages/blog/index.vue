<template>
  <div class="blog-page">
    <h2 v-if="!filteredPosts.length" class="result-text">
      No se han encontrado resultados con el término <span>"{{ text }}"</span>
    </h2>
    <h1 v-if="filteredPosts.length" class="blog-title">
      {{ $t(`${T}.title`) }}
    </h1>
    <div v-if="posts" class="posts-container">
      <NuxtLink v-for="post in filteredPosts" :key="post.slug" :to="`/blog/${post.slug}`" class="post">
        <AtomPost :post="post" />
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { seoData } from 'assets/seoData'
import { Post } from '@/tina/__generated__/types'
import { ExtendedPost, usePostsStore } from '@/store/posts'
const { text, checkedFilter } = useSearch()

definePageMeta({
  middleware: 'clear-search-store',
})

const T = 'pages.blog'
const { locale } = useI18n()

useHead(seoData['/blog'][locale.value])

const posts = computed<ExtendedPost[]>(() => usePostsStore().posts)

const filteredPosts = computed(() => {
  if (!posts.value) {
    return []
  }

  let filteredItems: Post[] = []

  if (text.value) {
    const filteredByText = posts.value.filter((item) => {
      return item.title.toLowerCase().includes(text.value.toLowerCase())
    })

    filteredItems.push(...filteredByText)
  }
  else {
    filteredItems.push(...posts.value)
  }

  if (checkedFilter.value.length > 0) {
    const filteredByCategory = filteredItems.filter((item) => {
      const itemType = item.type.toLowerCase()

      return checkedFilter.value.map(value => value.toLowerCase()).includes(itemType)
    })

    filteredItems = filteredByCategory
  }

  return filteredItems.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
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
      }
    }

  @media only screen and (width >=1000px) {
    .result-text {
      max-width: 560px;
      font-family: "Founders Grotesk", sans-serif;
      font-size: 1.3rem;
      font-weight: 300;
      color: rgb(47 47 47);

      span {
        font-weight: normal;
      }
    }

    .blog-title {
      display: none;
    }

    .posts-container {
      @media only screen and (width >=1000px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 40px 16px;
      }
    }
  }
}
</style>
