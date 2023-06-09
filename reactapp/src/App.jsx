import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
         This is my  first Vite and React app
        </p>
      </div>
      <p className="read-the-docs">
        Click on the logos to learn more
      </p>
{/* added buttons feature */}
      <button onClick={() => setCount((count) => count + 1)}>
          new button count feature {count}
        </button>

        {/* Custom UI */}
        <h1>Custom Data </h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
         Just a test
        </p>
      </div>
      <p className="read-the-docs">
        Click on the logos to learn more
      </p>
{/* added buttons feature */}
      <button onClick={() => setCount((count) => count + 1)}>
         Button 2 Feature for count {count}
        </button>
    </>
  )
}

export default App
