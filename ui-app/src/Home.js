import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom"
import Login from './Login'
import Cookies from 'js-cookie'
import Header from './Header';

function logOut(event) {
    Cookies.remove('Token')
    Cookies.remove('Username')
    console.log(Cookies.get('Token', 'Usernme'))
}

function Home() {
    if (Cookies.get('Token') == 'true')
    return (
        <>
            <Link to='/profile' />    
        </>
)
    return (
        <>
            <Login />
        </>
    )
}
    
export default Home;