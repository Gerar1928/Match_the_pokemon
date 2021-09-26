import '../styles/Game.scss';
import { useState } from 'react';
import Header from './Header';
import Board from './Board';

const Game = () => {
    const [counter, setCounter] = useState<number | ((prevState: number) => number)>(0);

    return(
        <div id='game'>
            <Header counter={ counter }/>
            <Board setCounter={ setCounter }/>
        </div>
    );
}

export default Game;