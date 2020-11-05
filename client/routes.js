import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Home, ChooseCharacter, PlayerLobby, HostLobby, Rejoin, CurrentGame  } from './components'

const Routes = () => {
  return (
    <div id="underNav">
    <Switch>
      <Route exact path='/' component={ Home }  />
      <Route exact path='/join' component={ ChooseCharacter } />
      <Route exact path='/create' component={ ChooseCharacter } />
      <Route exact path='/join/lobby' component={ PlayerLobby } />
      <Route exact path='/create/lobby' component={ HostLobby } />
      <Route exact path="/rejoin" component={ Rejoin } />
      <Route exact path="/game" component={ CurrentGame } />
    </Switch>
    </div>
  )
}

export default Routes;
