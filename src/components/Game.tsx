import { useState } from 'react';
import Header from './Header';
import Board from './Board';

const Game = () => {
    const [counter, setCounter] = useState<number>(0);

    return(
        <div id='game'>
            <Header counter={ counter }/>
            <Board />
        </div>
    );
}

export default Game;