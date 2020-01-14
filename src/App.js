import React, { useState } from 'react';


export default function App() {
  const [isPlaying, setGameState] = useState(false);

  function handleGameState(isPlaying) {
    if (isPlaying) {
      setGameState(useState(true))
    } else {
      setGameState(useState(false))
    }
  }

  return (
    <section className="game">
      <div className="game__canvas">
          <div className="game__lane">
              <div className="game__lane--1"></div>
              <div className="game__lane--2">
                  <div className="carro" id="carro">
                  </div>
              </div>
              <div className="game__lane--3"></div>
          </div>
      </div>

      <div className="game__controls">
          <button href="1" className="icon">
              <i className="fas fa-chevron-left"></i>
          </button>

          <button href="2" className="icon" >
            <i className={`fas ${isPlaying ? 'fa-pause' : 'fa-play' }`}
            onClick={handleGameState}
            ></i>
          </button>
          
          <button href="3" className="icon" >
              <i className="fas fa-chevron-right"></i>
          </button>
      </div>
  </section>
  )
}