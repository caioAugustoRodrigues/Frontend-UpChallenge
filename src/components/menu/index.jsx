import React from 'react';

function Menu({ setPlay, willPlay }) {

    const handlePlay = {
        startPlay: () => {
            setPlay(true);
        }
    }

    return (
        <section className="menu">
            <div className="menu__upper">
                <span className="upnid"></span>
                <p>Apresenta:</p>
            </div>

            <div className={`menu__title ${willPlay ? '' : 'title-active'}`}>
                <h1>Up<span>Challenge</span>!</h1>
            </div>
            
            <button className={`start ${willPlay ? '' : 'start-active'}`} onClick={handlePlay.startPlay}>Press Start</button>
        </section>
    )
}

export default Menu;
