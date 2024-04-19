import React, { useState, useEffect } from 'react';
const bcrypt = require('bcryptjs');


function Register() {
    const [registrationData, setRegistrationData] = useState({
        first_name: '',
        last_name: '',
        username: '',
        password: ''
    })

    const handleClick = async (e) => {
        e.preventDefault()
        const hashedPassword = bcrypt.hashSync(registrationData.password)

        setRegistrationData({
                ...registrationData, 
                password: hashedPassword
            })
        const response = await fetch('http://localhost:3001/user/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(registrationData)
        })
    }


    const handleChange = e => {
        setRegistrationData({...registrationData, [e.target.name]: e.target.value})
    }



    return (
        <div>
            <div>
                Hello there
            </div>
            <form>
                First Name: <input type='text' name='first_name' onChange={handleChange}/>
                Last Name: <input type='text' name='last_name' onChange={handleChange}/>
                Username: <input type='text' name='username' onChange={handleChange}/>
                Password: <input type='text' name='password' onChange={handleChange}/>
                <button onClick={handleClick}>Submit</button>
            </form>
        </div>
    )

}

export default Register;