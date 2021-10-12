import { render, cleanup } from '@testing-library/react';
import Overlay from '../components/Overlay';

const renderComponent = () => render(<Overlay ref={ null }/>);

describe('<Overlay />', () => {
    test('Component being displayed', async () => {
        const { findByTestId } = renderComponent();
        const overlayComponent = await findByTestId('overlay');
        expect(overlayComponent).toHaveClass('overlay');
    });
});

afterEach(cleanup);