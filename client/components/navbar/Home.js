import React, { useState } from 'react'
import { Redirect, Link } from 'react-router-dom'

import logo from '../../../public/assets/codeopolyLogo.png'
import test from '../../../public/assets/winImages/happyProgrammers.gif'

const HomePage = () => {
  const [gameCode, setGameCode] = useState('');
  const [redirectUrlString, setRedirectUrlString] = useState('');
  if (redirectUrlString.length > 0) {
    console.log("redirectUrl length > 0")
    return <Link to={redirectUrlString} />
  }


  const handleChange = event => {
    setGameCode(event.target.value)
  }
  const handleJoin = () => {
    console.log('this is the game code being sent:', gameCode)
    //props.joinGame(gameCode)
    setRedirectUrlString('/join')
  }
  const handleCreate = () => {
    console.log('handleCreate ran')
    //props.createGame()
    setRedirectUrlString('/create')
  }
  const handleRejoin = () => {
    setRedirectUrlString('/rejoin')
  }

  return (
    <div className="welcome">
      <div id="title">
        <img src={logo} />
        <img src={test} />
        <h1>[Code]opoly</h1>
      </div>
      <div id="textBox">
        <div id="text">
          Learn about the JavaScript stack! [Code]opoly looks like Monopoly, but
          the win condition is totally different. Your goal is to build your
          tech stack (think buying properties), earn seed money to fund your
          startup, and reach GO to launch your company! Building your tech stack
          isn’t easy; you’ll have to demonstrate your knowledge by answering
          multiple choice questions, but beware of the miscellaneous hazards of
          startup life! Oh, and don't get stuck on any bugs!
        </div>
      </div>
      <div id="buttonArea">
        <div id="buttonBox1">
          <button type="button" onClick={handleJoin} disabled={gameCode === ''}>
            Join Game
          </button>
          <input
            type="text"
            value={gameCode}
            placeholder="game code"
            onChange={handleChange}
          />
        </div>
        <div id="buttonBox2">
          <button type="button" onClick={handleCreate}>
            Create New Game
          </button>
        </div>
        <div id="buttonBox3">
          <button type="button" onClick={handleRejoin}>
            Rejoin
          </button>
        </div>
      </div>
    </div>
  )
}

export default HomePage;
