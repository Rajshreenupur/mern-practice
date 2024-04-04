import React, { useEffect, useState } from "react";
import  {auth,googleProvider,facebookProvider,githubProvider} from "./Config"
import { signInWithPopup } from 'firebase/auth'
import Home from './Home'

const SignIn = () => {
    const [value,setValue] = useState('')
    const [value1,setValue1] = useState('')
    const [value2,setValue2] = useState('')

    // const handleClick =()=>{
    //     signInWithPopup(auth,googleProvider).then((data)=>{
    //         setValue(data.user.email)
    //         localStorage.setItem("email",data.user.email)
    //     })
    // }

    // useEffect(()=>{
    //     setValue(localStorage.getItem('email'))
    // })


    // const handleClick1 =()=>{
    //     signInWithPopup(auth,facebookProvider).then((data)=>{
    //         setValue1(data.user.email)
    //         localStorage.setItem("email",data.user.email)
    //     })
    // }

    // useEffect(()=>{
    //     setValue1(localStorage.getItem('email'))
    // })




    const handleClick2 =()=>{
        signInWithPopup(auth,githubProvider).then((data)=>{
            setValue2(data.user.email)
            localStorage.setItem("email",data.user.email)
        })
    }

    useEffect(()=>{
        setValue2(localStorage.getItem('email'))
    })

  return (
    <div>
 {/* {value?<Home/>:
        <button onClick={handleClick}>Signin with Google </button>

  } */}



  {/* {value1?<Home/>:
        <button onClick={handleClick1}>Signin with Facebook </button>

  } */}



{value2?<Home/>:
        <button onClick={handleClick2}>Signin with Github </button>
  }

        </div>
  )
}

export default SignIn