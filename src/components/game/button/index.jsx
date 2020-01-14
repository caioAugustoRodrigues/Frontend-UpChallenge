import * as React from 'react';
import { render } from '@testing-library/react';
import playing from '../logic/play';

const btnPlay = document.getElementById('playpause');
const gameCanvas = document.querySelector('game__canvas');
let playing = false;

class playButton extends React.Component {

    render() {
        if (!playing) {
            return (
                <>
                <button className="fas fa-play"></button>
                {playing = true}
                </>
            )
        } else {
            return (
                <>
                <button className="fas fa-pause"></button>
                {playing = false}
                </>
            );
        };
    };
}
 
export default playButton;

