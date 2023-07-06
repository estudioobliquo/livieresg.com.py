<template>
  <div class="post-page">
    <div v-if="post">
      <h1>{{ post.title }}</h1>
      <div v-html="useParseTinaContent(post.body)" />
      <!-- {{ post }} -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { client } from '@/tina/__generated__/client'
import { Post } from '~/tina/__generated__/types'

// TODO: remove
definePageMeta({ layout: 'central' })

const postSlug = useRoute().params.postSlug as string

const post = ref<Post>()

const postAnswer: any = await client.queries.post({ relativePath: `${postSlug}.md` })

post.value = postAnswer.data.post
</script>

<style scoped>

</style>
