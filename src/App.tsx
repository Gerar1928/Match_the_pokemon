import './App.scss';
import { useRef, useState } from 'react';
import Game from './components/Game';
import Overlay from './components/Overlay';
import Modal from './components/Modal';
import Gameover from './components/Gameover';

const App = () => {
    const [cards, setCards] = useState<string[]>(['BlastoisePiplup.jpg', 'BlastoisePiplup.jpg', 'CelebiVenusaur.jpg', 
    'CelebiVenusaur.jpg', 'CharizardBraixen.jpg', 'CharizardBraixen.jpg', 'EeveeSnorlax.jpg', 'EeveeSnorlax.jpg', 
    'EspeonDeoxys.jpg', 'EspeonDeoxys.jpg', 'GengarMimikyu.jpg', 'GengarMimikyu.jpg', 'PikachuZekrom.jpg', 
    'PikachuZekrom.jpg', 'RaichuAlolanRaichu.jpg', 'RaichuAlolanRaichu.jpg', 'LucarioMelmetal.jpg', 'LucarioMelmetal.jpg']);
    const [counter, setCounter] = useState<number | ((prevState: number) => number)>(0);
    const [flippedCard, setFlippedCard] = useState<{ firstTime: boolean, storedCard: string | null, matchedCards: number }>({ firstTime: false, storedCard: '', matchedCards: 0 });
    const overlayRef = useRef<HTMLDivElement>(null);
    const modalRef = useRef<HTMLDivElement | null>(null);
    const gameoverRef = useRef<HTMLDivElement | null>(null);

    // Shuffles cards when starting game.
    const shuffleCards = (cards: string[]): string[] => {
        for (let i = cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = cards[i];
            cards[i] = cards[j];
            cards[j] = temp;
        }

        return cards;
    };

    // Starts the game.
    const startGame = (): void => {
        overlayRef.current!.classList.add('deactivate');
        modalRef.current!.classList.add('deactivate');
        setCards(shuffleCards);
    }

    // Restarts the game.
    const restartGame = ():void => {
        overlayRef.current!.classList.add('deactivate');
        gameoverRef.current!.classList.add('deactivate');
        setCounter(0);
        setCards(shuffleCards);
    }

    return (
        <>
            <Game cards={ cards } counter={ counter } setCounter={ setCounter } flippedCard={ flippedCard } 
            setFlippedCard={ setFlippedCard } gameoverRef={ gameoverRef } overlayRef={ overlayRef }/>
            <Overlay ref={ overlayRef }/>
            <Modal startGame={ startGame } ref={ modalRef }/>
            <Gameover counter={ counter } restartGame={ restartGame } ref={ gameoverRef }/>
        </>
    );
}

export default App;