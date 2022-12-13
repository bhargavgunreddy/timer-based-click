import React, { useState, useEffect, ChangeEvent, useRef } from 'react';


// const styledDiv = styled.div`
// ${props => `
// width: ${props['data-width']}`}
// `;

export const ProgressBar = () => {
    const [wid, setWid] = useState(0);
    const progressRef = useRef(null);

    function handleChange(ev: ChangeEvent<HTMLInputElement>) {
        setWid(Number(ev.target?.value));
        (progressRef.current as any).style = {
            width: `${Number(ev.target.value)} %`
        }
    }

    return <section className='widget progress-widget'>
        <p>
            <div className='progress-bar'>
                <div data-width={wid} ref={progressRef} className='progress-bar-indicator'></div>
            </div>
            Enter number: <input type="number" value={wid} onChange={handleChange}></input>
        </p>
    </section>
}