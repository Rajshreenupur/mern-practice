import React from 'react'
import { GoogleLogout } from 'react-google-login'

const  clientId="371076008907-scoqk7r0eghfpu1pio06m3rnp21avaus.apps.googleusercontent.com"

const Logout = () => {

    const onSuccess = () =>{
        console.log("Log out successfully");
    }
  return (
    <div>
<GoogleLogout
    clientId={clientId}
    buttonText="Logout"
    onLogoutSuccess={onSuccess}
/>

    </div>
  )
}

export default Logout