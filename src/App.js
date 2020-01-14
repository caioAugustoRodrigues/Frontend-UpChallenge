import React, { useState, useEffect } from 'react';


export default function App() {
  const [isPlaying, setPlaying] = useState(false);

  function handleChange() {
    setPlaying(!isPlaying);
    console.log(isPlaying);
  }

  const play = 'fa-play';
  const pause = 'fa-pause';

  return (
    <section className="game">
      <div className={`game__canvas${isPlaying ? '--play' : ''}`}>
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

          <button href="2" className="icon" onClick={handleChange}>
            <i className={`fas ${isPlaying ? pause : play}`}></i>
          </button>

          <button href="3" className="icon" >
              <i className="fas fa-chevron-right"></i>
          </button>
      </div>
  </section>
  )
}