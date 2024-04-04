import React from 'react'
import { useAuth0} from '@auth0/auth0-react';
const Login = () => {
    const { user,loginWithRedirect,isAuthenticated,logout } = useAuth0();
    // const {user,loginWithRedirect}=console.Console.log("Current User",user);
    return (
        <>
        {isAuthenticated && <h3>Hello {user.name}</h3>}
        {isAuthenticated?(
            <button onClick={() =>logout()}>Logout</button>
        ):(
            <button onClick={() => loginWithRedirect()}>Log In</button>

        )}

        </>
    )
    _
}

export default Login

