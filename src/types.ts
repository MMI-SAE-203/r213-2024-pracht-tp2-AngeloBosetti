import type { MaisonRecord } from "./pocketbase-types"

export interface MaisonResponse {
  adresse: string
  collectionId: string
  collectionName: string
  created: string
  favori: boolean
  id: string
  image: string
  nbChambres: number
  nbSdb: number
  nomMaison: string
  prix: number
  surface: number
  updated: string
}

