import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom"
import Login from './Login'
import Cookies from 'js-cookie'

function logOut(event) {
    Cookies.remove('Token')
    Cookies.remove('Username')
    console.log(Cookies.get('Token', 'Usernme'))
}

function Home() {
    return (
         <>
            <Login />
            <button onClick={logOut} title="Log Out">Log Out</button>
        </>
    )
}
    
export default Home;