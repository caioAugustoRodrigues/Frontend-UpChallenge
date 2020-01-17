import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

export default function HudUpper({ isPlaying, setPlaying, handleChange }) {
  const [countDown, setCoundDown] = useState(30); 
  const [isCounting, setIsCounting] = useState(false);
  const [secondsLeft, setSeconds] = useState(0);

  function handleTimer() {
    if (!isCounting && !isPlaying) {
      setTimeout(() => {
        setCoundDown(3);
        setIsCounting(true)
  
        setTimeout(() => {
          setCoundDown(2);

          setTimeout(() => {
            setCoundDown(1);

            setTimeout(() => {
              setPlaying(true);
              handleChange();
              setIsCounting(false);
              setCoundDown(30);
              handleSeconds();
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000)
    } 
  }

  let time = 50;
  function timerTest() {
    setTimeout(() => {
      console.log('times up pall')
    }, time);
  }

  function handleSeconds() {
    while (countDown > 0) {
      setCoundDown(countDown--);
      console.log(time)
    }
    console.log(countDown)
  }

  function hideBtnGo() {
    if (isPlaying || isCounting) {
      return '-hide'
    } 
    return ''
  }

  return (
    <>
    <h1 className="hud__time-left">{countDown}</h1>
    <button className={`go${hideBtnGo()}`} onClick={handleTimer}>Go</button>
    </>
  )
}