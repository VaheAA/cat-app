interface ICat {
  id: string
  url: string
  breeds: Array<{
    id: string
    name: string
    weight: { metric: string }
    child_friendly: number
    description: string
  }>
}

export type { ICat }
