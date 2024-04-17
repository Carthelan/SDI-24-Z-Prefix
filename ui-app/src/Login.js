import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom"

function Login() {

    const [loginCredentials, setLoginCredentials] = useState({username: '', password: ''})



    const { username, password } = loginCredentials

    const [loggedInState, setLoggedInState] = useState({username: '', loggedIn: false})

    const handleChange = e => {
        setLoginCredentials({...loginCredentials,[e.target.name]:[e.target.value]})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3001/data/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(loginCredentials)
            })
            console.log(response.status)
            if (response.status === 201) {
                setLoggedInState({
                    ...loggedInState,
                    username: "lul", 
                    loggedIn: true
                })
                console.log(loggedInState)
            }
        } catch (error) {
            console.error(error)
        }
        
    }

    return (
        <div>
            <div>
                <form onSubmit={handleSubmit}>
                    <input type='text' name='username' value={username} onChange={handleChange}/>Username
                    <input type='text' name='password' value={password} onChange={handleChange}/>Password
                    <input type='submit' value='Log In'/> 
                </form>
                {/* Add a button to continue without logging in */}
            </div>
            <div>
                {/* <Link to={<Register />}/> */}
            </div>
        </div>

    )
}

export default Login;