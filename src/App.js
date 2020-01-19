import * as React from 'react';
import Game from './components/game';
import Menu from './components/menu';

export default function App() {
const [willPlay, setPlay] = React.useState(false);
const [name, setName] = React.useState("");

    function returnGame() {
        return (
        <>
            <Game 
                willPlay={willPlay}
                name={name}
            /> 
        </>
        )
    }
    
    function returnMenu() {
        return (
        <> 
            <Menu 
                setPlay={setPlay} 
                willPlay={willPlay}
                setName={setName}
            />
        </>
        )
    }

    function HandleContent() {
        if (!willPlay) {
            return returnMenu();
        } else {
            return returnGame()
        }
    }

    function getKey(event) {
        console.log(event.key)
    }
    

    return (
        <HandleContent onkeydown={getKey} />
    )
}