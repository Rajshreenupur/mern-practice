import React from 'react'
import { GoogleLogin } from 'react-google-login'

const GLogin = () => {


    const onSuccess = (res) =>{
        console.log("Login successfully",res.profileObj);
    }

    const onFailure = (res) =>{
        console.log("Login Failed",res);
    }

  return (
    <>
<GoogleLogin
    clientId="371076008907-scoqk7r0eghfpu1pio06m3rnp21avaus.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={onSuccess}
    onFailure={onFailure}
    cookiePolicy={'single_host_origin'}
    isSignedIn={true}
    />

    </>

    )
}

export default GLogin