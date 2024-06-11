import { Agent } from 'http'
import { AgentID } from './backend.mjs'
import { allMaisonsAgents } from './backend.mjs'
import { allMaisonsByAgentId } from './backend.mjs'
import { allMaisonsByAgentName } from './backend.mjs'
import { allMaisonsSortedAgent } from './backend.mjs'
import { bySurfaceAgent } from './backend.mjs'
import { maisonFavoriAgent } from './backend.mjs'
import { DeleteMaisonById } from './backend.mjs'
import { addNewAgent } from './backend.mjs'
import { addNewMaison } from './backend.mjs'
import { DeleteAgentById } from './backend.mjs'

//TP4 Angelo Bosetti MMI 1 - C1

// try {
//     const AgentIDrecord = await AgentID('qklly85fbgjsi93') ;
//     console.log(JSON.stringify(AgentIDrecord, null, 2)) ;
//     } catch (e) {
//     console.error(e) ;
//     }

// try {
//     const records = await allMaisonsAgents() ;
//     console.log(JSON.stringify(records, null, 2)) ;
//     } catch (e) {
//     console.error(e) ;
//     }

// try {
//     const records = await allMaisonsByAgentId('kzwgsevuht48tci') ;
//     console.log(JSON.stringify(records, null, 2)) ;
//     } catch (e) {
//     console.error(e) ;
//     }

// try {
//     const records = await allMaisonsByAgentName('agent3') ;
//     console.log(JSON.stringify(records, null, 2)) ;
//     } catch (e) {
//     console.error(e) ;
//     }

// try {
//     const records = await allMaisonsSortedAgent() ;
//     console.log(JSON.stringify(records, null, 2)) ;
//     } catch (e) {
//     console.error(e) ;
//     }

// try {
//     const records = await bySurfaceAgent('kzwgsevuht48tci', 200) ;
//     console.log(JSON.stringify(records, null, 2)) ;
//     } catch (e) {
//     console.error(e) ;
//     }

// try {
//     const records = await maisonFavoriAgent('kzwgsevuht48tci') ;
//     console.log(JSON.stringify(records, null, 2)) ;
//     } catch (e) {
//     console.error(e) ;
// }


//TP5 Angelo Bosetti MMI 1 - C1
try {

const newMaison = {
    "nomMaison": "MaisonMMI",
    "prix": 100000,
    nbChambres: 3,
    nbSdb: 2,
    "adresse": "1 rue de la paix",
    "surface": 100,
    "favori": false,
    "agent": "qklly85fbgjsi93" 
};  
    await addNewMaison(newMaison);
} catch (e) {
    console.error(e);
}

try {


const newAgent = {
    "nom": "des-champs",
    "prenom": "didier",
    "email": "test.1@gmail.com",

       
};  
    await addNewAgent(newAgent);
} catch (e) {
    console.error(e);
}
 


try {
    await DeleteMaisonById('agplytzljkl5e61')
} catch (e) {
    console.error(e);
}


try {
  await DeleteAgentById('qklly85fbgjsi93')
} catch (e) {
  console.error(e)
}



try {
     const records = await allMaisonsSortedAgent() ;
     console.log(JSON.stringify(records, null, 2)) ;
     } catch (e) {
     console.error(e) ;
     }





try {
    const records = await bySurfaceAgent('kzwgsevuht48tci', 200) ;
    console.log(JSON.stringify(records, null, 2)) ;
    } catch (e) {
 console.error(e) ;
    }

try {
     const records = await maisonFavoriAgent('kzwgsevuht48tci') ;
     console.log(JSON.stringify(records, null, 2)) ;
     } catch (e) {
     console.error(e) ;
 }    

