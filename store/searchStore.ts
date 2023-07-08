import { defineStore } from 'pinia'

interface SearchState {
    text: string
}

export const useSearchStore = defineStore('search', {
  state: (): SearchState => ({
    text: '',
  }),
  actions: {
    setSearchText (text: string) {
      this.text = text
    },
    resetState () {
      this.text = ''
    },
  },
})
