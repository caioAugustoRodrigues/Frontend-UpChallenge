import React, { useState } from 'react';

function Menu({ setPlay, setName }) {
    const [name, setNaming] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault();
        setName(name);
        setPlay(true);
    }

    return (
        <>
        <section className="menu">
            <div className="menu__upper">
                <span className="upnid"></span>
                <p>Apresenta:</p>
            </div>

            <div className="menu__title">
                <h1>Up<span>Challenge</span>!</h1>
            </div>
            
            <form className="menu__name" onSubmit={handleSubmit}>
                <label htmlFor="name">
                    <h2>Name</h2>
                    <input 
                        id="player-name" 
                        type="text" 
                        minLength="4" 
                        maxLength="4"
                        value={name} 
                        onChange={e => setNaming(e.target.value)}
                    />
                </label>

                <button className="start">Press Start</button>
            </form>
        </section>
        </>
    )
}

export default Menu;
