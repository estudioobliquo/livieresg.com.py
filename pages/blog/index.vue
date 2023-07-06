<template>
  <div class="blog-page">
    <h1>Blog</h1>
    <div v-if="posts" class="posts-container">
      <NuxtLink v-for="post in posts" :key="post. slug" :to="`/blog/${post.slug}`" class="post">
        <h2>{{ post.title }}</h2>
        <p class="date">
          {{ post.date }}
        </p>
        <p class="excerpt">
          {{ post.body }}
        </p>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { client } from '@/tina/__generated__/client'
import { Post } from '~/tina/__generated__/types'

// TODO: remove
definePageMeta({ layout: 'central' })

const posts = ref<Post[]>()

const postsResponse: any = await client.queries.postConnection()

posts.value = postsResponse.data.postConnection.edges.map((post: any) => {
  return {
    slug: post.node._sys.filename,
    title: post.node.title,
    type: post.node.type,
    date: post.node.date,
    body: `${useParseTinaContentAsString(post.node.body).slice(0, 200)}...`,
  }
})

</script>
