import './App.scss';
import { useRef } from 'react';
import Game from './components/Game';
import Overlay from './components/Overlay';
import Modal from './components/Modal';

const App = () => {
    const overlayRef = useRef<HTMLDivElement>(null);
    
    // ((): void => {
    //     console.log('Initializing...');
    // })();

    return (
        <>
            <Game />
            <Overlay ref={ overlayRef }/>
            <Modal overlayRef={ overlayRef.current }/>
        </>
    );
}

export default App;