import { useState } from 'react';
import reactLogo from '../assets/react.svg';
import viteLogo from '/vite.svg';
import { Link } from "react-router-dom";
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="">
        <div className="">
          <h1>Vite + React</h1>
          <div className="card">
            <button onClick={() => setCount((count) => count + 1)}>
              count is {count}
            </button>
            <p>
              Edit <code>src/App.jsx</code> and save to test HMR
            </p>
          </div>
          <p className="read-the-docs">
            <Link to='shop'>Click here to get to the shop</Link>
          </p>
        </div>
      </div>
    </>
  )
}

export default App
