import React from 'react'

const Home = () => {
    const logout =()=>{
        localStorage.clear()
        window.location.reload()
    }
    return (
        <div>
            <h1>Home Page </h1>
            <button onClick={logout}>Logout</button>
        </div>
    );
}

export default Home