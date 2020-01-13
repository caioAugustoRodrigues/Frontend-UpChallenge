import * as React from 'react';
import Game from './components/game';
import './css/main.css';

class App extends React.Component {
  state = { 
    renderView: 0,
   }
  render() { 
    return ( 
      <main>
        <Game />
      </main>
     );
  }
}
 
export default App;