import React, { useState } from 'react';
import Carro from '../carro'
import HudUpper from '../hud';

export default function Game() {
  const [isPlaying, setPlaying] = useState(false);
  const [lane, setLane] = useState(1);

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

  function handleChange() {
    const btnPlay = document.getElementById('play-pause');
    if (isPlaying) {
      btnPlay.classList.add('fa-play');
      btnPlay.classList.remove('fa-pause')
      setPlaying(!isPlaying);
    } else if (!isPlaying) {
      btnPlay.classList.add('fa-pause');
      btnPlay.classList.remove('fa-play');
      setPlaying(!isPlaying);
    }
  }
  
  function handleBtnCrash() {
    const btnPlay = document.getElementById('play-pause');
    if (isPlaying) {
      btnPlay.classList.remove('fa-play');
      btnPlay.classList.add('fa-pause');
      handleChange();
    }
    return
  }

  function resetGame() {
    window.setTimeout(() => {
      setLane(1);
      setPlaying(false);
      handleBtnCrash();
    }, 3000)
  }

  let newLane = lane;

  const lanes = {
    laneLeft: function() {
      if (isPlaying) {
        newLane = newLane - 1;
        setLane(newLane);
      }
    },
    laneRight: function() {
      if (isPlaying) {
        newLane = newLane + 1;
        setLane(newLane);
      }
    }
  }
 
//<span className={`carro__l ${isPlaying ? 'tremer' : ''}`}></span>
//<Carro laneValue={lane} isPlaying={isPlaying}/>


//setas pra esquerda e direita não tem efeito quando função é passada via onclick, talvez funcione em função separada??? já tentei com objeto

  return (
    <section className="game">
      <div className={`game__canvas${isPlaying ? '--play' : ''}`}>
          <div className="hud">
            <HudUpper 
            isPlaying={isPlaying}
            setPlaying={setPlaying}
            handleChange={handleBtnCrash}
            />
          </div>
          <div className="game__lane">
            <Carro 
              lane={lane}
              handleLane={handleLane}
              isPlaying={isPlaying}
            />
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