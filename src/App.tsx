import React, { useState, useCallback, useEffect, useMemo, useRef } from 'react';
import logo from './logo.svg';
import './App.css';
import TimeClock from './components/time-clock';
import StopWatch from './components/stop-watch';
import TodoList from './components/todo-list';

function App() {


  return (
    <div className="App">
      <header>
        <strong>Refresh the page to see widgets in action</strong>
      </header>
      <TimeClock />
      <StopWatch />
      <TodoList />
    </div>
  );
}

export default App;
