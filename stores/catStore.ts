import { defineStore } from 'pinia'
import type { ICat } from '#shared/types/types'

export const useCatStore = defineStore('cat', () => {
  const cats = ref<ICat[] | null>([])
  const currentCat = ref<ICat[] | null>(null)
  const page = ref(1)
  const limit = ref(12)
  const totalCount = ref(0)
  const isLoading = ref(false)

  const fetchCats = async () => {
    isLoading.value = true
    const config = useRuntimeConfig()
    const { data } = await useFetch<ICat[]>(`${config.public.baseApiUrl}/images/search`, {
      headers: {
        'x-api-key': config.public.apiKey,
      } as any,
      params: {
        limit: limit.value,
        page: page.value,
        order: 'DESC',
        has_breeds: true,
      },
      onResponse({ response }) {
        const total = response.headers.get('pagination-count')
        if (total) {
          totalCount.value = parseInt(total, 10)
        }
      },
    })
    cats.value = data.value
    isLoading.value = false
  }

  const nextPage = async () => {
    if (page.value * limit.value < totalCount.value) {
      page.value += 1
      await fetchCats()
    }
  }

  const previousPage = async () => {
    if (page.value > 1) {
      page.value -= 1
      await fetchCats()
    }
  }

  return {
    fetchCats,
    nextPage,
    previousPage,
    cats,
    isLoading,
    limit,
    page,
    totalCount,
  }
})
