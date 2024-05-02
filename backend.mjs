import PocketBase from 'pocketbase';
const pb = new PocketBase('http://127.0.0.1:8090');

try { const records = await pb.collection('events').getFullList();
console.table(records)
} catch (e) {
  console.error(e);
}

await pb.collection('events').getOne(1semnm2ct0jnajr);