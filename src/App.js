import * as React from 'react';
import Game from './components/game';
import Menu from './components/menu';

export default function App() {
  let willPlay = Menu.willPlay;
  const [isPlaying, setPlaying] = React.useState(willPlay);

  function handleContent() {
    if (willPlay) {

      <Game 
        willPlay={Menu.willPlay} 
        isPlaying={isPlaying} 
        ref={isPlaying}
      /> 
    } else {
      <Menu isPlaying={Game.isPlaying} ref={willPlay}/>}
    }
  }

  return (
    <> 
    {handleContent}
    </>
  )
}