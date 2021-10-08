import '../styles/Game.scss';
import Header from './Header';
import Board from './Board';

export interface Props {
    cards: string[],
    counter: number | ((prevState: number) => number),
    setCounter: (fn: number | ((prevState: number) => number)) => void,
    flippedCard: { firstTime: boolean, storedCard: string | null, matchedCards: number },
    setFlippedCard: (obj: any) => void;
    gameoverRef: any;
    overlayRef: any;
}

const Game = ({ cards, counter, setCounter, flippedCard, setFlippedCard, gameoverRef, overlayRef }: Props) => {
    return(
        <div id='game' data-testid='game'>
            <Header counter={ counter }/>
            <Board setCounter={ setCounter } cards={ cards } flippedCard={ flippedCard } setFlippedCard={ setFlippedCard } 
                gameoverRef={ gameoverRef } overlayRef={ overlayRef }/>
        </div>
    );
}

export default Game;