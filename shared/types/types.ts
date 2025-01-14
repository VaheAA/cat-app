interface ICat {
  id: string
  url: string
  breeds: Array<{
    name: string
    weight: { metric: string }
    child_friendly: number
  }>
}

export type { ICat }
