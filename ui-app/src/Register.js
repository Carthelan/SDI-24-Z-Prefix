import React, { useState, useEffect } from 'react';
const bcrypt = require('bcryptjs');


function Register() {
    const [registrationData, setRegistrationData] = useState({
        first_name: '',
        last_name: '',
        username: '',
        password: ''
    })

    const handleSubmit = (e) => {
        const hash = bcrypt.hashSync(registrationData.password)
        registrationData = [...registrationData, {password: hash}]
        console.log(registrationData)
    }


    const handleChange = e => {
        setRegistrationData({...registrationData, [e.target.name]:[e.target.value]})
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
                <button onSubmit={handleSubmit}/>
            </form>
        </div>
    )

}

export default Register;