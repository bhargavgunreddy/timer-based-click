import React, { useState, useCallback, useEffect, useMemo, useRef } from 'react';
import logo from './logo.svg';
import './App.css';
import TimeClock from './components/time-clock';
import StopWatch from './components/stop-watch';

function App() {


  return (
    <div className="App">
      <TimeClock />
      <StopWatch />
    </div>
  );
}

export default App;
