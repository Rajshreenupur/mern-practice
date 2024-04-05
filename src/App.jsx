import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Counter } from './features/counter/Counter'
import Todo from './features/todo/Todo'
import Login from './features/auth/Login'
import SignIn from './features/GoogleSignin/SignIn'
import { gapi } from 'gapi-script';
import GLogin from './features/GoogleAPI/GLogin'
import Logout from './features/GoogleAPI/Logout'

const  clientId="371076008907-scoqk7r0eghfpu1pio06m3rnp21avaus.apps.googleusercontent.com"

function App() {
  // const [count, setCount] = useState(0)

  useEffect(() =>{
    function start(){
      gapi.client.init({
        clientId:clientId,
        scope: ""
      })
    };
    gapi.load('client:auth2',start);
  });
  
// var accessToken =gapi.auth.getToken().access_token;

  return (

      //  <h1>Using simple use state</h1>
  //  <button onClick={() => setCount((count) => count + 1)}>

  //         Increment
  //       </button>
  //       <span>{count}</span>
  //       <button onClick={() => setCount((count) => count -1)}>

  //         Decrement
  //       </button>
  

    <>
 
<GLogin/>
<Logout/>
        </>


          // <SignIn/>
  // <Login/>
        // <Counter/> 
        // <Todo/>


  )
}

export default App
