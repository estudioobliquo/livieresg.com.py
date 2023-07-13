import { defineStore } from 'pinia'
import { Post } from 'tina/__generated__/types'

// extend the Post type to add a new field
export type ExtendedPost = Post & { slug: string, excerpt: string, dateFormat: string }

interface PostsState {
  posts: ExtendedPost[] | [],
}

export const usePostsStore = defineStore('posts', {
  state: (): PostsState => ({
    posts: [],
  }),
  actions: {
    setPosts (posts: ExtendedPost[]) {
      this.posts = posts
    },
  },
})
