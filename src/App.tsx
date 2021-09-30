import './App.scss';
import { useRef, useState } from 'react';
import Game from './components/Game';
import Overlay from './components/Overlay';
import Modal from './components/Modal';

const App = () => {
    const [cards, setCards] = useState<string[]>(['BlastoisePiplup.jpg', 'BlastoisePiplup.jpg', 'CelebiVenusaur.jpg', 
    'CelebiVenusaur.jpg', 'CharizardBraixen.jpg', 'CharizardBraixen.jpg', 'EeveeSnorlax.jpg', 'EeveeSnorlax.jpg', 
    'EspeonDeoxys.jpg', 'EspeonDeoxys.jpg', 'GengarMimikyu.jpg', 'GengarMimikyu.jpg', 'PikachuZekrom.jpg', 
    'PikachuZekrom.jpg', 'RaichuAlolanRaichu.jpg', 'RaichuAlolanRaichu.jpg', 'LucarioMelmetal.jpg', 'LucarioMelmetal.jpg']);
    const overlayRef = useRef<HTMLDivElement>(null);
    const modalRef = useRef<HTMLDivElement | null>(null);

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

    return (
        <>
            <Game cards={ cards }/>
            <Overlay ref={ overlayRef }/>
            <Modal startGame={ startGame } ref={ modalRef }/>
        </>
    );
}

export default App;