import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Counter } from './features/counter/Counter'
import Todo from './features/todo/Todo'
import Login from './features/auth/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
  //   <>
  //  <h1>Using simple use state</h1>
  //  <button onClick={() => setCount((count) => count + 1)}>

  //         Increment
  //       </button>
  //       <span>{count}</span>
  //       <button onClick={() => setCount((count) => count -1)}>

  //         Decrement
  //       </button>
  
    
  //   </>



  
  <Login/>
        // <Counter/> 
        // <Todo/>

  )
}

export default App
