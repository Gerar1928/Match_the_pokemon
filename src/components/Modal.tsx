import { useRef } from 'react';
import '../styles/Modal.scss';

const Modal = ({ overlayRef }: { overlayRef: HTMLDivElement | null }) => {

    const modalRef = useRef<HTMLDivElement | null>(null);

    const startGame = (): void => {
        overlayRef!.classList.add('deactivate');
        modalRef.current!.classList.add('deactivate');
    }

    return (
        <div id='modal' ref={ modalRef }>
            <button className='start-game-btn' onClick={ startGame }>Start Game</button>
        </div>
    );
}

export default Modal;