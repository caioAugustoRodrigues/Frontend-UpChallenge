import React from 'react';

export default function resetGame({ setLane, handleChange, setPlaying }) {
    window.setTimeout(() => {
      setLane(1);
      handleChange();
      setPlaying(false)
    }, 3000)
}
