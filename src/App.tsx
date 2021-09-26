import './App.scss';
import { useRef } from 'react';
import Game from './components/Game';
import Overlay from './components/Overlay';
import Modal from './components/Modal';

const App = () => {
    const overlayRef = useRef<HTMLDivElement>(null);
    const modalRef = useRef<HTMLDivElement | null>(null);

    // Starts the game.
    const startGame = (): void => {
        overlayRef.current!.classList.add('deactivate');
        modalRef.current!.classList.add('deactivate');
    }

    return (
        <>
            <Game />
            <Overlay ref={ overlayRef }/>
            <Modal startGame={ startGame } ref={ modalRef }/>
        </>
    );
}

export default App;