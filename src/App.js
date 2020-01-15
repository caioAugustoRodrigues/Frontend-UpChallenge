import React, { useState } from 'react';
import Carro from './components/carro';

export default function App() {
  const [isPlaying, setPlaying] = useState(false);
  let [lane, setLane] = useState(1);

  function handleChange() {
    const btnPlay = document.getElementById('play-pause');

    if (isPlaying) {
      btnPlay.classList.add('fa-play');
      btnPlay.classList.remove('fa-pause')
    } else {
      btnPlay.classList.add('fa-pause');
      btnPlay.classList.remove('fa-play')
    }

    setPlaying(!isPlaying);
    console.log(isPlaying);
  }

 
//<span className={`carro__l ${isPlaying ? 'tremer' : ''}`}></span>
  return (
    <section className="game">
      <div className={`game__canvas${isPlaying ? '--play' : ''}`}>
          <div className="game__lane">
              <Carro laneValue={lane} isPlaying={isPlaying}/>
          </div>
      </div>

      <div className="game__controls">
          <button href="1" className="icon" onClick={() => setLane(lane--)}>
              <i className="fas fa-chevron-left"></i>
          </button>

          <button href="2" className="icon" onClick={handleChange}>
            <span>
              <i id="play-pause" className="fas fa-play"></i>
            </span>
          </button>

          <button href="3" className="icon" onClick={() => setLane(lane++)} >
              <i className="fas fa-chevron-right"></i>
          </button>
      </div>
  </section>
  )
}