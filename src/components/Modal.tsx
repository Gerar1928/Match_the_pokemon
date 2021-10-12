import { forwardRef } from 'react';
import '../styles/Modal.scss';

export interface Props {
    startGame: () => void
}

const Modal = forwardRef<HTMLDivElement, Props>(({ startGame }, ref) => {
    return (
        <div id='modal' ref={ ref } data-testid='modal'>
            <img src={process.env.PUBLIC_URL + './images/game-logo.png'} alt='logo-game'/>
            <div className='button-container'>
                <button className='start-game-btn' data-testid='start-game-btn' onClick={ startGame }>Start Game</button>
            </div>
        </div>
    );
});

export default Modal;