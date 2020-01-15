import React from "react";

export default function Carro({ laneValue, isPlaying })  {

    function handleLane(posicao) {
        const carro = document.getElementById('carro');
        if (isPlaying) {
            switch(posicao) {
                case 0:
                    return 'carro__l';
                case 1:
                    return 'carro';
                case 2:
                    return 'carro__r';
                case 3:
                    return 'explosion';
                default:
                    return 'explosion'
            }

            return 'explosion';
        }
    }

    return (
        <div id="carro" className={`${handleLane(laneValue)} ${isPlaying ? 'tremer' : ''}`}></div>
    )
}