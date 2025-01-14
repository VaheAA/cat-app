import { defineStore } from 'pinia'
import type { ICat } from '#shared/types/types'

export const useCatStore = defineStore('cat', () => {
  const cats = ref<ICat[] | null>([])
  const currentCat = ref<ICat[] | null>(null)
  const page = ref(1)
  const limit = ref(10)
  const totalCount = ref(0)
  const status = ref('')

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
      },
    })

    cats.value = data.value
    status.value = status.value
  }

  return {
    cats,
    fetchCats,
    status,
  }
})
