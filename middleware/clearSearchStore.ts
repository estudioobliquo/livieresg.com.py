import { useSearchStore } from '@/store/searchStore'

export default defineNuxtRouteMiddleware(() => {
  useSearchStore().resetStore()
})
