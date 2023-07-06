<template>
  <div>
    <h1>Blog</h1>
    <div v-if="posts" class="posts-container">
      <div v-for="post in posts" :key="post.slug" class="post">
        <h2>{{ post.title }}</h2>
        <p>{{ post.date }}</p>
        <div v-html="post.body" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { TinaMarkdownContent } from 'tinacms/dist/rich-text'
import { client } from '@/tina/__generated__/client'

interface Post {
  slug: string
  title: string
  type: string
  date: string
  body: TinaMarkdownContent
}

definePageMeta({ layout: 'central' })

const posts = ref<Post[]>()

const postsResponse: any = await client.queries.postConnection()

posts.value = postsResponse.data.postConnection.edges.map((post: any) => {
  return {
    slug: post.node._sys.filename,
    title: post.node.title,
    type: post.node.type,
    date: post.node.date,
    body: `${useParseTinaContent(post.node.body).slice(0, 200)}...`,
  }
})

</script>
