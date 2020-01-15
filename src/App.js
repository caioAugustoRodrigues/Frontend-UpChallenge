import React, { useState } from 'react';

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
  }

  function handleLane(posicao) {
    if (isPlaying) {
      switch(posicao) {
        case 0:
          return "carro__l";
        case 1:
          return "carro";
        case 2:
          return "carro__r";
        case 3:
            setPlaying(false);
        case -1:
          setPlaying(false);
      }
    } else {
      switch(posicao) {
        case 3:
          return 'explosion__r';
        case -1:
          return 'explosion__l';
          default:
            return 'carro'
      }
    }
  }
 
//<span className={`carro__l ${isPlaying ? 'tremer' : ''}`}></span>
//<Carro laneValue={lane} isPlaying={isPlaying}/>
  return (
    <section className="game">
      <div className={`game__canvas${isPlaying ? '--play' : ''}`}>
          <div className="game__lane">
            <div id="carro"
            className={`${handleLane(lane)}
            ${isPlaying ? 'tremer' : ''}`
            }>
            </div>
          </div>
      </div>

      <div className="game__controls">
          <button href="1" className="icon" onClick={() => {
            setLane(lane--)
          }}>
              <i className="fas fa-chevron-left"></i>
          </button>

          <button href="2" className="icon" onClick={handleChange}>
            <span>
              <i id="play-pause" className="fas fa-play"></i>
            </span>
          </button>

          <button href="3" className="icon" onClick={() => {
            setLane(lane++)
          }}>
              <i className="fas fa-chevron-right"></i>
          </button>
      </div>
  </section>
  )
}