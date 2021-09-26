import { forwardRef } from 'react';
import '../styles/Modal.scss';

type Props = {
    startGame: () => void
}

const Modal = forwardRef<HTMLDivElement, Props>(({ startGame }, ref) => {
    return (
        <div id='modal' ref={ ref }>
            <button className='start-game-btn' onClick={ startGame }>Start Game</button>
        </div>
    );
});

export default Modal;