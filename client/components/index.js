/**
 * `components/index.js` exists simply as a 'central export' for our components.
 * This way, we can import all of our components from the same place, rather than
 * having to figure out which file they belong to!
 */

export {default as Home} from './navbar/Home'
export {default as Navbar} from './navbar/Navbar'
export {default as Instructions} from './navbar/Instructions'
 
export {default as ChooseCharacter} from '../components/beforeGameScreen/ChooseCharacter'
export {default as HostLobby} from '../components/beforeGameScreen/HostLobby'
export {default as PlayerLobby} from '../components/beforeGameScreen/PlayerLobby'
export {default as Rejoin} from '../components/beforeGameScreen/Rejoin'
 
export {default as CurrentGame} from '../components/game/CurrentGame'
