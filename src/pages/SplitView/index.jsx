import { useRef } from 'react';
import './index.css';
import { useEffect } from 'react';

const SplitView = () => {
    const dividerRef = useRef();
    const leftContainerRef = useRef();
    let mouse_is_down = false;

    useEffect(() => {

        dividerRef.current.addEventListener('mousedown', (e) => {
            mouse_is_down = true;
        });

        document.addEventListener('mousemove', (e) => {
            if (!mouse_is_down) return;
            leftContainerRef.current.style.width = `${e.clientX}px`;
        });

        document.addEventListener('mouseup', () => {
            mouse_is_down = false;
        });

    }, []);

    return (
        <div className='container'>
            <div className='left' ref={leftContainerRef}></div>
            <div className='divider' ref={dividerRef}></div>
            <div className='right'></div>
        </div>
    )
};

export default SplitView;