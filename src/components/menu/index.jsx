import React, { useState } from 'react';

function Menu({ setPlay, willPlay }) {
    const [name, handleName] = useState(0);

    const handlePlay = {
        startPlay: () => {
            setPlay(true);
        }
    }

    function handleNaming() {
        let name = document.getElementById('player-name');

        handleName(name);
    }

    return (
        <section className="menu">
            <div className="menu__upper">
                <span className="upnid"></span>
                <p>Apresenta:</p>
            </div>

            <div className="menu__title">
                <h1>Up<span>Challenge</span>!</h1>
            </div>
            
            <form className="menu__name" onSubmit={handleNaming}>
                <label htmlFor="name">
                    <h2>Name</h2>
                    <input id="player-name" type="text" minLength="4" maxLength="4" pattern="[A-Za-z0-9]" />
                </label>

                <button className="start" onClick={handlePlay.startPlay}>Press Start</button>
            </form>
        </section>
    )
}

export default Menu;
