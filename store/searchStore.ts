import { defineStore } from 'pinia'

interface SearchState {
  text: string,
  checkedFilter: string[];
}

export const useSearchStore = defineStore('search', {
  state: (): SearchState => ({
    text: '',
    checkedFilter: [],
  }),
  actions: {
    setSearchText (text: string) {
      this.text = text
    },
    resetState () {
      this.text = ''
    },
    setCheckedFilter (checkedItems: string[]) {
      this.checkedFilter = checkedItems
    },
    resetStore () {
      this.text = ''
      this.checkedFilter = []
    },
  },
})
