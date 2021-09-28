import '../styles/Game.scss';
import { useState } from 'react';
import Header from './Header';
import Board from './Board';

type Props = {
    cards: string[],
}

const Game = ({ cards }: Props) => {
    const [counter, setCounter] = useState<number | ((prevState: number) => number)>(0);

    return(
        <div id='game'>
            <Header counter={ counter }/>
            <Board setCounter={ setCounter } cards={ cards }/>
        </div>
    );
}

export default Game;