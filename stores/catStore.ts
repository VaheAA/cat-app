import { defineStore } from 'pinia'
import type { ICat } from '#shared/types'
import { LIMIT } from '#shared/constants'

export const useCatStore = defineStore('cat', () => {
  const cats = ref<ICat[] | null>([])
  const currentCat = ref<ICat | null>(null)
  const relatedCats = ref<ICat[] | null>([])
  const page = ref(1)
  const limit = ref(LIMIT)
  const totalCount = ref(0)
  const isLoading = ref(false)
  const requestStatus = ref('')

  const fetchCats = async () => {
    const config = useRuntimeConfig()
    const { data, status } = await useFetch<ICat[]>(`${config.public.baseApiUrl}/images/search`, {
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
        isLoading.value = false
      },
    })

    cats.value = data.value
    requestStatus.value = status.value
  }

  const fetchCatDetails = async (id: string) => {
    const config = useRuntimeConfig()
    const { data, status } = await useFetch<ICat>(`${config.public.baseApiUrl}/images/${id}`, {
      headers: {
        'x-api-key': config.public.apiKey,
      },
    })

    currentCat.value = data.value
    requestStatus.value = status.value
  }

  const fetchRelatedCats = async (breedId: string | undefined) => {
    if (!breedId) return
    const config = useRuntimeConfig()

    const { data } = await useFetch<ICat[]>(`${config.public.baseApiUrl}/images/search`, {
      headers: {
        'x-api-key': config.public.apiKey,
      },
      params: {
        limit: 3,
        breed_id: breedId,
      },
    })

    relatedCats.value = data.value || []
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
    fetchCatDetails,
    fetchRelatedCats,
    cats,
    currentCat,
    relatedCats,
    isLoading,
    limit,
    page,
    totalCount,
    requestStatus,
  }
})
