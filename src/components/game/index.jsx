import React, { useState } from 'react';
import Carro from '../carro'
import HudUpper from '../hud';

export default function Game({ willPlay, name }) {
	const [isPlaying, setPlaying] = useState(false);
	const [lane, setLane] = useState(1);
	const [play, setPlay] = useState(willPlay);

	function UserName() {
		return name
	}
	
	const handleChange = () => {
		const btnPlay = document.getElementById('play-pause');
	
		if (isPlaying) {
			btnPlay.classList.add('fa-play');
			btnPlay.classList.remove('fa-pause')
			setPlaying(!isPlaying);
		} else if (!isPlaying) {
			btnPlay.classList.add('fa-pause');
			btnPlay.classList.remove('fa-play');
			setPlaying(!isPlaying);
		}
	}

	const lanes = {
		laneLeft: function() {
			if (isPlaying) {
				newLane = newLane - 1;
				setLane(newLane);
			}
		},
		laneRight: function() {
			if (isPlaying) {
				newLane = newLane + 1;
				setLane(newLane);
			}
		}
	}
	
	let newLane = lane;

	function handleLane(posicao) {
		switch(posicao) {
			case 0:
			return "carro__l";

			case 1:
			return "carro";

			case 2:
			return "carro__r";

			case 3:
			if(isPlaying) {
			setPlaying(!isPlaying);
			}
			resetGame();
			setLane(3);
			return 'explosion__r';

			case -1:
			if(isPlaying) {
			setPlaying(!isPlaying);
			}
			resetGame();
			setLane(-1);
			return 'explosion__l';

			default:
			return 'carro';
		}
	}


	function handleBtnCrash() {
		const btnPlay = document.getElementById('play-pause');

		if (isPlaying) {
			btnPlay.classList.remove('fa-play');
			btnPlay.classList.add('fa-pause');
			handleChange();
		}
		return
	}

	function resetGame() {
		window.setTimeout(() => {
			setLane(1);
			setPlaying(false);
			handleBtnCrash();
		}, 3000)
	}

	function getLaneByKeyPress(event) {
		let key = event.key;

		if (key === 'ArrowLeft' && isPlaying) {
			key = event.key;
			lanes.laneLeft();
		} else if (key === 'ArrowRight' && isPlaying) {
			key = event.key;
			lanes.laneRight();
		} else if (key === 'Escape') {
			setPlaying(!isPlaying);
			handleChange();
		}
	}
	
	function handleKeyDown() {
		window.addEventListener('keydown', getLaneByKeyPress)
	}

	return (
		<>
			{handleKeyDown}
			<section className="game">
				<div className={`game__canvas${isPlaying ? '--play' : ''}`}>
					<HudUpper 
					isPlaying={isPlaying}
					setPlaying={setPlaying}
					handleChange={handleBtnCrash}
					start={play}
					setStart={setPlay}
					name={name}
					/>

					<div className="game__lane">
						<Carro 
						lane={lane}
						handleLane={handleLane}
						isPlaying={isPlaying}
						/>
					</div>
				</div>

				<div className="game__controls">
					<button className="icon" onClick={lanes.laneLeft} > 
						<i className="fas fa-chevron-left"></i>
					</button>

					<button className="icon" onClick={handleChange}>
						<span>
							<i id="play-pause" className="fas fa-play"></i>
						</span>
					</button>

					<button className="icon" onClick={lanes.laneRight}>
						<i className="fas fa-chevron-right"></i>
					</button>
				</div>
			</section>
		</>
	)
}