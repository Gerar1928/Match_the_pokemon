import { render, cleanup } from '@testing-library/react';
import Card, { Props } from '../components/Card';

const renderCardComponent = (props: Partial<Props> = {}) => {
    const defaultProps = {
        imgName: `${ process.env.PUBLIC_URL }/images/cards/CelebiVenusaur.jpg`,
        arrIndex: 0
    }

    return render(<Card { ...defaultProps } { ...props } />);
}

describe('Check if the component is being displayed', () => {
    test('Check if Card component is being displayed and its children', async () => {
        const { findByTestId } = renderCardComponent();
        const cardComponent = await findByTestId('card');
        
        expect(cardComponent).toHaveClass('card');
        expect(cardComponent).toHaveAttribute('data-index', '0');
    });

    test('Check if Card component children are being displayed', async () => {
        const { findByTestId } = renderCardComponent();
        const frontCard = await findByTestId('front-card');
        const backCard = await findByTestId('back-card');

        expect(frontCard).toHaveClass('front-card');
        expect(backCard).toHaveClass('back-card');
    });
});

afterEach(cleanup);