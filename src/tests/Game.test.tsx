import { render, cleanup } from '@testing-library/react';
import Game, { Props } from '../components/Game';

const renderChildComponents = (props: Partial<Props> = {}) => {
    const defaultProps: Props = {
        cards: ['BlastoisePiplup.jpg', 'BlastoisePiplup.jpg', 'CelebiVenusaur.jpg', 
        'CelebiVenusaur.jpg', 'CharizardBraixen.jpg', 'CharizardBraixen.jpg', 'EeveeSnorlax.jpg', 'EeveeSnorlax.jpg', 
        'EspeonDeoxys.jpg', 'EspeonDeoxys.jpg', 'GengarMimikyu.jpg', 'GengarMimikyu.jpg', 'PikachuZekrom.jpg', 
        'PikachuZekrom.jpg', 'RaichuAlolanRaichu.jpg', 'RaichuAlolanRaichu.jpg', 'LucarioMelmetal.jpg', 'LucarioMelmetal.jpg'],
        counter: 1,
        setCounter(fn: number | ((prevState: number) => number)): void {
            return;
        },
        flippedCard: { 
            firstTime: false, 
            storedCard: '', 
            matchedCards: 0 
        },
        setFlippedCard(obj: any) {
            return; 
        },
        gameoverRef: {},
        overlayRef: {}
    }

    return render(<Game { ...defaultProps } { ...props } />);
}

describe('<Game />', () => {
    test('Display child components.', async () => {
        const { findByTestId } = renderChildComponents();
        const gameComponent = await findByTestId('game');
        expect(gameComponent).toHaveAttribute('id', 'game');
    });
});

afterEach(cleanup);