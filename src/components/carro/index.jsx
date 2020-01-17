import React from "react";

export default function Carro({ lane, handleLane, isPlaying })  {

    return (
        <div id="carro"
            className={`${handleLane(lane)}
            ${isPlaying ? 'tremer' : ''}`
            }>
        </div>
    )
}