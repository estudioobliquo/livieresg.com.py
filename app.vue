<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script lang="ts" setup>
import './node_modules/sal.js/dist/sal.css'
import { toDate } from 'date-fns'
import { storeToRefs } from 'pinia'
import { client } from '@/tina/__generated__/client'
import { ExtendedPost, usePostsStore } from '@/store/posts'

// initial fetch of posts
const postsStore = usePostsStore()
const { posts } = storeToRefs(postsStore)

if (!posts.value.length) {
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
      author: post.node.author,
      author_email: post.node.author_email,
      excerpt: `${useParseTinaContentAsString(post.node.body).slice(0, 200)}...`,
      body: useParseTinaContent(post.node.body),
    }
  })

  postsStore.setPosts(posts.value as ExtendedPost[])
}

</script>

<style>
.opacity-enter-active,
.opacity-leave-active {
  transition: opacity 0.4s ease-in-out;
}

.opacity-enter,
.opacity-leave-to {
  opacity: 0;
}
</style>
