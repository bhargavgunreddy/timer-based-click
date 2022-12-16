import React, { useState, useCallback, useEffect, useMemo, useRef, MouseEventHandler } from 'react';


export const StarRating = () => {

    const [rating, setRating] = useState(0);

    const onHover = (ev: any) => {
        if (!rating) {
            const currentEle = ev.target.id.split("-")[1];
            resetSign();
            flipSign(Number(currentEle));
        }
        // flipSign();
    }

    const onLeave = () => {
        // const currentEle = ev.target.id.split("-")[1];
        if (!rating) {

            resetSign();
        }
        // flipSign(Number(currentEle));
    }

    const onClick = (ev: { target: { id: string; }; }) => {
        const currentEle = ev.target.id.split("-")[1];
        resetSign();
        flipSign(Number(currentEle));
        setRating(Number(currentEle) + 1);
    }

    const flipSign = (num: Number) => {
        const starArr = document.getElementsByClassName('star');
        for (let i = 0; i <= num; i++) {
            starArr[i].classList.add('fill');

        };
    }

    const resetSign = () => {
        const starArr = document.getElementsByClassName('star');
        for (let i = 0; i < starArr.length; i++) {
            starArr[i].classList.remove('fill');
        };
    }

    const resetRating = () => {
        resetSign();
        setRating(0);
    }
    return (
        <section className="widget">
            {Array(5).fill(1).map((item, index) =>
                <span id={'star-' + index} className="star" data-index={index}
                    onMouseEnter={onHover} onMouseLeave={onLeave} onClick={onClick as any}>&#9734;</span>
            )}
            <p> Rating is: {rating}</p>
            <button onClick={resetRating}>RESET RATING</button>
        </section>
    )
}