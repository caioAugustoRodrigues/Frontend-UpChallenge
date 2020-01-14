import * as React from 'react';
import '../../css/main.css';

import playButton from './button/index.jsx';

class Game extends React.Component {
    constructor() {
        super();
        this.state = {
            score: 0,
            isPlaying: false,
            isDriving: false
        }
    }
    
    render() { 
        return ( 
            <div className="game">
                <div className="game__canvas">
                    <div className="game__lane">
                        <div className="game__lane--1"></div>
                        <div className="game__lane--2">
                            <div className="carro" id="carro">
                            </div>
                        </div>
                        <div className="game__lane--3"></div>
                    </div>
                </div>
                <div className="game__controls">
                    <a href="1" className="icon">
                        <i className="fas fa-chevron-left"></i>
                    </a>
                    <playButton />
                    <a href="3" className="icon">
                        <i className="fas fa-chevron-right"></i>
                    </a>
                    
                </div>
            </div>
         );
    }
}
 
export default Game;