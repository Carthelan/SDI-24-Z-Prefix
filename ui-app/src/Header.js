import React from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie'

function Header() {

    function logOut(event) {
        Cookies.remove('Token')
        Cookies.remove('Username')
        console.log(Cookies.get('Token', 'Usernme'))
    }
    return(
        <header>
            {(Cookies.get('Token') == 'true' || 'guest') && 
            <Link to='/' onClick={logOut} title="Log Out">
                Log Out
            </Link>}
            <button>
                <Link to='/inventory'>inventory</Link>
            </button>
            {(Cookies.get('Token') == 'true') && 
                <button> 
                    <Link to='/profile'>Profile</Link>
                </button>}
            <button> 
                <Link to='/register'>Register New Account</Link>
            </button>
        </header>
    )
}

export default Header