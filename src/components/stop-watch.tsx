import React, { useState, useCallback, useEffect, useMemo, useRef, MouseEventHandler } from 'react';

function StopWatch() {

    const [timer, setTimer] = useState(0);
    const ref = useRef<ReturnType<typeof setTimeout>
        | null>(null);

    const clear = () => {
        clearInterval(ref.current!);
        ref.current = null;
    }

    const startTime = () => {
        if (!ref.current) {
            ref.current = setInterval(() => {
                setTimer((timer) => timer + 1);
            }, 1000);
        }
    }

    const stopTime = () => {
        clear();
    }

    const resetTime = () => {
        setTimer(0);
    }

    return (
        <section className="widget">
            <h4>{Math.floor(timer / 60)} mins</h4>
            <h4>{timer % 60} secs</h4>
            <section className='btn'>
                <button onClick={startTime as any}> Start</button>
                <button onClick={stopTime as any}> Stop</button>
                <button onClick={resetTime as any}> Reset</button>
            </section>
        </section>
    );
}

export default StopWatch;
