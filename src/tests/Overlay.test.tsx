import { render, cleanup } from '@testing-library/react';
import Overlay from '../components/Overlay';

const renderOverlayComponent = () => render(<Overlay ref={ null }/>);

describe('<Overlay />', () => {
    test('Component being displayed', async () => {
        const { findByTestId } = renderOverlayComponent();
        const overlayComponent = await findByTestId('overlay');
        expect(overlayComponent).toHaveClass('overlay');
    });
});

afterAll(cleanup);