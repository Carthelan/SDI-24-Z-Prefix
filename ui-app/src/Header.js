import React from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie'
import './Header.css'

function Header() {

    function logOut(event) {
        Cookies.remove('Token')
        Cookies.remove('Username')
        console.log(Cookies.get('Token', 'Usernme'))
    }
    return(
        <header className='header'>
            {(Cookies.get('Token') == 'true' || 'guest') &&
                <Link to='/' onClick={logOut} title="Log Out" className='headerButton'>
                    Log Out
                </Link>
                }

            <Link to='/inventory' className='headerButton'>Inventory</Link>
            <Link to='/' className='headerButton'>Home</Link>
            {(Cookies.get('Token') == 'true') && 
                    <Link to='/profile' className='headerButton'>Profile</Link>
                    }
                <Link to='/register' className='headerButton'>Register</Link>
        </header>
    )
}

export default Header