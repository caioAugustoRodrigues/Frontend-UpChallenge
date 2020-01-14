import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isPlaying: false
        };
    }
    render() { 
        return ( 
            <section className="game">
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
                    <button href="1" className="icon">
                        <i className="fas fa-chevron-left"></i>
                    </button>

                    <button href="2" className="icon" onClick={() => this.setState(
                        {isPlaying: !this.state.isPlaying}
                    )}>
                        <i className={`fas ${this.state.isPlaying ? 'fa-pause' : 'fa-play' }`}></i>
                    </button>

                    <button href="3" className="icon" >
                        <i className="fas fa-chevron-right"></i>
                    </button>
                </div>
            </section>
         );
    }
}
 
export default App;