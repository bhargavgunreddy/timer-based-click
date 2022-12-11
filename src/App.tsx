import React, { useState, useCallback, useEffect, useMemo, useRef } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [timer, setTimer] = useState(10);
  const [clickCount, setClickCount] = useState(0);
  const ref = useRef<ReturnType<typeof setTimeout>
    | null>(null);


  const clear = () => clearInterval(ref.current!);

  const increaseCount = useCallback(() => {
    setClickCount(clickCount + 1);
  }, [clickCount]);

  useEffect(() => {
    ref.current = setInterval(() =>
      setTimer((timer) => timer - 1)
      , 1000);

    return clear
  }, []);

  useEffect(() => {
    if (timer === 0) {
      clear();
    }
  }, [timer])



  return (
    <div className="App">
      <section className="timer">
        <h4>{timer}</h4>

        <p> Click count {clickCount}</p>
        <p>
          {timer > 0 ? <button onClick={increaseCount}>Click</button> : <></>}
        </p>
      </section>

    </div>
  );
}

export default App;
