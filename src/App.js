import * as React from 'react';
import Game from './components/game';
import Menu from './components/menu';

export default function App() {
  const [willPlay, setPlay] = React.useState(false);

  function returnGame() {
    return (
      <>
      <Game willPlay={willPlay}/> 
      </>
    )
  }
  
  function returnMenu() {
    return (
      <Menu setPlay={setPlay} willPlay={willPlay}  />
    )
  }

  function HandleContent() {
    if (!willPlay) {
     return returnMenu();
    } else {
      return returnGame()
    }
  }

  function getKey(event) {
    console.log(event.key)
  }
  

  return (
    <HandleContent onkeydown={getKey} />
  )
}