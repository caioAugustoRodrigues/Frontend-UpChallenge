import React, {  useState, useEffect } from "react";

export default function HudUpper({ isPlaying, setPlaying, handleChange, start, setStart, name }) {
    const [countDown, setCountdown] = useState(); 
    const [startCount, setStartCount] = useState();
    const userName = name;
    
    let countdown;
    let count = countDown;

    useEffect(() => {
        if (start === true) {
            handleTimer();
            setStart(false);
        }
    })

    function handleTimer() {
        if (isPlaying === false) {  
            setTimeout(() => {
                setStartCount(3);
        
                setTimeout(() => {
                    setStartCount(2);

                    setTimeout(() => {
                        setStartCount(1);

                            setTimeout(() => {
                                setStartCount(0);
                                handleChange();
                                setPlaying(true);
                                setCountdown(20);;
                                timer(20);
                            }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000)
        } 
    }

    function timer(seconds) {
        // clear any existing timers
        clearInterval(countdown);

        const now = Date.now();
        const then = now + seconds * 1000;
        let secondsRemaining = 0;

        const handlers = {
            count: () => {
                if(secondsRemaining <= 0) {
                    setPlaying(false);
                    clearInterval(countdown);
                    showMenu();
                    return;
                }
            },
            play: () => {
                if (isPlaying === false) {
                    return;
                }
            }
        }

        function showMenu() {
            setTimeout(() => {
                window.location.reload();
            }, 3000);
        }

        
        countdown = setInterval(() => {
            console.log(isPlaying);
            const secondsLeft = Math.round((then - Date.now()) / 1000);
            secondsRemaining = secondsLeft; 
            
            // check if we should stop it!
            handlers.count();
            handlers.play();
            
            // display it
            
            setCountdown(secondsLeft);
        }, 1000);
    }

    function StartCounter() {
        if (startCount > 0) {
            return startCount
        } 
        else {
            return ''
        }
    }

    function Name(userName) {
        return (
            {userName}
        )
    }

    return (
        <>
            <div className="hud">
                <h1 className={`hud__start ${startCount < 0 ? 'hidden' : ''}`}>
                    <StartCounter />
                </h1>

                <h1 className={`hud__count ${startCount > 0 ? 'hidden' : ''}`}>
                    {count}
                </h1>

                <h1 className="hud__name">
                    {userName}
                </h1>
            </div>
        </>
    )
}