import { render, cleanup, fireEvent } from '@testing-library/react';
import Board, { Props } from '../components/Board';

const renderBoardComponent = (props: Partial<Props> = {}) => {
    const defaultProps = {
        setCounter() {
            return;
        },
        cards:  ['BlastoisePiplup.jpg', 'BlastoisePiplup.jpg', 'CelebiVenusaur.jpg', 
        'CelebiVenusaur.jpg', 'CharizardBraixen.jpg', 'CharizardBraixen.jpg', 'EeveeSnorlax.jpg', 'EeveeSnorlax.jpg', 
        'EspeonDeoxys.jpg', 'EspeonDeoxys.jpg', 'GengarMimikyu.jpg', 'GengarMimikyu.jpg', 'PikachuZekrom.jpg', 
        'PikachuZekrom.jpg', 'RaichuAlolanRaichu.jpg', 'RaichuAlolanRaichu.jpg', 'LucarioMelmetal.jpg', 'LucarioMelmetal.jpg'],
        flippedCard: { 
            firstTime: false, 
            storedCard: '', 
            matchedCards: 0 
        },
        setFlippedCard() {
            return;
        },
        gameoverRef: document.createElement('div'),
        overlayRef: document.createElement('div')
    }

    return render(<Board { ...defaultProps } { ...props } />);
};

describe('Check if component is being displayed.', () => {
    test('Check if Board component is being displayed and its children', async () => {
        const { findByTestId, findAllByTestId } = renderBoardComponent();
        const boardComponent = await findByTestId('board');
        const cardComponents = await findAllByTestId('card');

        expect(boardComponent).toHaveAttribute('id', 'board');
        expect(cardComponents).toHaveLength(18);
    });

    test('Check if on click event on Board can be triggered', async () => {
        const { findByTestId } = renderBoardComponent();
        const boardComponent = await findByTestId('board');

        fireEvent.click(boardComponent);
    });
});

afterEach(cleanup);