import React, { useState } from 'react';

function Menu(isPlaying) {
    const [willPlay, setPlay] = useState(false);

    function handlePlay() {
        setPlay(!willPlay);
        console.log(willPlay)
    }

    return (
        <section className="menu">
            <div className="menu__title">
                <h1>Up<span>Challenge</span>!</h1>
            </div>
            <button id="menu" onClick={handlePlay}>Go!</button>
        </section>
    )
}

export default Menu;
