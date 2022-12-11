import React, { useState, useCallback, useEffect, useMemo, useRef } from 'react';

function TimeClock() {

    const [timer, setTimer] = useState(10);
    const [clickCount, setClickCount] = useState(0);
    const ref = useRef<ReturnType<typeof setTimeout>
        | null>(null);


    const clear = () => clearInterval(ref.current!);

    const increaseCount = useCallback(() => {
        setClickCount((clickCount) => clickCount + 1);
    }, [clickCount]);

    useEffect(() => {
        ref.current = setInterval(() => {
            setTimer((timer) => timer - 1)
        }
            , 1000);

        return clear
    }, []);

    useEffect(() => {
        if (timer === 0) {
            clear();
        }
    }, [timer])



    return (
        <section className="widget">
            <section className="timer">
                <h4>{timer}</h4>

                <p> Click count {clickCount}</p>
                <p>
                    {timer > 0 ? <button onClick={increaseCount}>Click</button> : <></>}
                </p>
            </section>

        </section>
    );
}

export default TimeClock;
