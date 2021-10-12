import { render, cleanup } from '@testing-library/react';
import Header, { Props } from '../components/Header';

const renderHeaderComponent = (props: Partial<Props> = {}) => {
    const defaultProps = {
        counter: 0
    }

    return render(<Header { ...defaultProps } { ...props }/>);
}

describe('Check if the components are being displayed.', () => {
    test('Check if header and h3 tags are being displayed.', async () => {
        const { findByTestId } = renderHeaderComponent();
        const headerComponent =  await findByTestId('header');
        const movesText = await findByTestId('moves');

        expect(headerComponent).toHaveAttribute('id', 'header');
        expect(movesText).toHaveClass('moves');
        expect(movesText).toHaveTextContent('Moves: 0');
    });
});

afterAll(cleanup);