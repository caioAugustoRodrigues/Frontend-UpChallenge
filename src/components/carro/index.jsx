import React from "react";

export default function Carro({ laneValue, isPlaying })  {

    function handleLane(posicao) {
        const carro = document.getElementById('carro');
        if (isPlaying) {
            switch(posicao) {
                case 0:
                    return '__l';
                case 1:
                    return '';
                case 2:
                    return '__r';
                case posicao >= 3:
                    alert('Mais ou menos');
            }
        }

        return '';
    }

    return (
        <div id="carro" className={`carro${handleLane(laneValue)} ${isPlaying ? 'tremer' : ''}`}></div>
    )
}