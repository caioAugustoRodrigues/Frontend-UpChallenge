import React, {  useState } from "react";

export default function HudUpper({ isPlaying, setPlaying, handleChange }) {
  const [countDown, setCoundDown] = useState(30); 
  const [isCounting, setIsCounting] = useState(false);

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
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000)
    } 
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