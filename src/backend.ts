import PocketBase from 'pocketbase'
import { type TypedPocketBase } from './pocketbase-types.js'

export const pb = new PocketBase(import.meta.env.VITE_URL_POCKETBASE) as TypedPocketBase



// Copier ici les fonctions developpées en R214 | Système d'information

export async function AllMaisons() {
  const All = await pb.collection("maison").getFullList();
  return All;
}

export async function allMaisonsFavori() {
const Favorie = await pb.collection("maison").getFullList({ filter: "favori = true" });
return Favorie;
}

export async function allMaisonsSorted() {
  const sorted = await pb.collection("maison").getFullList({ sort: "+prix" });
  return sorted;                                 
}




