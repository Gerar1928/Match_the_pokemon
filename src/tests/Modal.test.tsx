import { render, fireEvent, cleanup } from '@testing-library/react';
import Modal, { Props } from '../components/Modal';

const renderComponent = (props: Partial<Props> =  {}) => {
    const defaultProps = {
        startGame(): void {
            return;
        }
    }

    return render(<Modal { ...defaultProps } { ...props }  ref={ null } />);
}

describe('Check if the component is being displayed.', () => {
    test('Check if the modal is being displayed', async () => {
        const { findByTestId } = renderComponent();
        const modalComponent = await findByTestId('modal');

        expect(modalComponent).toHaveAttribute('id', 'modal');
    });

    test('Check if the button is receiving the event.', async () => {
        const startGame = jest.fn();
        const { findByTestId } = renderComponent({ startGame });
        const buttonComponent = await findByTestId('start-game-btn');

        fireEvent.click(buttonComponent);
    });
});

afterEach(cleanup);