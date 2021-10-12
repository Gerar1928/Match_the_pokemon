import { render, cleanup, fireEvent } from '@testing-library/react';
import Gameover, { Props } from '../components/Gameover';

const renderGameoverComponent = (props: Partial<Props> = {}) => {
    const defaultProps = {
        counter: 0,
        restartGame() {
            return;
        }
    }

    return render(<Gameover { ...defaultProps } { ...props } />);
}

describe('Check if component is hidden', () => {
    test('Check if Gameover component is hidden', async () => {
        const { findByTestId } = renderGameoverComponent();
        const gameoverComponent = await findByTestId('gameover-modal');
        
        expect(gameoverComponent).toHaveAttribute('id', 'gameover-modal');
    });

    test('Check if the button triggers the event', async () => {
        const { findByTestId } = renderGameoverComponent();
        const startGameButton = await findByTestId('start-game-btn');

        expect(startGameButton).toHaveClass('start-game-btn');
        fireEvent.click(startGameButton);
    });
});

afterEach(cleanup);