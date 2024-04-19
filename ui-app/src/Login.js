import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom"
import Cookies from 'js-cookie'
import Register from './Register';
const bcrypt = require('bcryptjs');


function Login() {

    const [loginCredentials, setLoginCredentials] = useState({username: '', password: ''})

    const { username, password } = loginCredentials

    const [loggedInState, setLoggedInState] = useState({username: '', loggedIn: null})

    let navigate = useNavigate();

    const routeChange = () => {
        let path = '/inventory';
        navigate(path)
    }

    function guestLogin(event) {
        Cookies.set('Token', 'guest')
        console.log(Cookies.get('Token'))
        
    }

    

    const handleChange = e => {
        setLoginCredentials({...loginCredentials,[e.target.name]:[e.target.value]})

    }

    const handleSubmit = async (e) => {
        const hash = bcrypt.hashsync(loginCredentials.password[0]) 
        setLoginCredentials({...loginCredentials, password: hash })
        e.preventDefault();
        if (loginCredentials.username[0].length == 0 || loginCredentials.password[0].length == 0) {
            return(console.log('Please input Username and Password'))
        } 
        try {
            const response = await fetch('http://localhost:3001/data/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(loginCredentials)
            })

            if (response.status === 201) {
                Cookies.set('Token', 'true')
                Cookies.set('Username', loginCredentials.username[0])
                routeChange()
                
            } else if (response.status == 406) {

                throw Error('Forgot Username or Password')

            }

        } catch (error) {
            console.error(error)
        }
        
    }
    if (Cookies.get('Token') == 'true' || 'false') {
        return (
            <div>
                <div>
                    <form onSubmit={handleSubmit}>
                        <input type='text' name='username' value={username} onChange={handleChange}/>Username
                        <input type='text' name='password' value={password} onChange={handleChange}/>Password
                        <input type='submit' value='Log In'/> 
                    </form>
                    <button onClick={guestLogin} title="Continue as Guest">Log In as Guest</button>
                </div>
            </div>
        )
    }
}

export default Login;