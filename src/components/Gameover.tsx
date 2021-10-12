import '../styles/Gameover.scss';
import { forwardRef } from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa';

export interface Props {
    counter: number | ((prevState: number) => number),
    restartGame: () => void;
}

const Gameover = forwardRef<HTMLDivElement, Props>(({ counter, restartGame }, ref) => {

    const displayStarsEarned = (): any => {
        if (counter <= 15) {
            return(
                <div className='stars'>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                </div>
            );
        } else if (counter > 15 && counter < 30) {
            return(
                <div className='stars'>
                    <FaStar style={{color: '#FFC107'}}/>
                    <FaStar />
                    <FaRegStar />
                </div>
            );
        } else {
            return(
                <div className='stars'>
                    <FaStar />
                    <FaRegStar />
                    <FaRegStar />
                </div>
            );
        }
    }

    return(
        <div id='gameover-modal' className='deactivate' data-testid='gameover-modal' ref={ ref }>
            <div className='title'>
                <h1>Congratulations!</h1>
                <h2>You did it!</h2>
                <h3>Moves: { counter }</h3>
            </div>
            { displayStarsEarned() }
            <div className='button-container'>
                <button className='start-game-btn' data-testid='start-game-btn' onClick={ restartGame }>Play again</button>
            </div>
        </div>
    );
});

export default Gameover;