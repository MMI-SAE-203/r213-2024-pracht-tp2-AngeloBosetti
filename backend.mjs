import PocketBase from 'pocketbase';
const pb = new PocketBase('http://127.0.0.1:8090');

// TP 5 Angelo Bosetti MMI 1 - C1


export async function addNewMaison(newMaison){
  await pb.collection('maisons').create(newMaison)
  return newMaison
}

export async function addNewAgent(newAgent) {
  await pb.collection('agent').create(newAgent)
  return newAgent
}

export async function DeleteMaisonById(id) {
  await pb.collection('maisons').delete(id)

}

export async function DeleteAgentById(id) {
  await pb.collection('agent').delete(id)
}

export async function allMaisonsSortedAgent() {
  const sortedRecordsAgences = await pb.collection('maisons').getFullList({
    expand: 'agence',
    sort: 'agence.nom'
  })
  return sortedRecordsAgences
}


export async function bySurfaceAgent(id, surface) {
  const Surfacerecord = await pb.collection('maisons').getFullList({
    expand: 'agence',
    filter: `agence = '${id}' && surface > ${surface}`
  })
  return Surfacerecord
}


export async function maisonFavoriAgent(id) {
  const Favorirecord = await pb.collection('maisons').getFullList({
    expand: 'agence',
    filter: `agence = '${id}' && favoris = true`
  })
  return Favorirecord
}












try { const records = await pb.collection('maison').getFullList();
console.table(records)
} catch (e) {
  console.error(e);
}



await pb.collection('maison').getOne();


//TP4 Angelo Bosetti MMI 1 - C1

// Q6
export async function AgentID(id) {
  const AgentIDrecord = await pb.collection('agence').getOne(id)
  return AgentIDrecord
}

// Q7
export async function allMaisonsAgents() {
  const records = await pb.collection('maisons').getFullList({
    expand: 'agence'
  })
  return records
}

// Q8
export async function allMaisonsByAgentId(id) {
  const sortedRecordsAgences = await pb.collection('maisons').getFullList({
    expand: 'agence',
    filter: `agence = '${id}'`
  })
  return sortedRecordsAgences
}

// Q9
export async function allMaisonsByAgentName(nom) {
  const sortedRecordsAgences = await pb.collection('maisons').getFullList({
    expand: 'agence',
    filter: `agence.nom = '${nom}'`
  })
  return sortedRecordsAgences
}

// Q10
/*
export async function allMaisonsSortedAgent() {
  const sortedRecordsAgences = await pb.collection('maisons').getFullList({
    expand: 'agence',
    sort: 'agence.nom'
  })
  return sortedRecordsAgences
} */
/*
export async function bySurfaceAgent(id, surface) {
  const Surfacerecord = await pb.collection('maisons').getFullList({
    expand: 'agence',
    filter: `agence = '${id}' && surface > ${surface}`
  })
  return Surfacerecord
} */




