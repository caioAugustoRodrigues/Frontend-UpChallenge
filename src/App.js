import React, { useState, useEffect } from 'react';

export default function App() {
  const [isPlaying, setPlaying] = useState(false);
  const [lane, setLane] = useState(1);

  function handleChange() {
    const btnPlay = document.getElementById('play-pause');

    if (isPlaying) {
      btnPlay.classList.add('fa-play');
      btnPlay.classList.remove('fa-pause')
      setPlaying(false);
    } else {
      btnPlay.classList.add('fa-pause');
      btnPlay.classList.remove('fa-play');
      setPlaying(true);
    }
  }

  function resetGame() {
    window.setTimeout(() => {
      setLane(1);
      handleChange();
      setPlaying(false)
    }, 3000)
  }

  function handleLane(posicao) {
      switch(posicao) {
        case 0:
          return "carro__l";
        case 1:
          return "carro";
        case 2:
          return "carro__r";
        case 3:
          if(isPlaying) {
            setPlaying(!isPlaying);
          }
          resetGame();
          return 'explosion__r';
          case -1:
            if(isPlaying) {
              setPlaying(!isPlaying);
          }
          resetGame();
          return 'explosion__l';
        default:
            return 'carro'
      }
  }

  let newLane = lane;

  const lanes = {
    laneLeft: function() {
      if (isPlaying) {
        newLane = newLane - 1;
        setLane(newLane);
        console.log(lane)
      }
    },
    laneRight: function() {
      if (isPlaying) {
        newLane = newLane + 1;
        setLane(newLane);
        console.log(lane)
      }
    }
  }

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
          <button className="icon" onClick={lanes.laneLeft}> 
              <i className="fas fa-chevron-left"></i>
          </button>

          <button className="icon" onClick={handleChange}>
            <span>
              <i id="play-pause" className="fas fa-play"></i>
            </span>
          </button>

          <button className="icon" onClick={lanes.laneRight}>
              <i className="fas fa-chevron-right"></i>
          </button>
      </div>
  </section>
  )
}