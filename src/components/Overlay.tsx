import { forwardRef } from 'react';
import '../styles/Overlay.scss';

const Overlay = forwardRef<HTMLDivElement>((props, ref) => {
    return <div className='overlay' ref={ ref } ></div>
});

export default Overlay;