import { storeToRefs } from 'pinia'
import { useSearchStore } from '~/store/searchStore'
import { abogados, administracion, paralegales, partners } from '~/assets/dataMiembros'

interface Item {
  nombre: string
  mail: string
  foto: string
  slug: string
}

export const useSearch = () => {
  const searchStore = useSearchStore()
  const { text } = storeToRefs(searchStore)

  const handleInput = () => {
    searchStore.setSearchText(text.value)
  }

  const resetInput = () => {
    searchStore.resetState()
  }

  const filterBySearchTerm = (items: Item[]) => {
    if (text.value) {
      return items.filter((item) => {
        return item.nombre.toLowerCase().includes(text.value.toLowerCase())
      })
    }
    else {
      return items
    }
  }

  const filteredDatosPartners = computed(() => filterBySearchTerm(partners))
  const filteredDatosAbogados = computed(() => filterBySearchTerm(abogados))
  const filteredDatosParalegales = computed(() => filterBySearchTerm(paralegales))
  const filteredDatosAdmin = computed(() => filterBySearchTerm(administracion))

  return {
    // Properties
    text,

    // Computed
    filteredDatosAdmin,
    filteredDatosAbogados,
    filteredDatosParalegales,
    filteredDatosPartners,

    // Methods
    handleInput,
    resetInput,
  }
}
