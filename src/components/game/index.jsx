import * as React from 'react';
import '../../css/main.css';

class Game extends React.Component {
    state = { 
        score: 0,
        isPlaying: false,

     }
    render() { 
        return ( 
            <div className="game">
                <div className="game__canvas">
                    <div className="game__lane">
                        <div className="game__lane--1">1</div>
                        <div className="game__lane--2">
                            <div className="carro" id="carro">
                            </div>
                        </div>
                        <div className="game__lane--3">2</div>
                    </div>
                </div>
                <div className="game__controls">
                    <a href="1" className="icon">
                        <i className="fas fa-chevron-left"></i>
                    </a>
                    <a href="2" className="icon">
                        <i className="fas fa-pause"></i>
                    </a>
                    <a href="3" className="icon">
                        <i className="fas fa-chevron-right"></i>
                    </a>
                    
                </div>
            </div>
         );
    }
}
 
export default Game;