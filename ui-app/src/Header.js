import React from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie'

function Header() {

    function logOut(event) {
        Cookies.remove('Token')
        Cookies.remove('Username')
        console.log(Cookies.get('Token', 'Usernme'))
        window.location.reload()
    }
    return(
        <header>
            {console.log(Cookies.get('Token'))}
            <button onClick={logOut} title="Log Out">Log Out</button>
            <button>
                <Link to='/inventory'>inventory</Link>
            </button>
            {(Cookies.get('Token') == 'true') && 
                <button> 
                    <Link to='/profile'>Profile</Link>
                </button>}
        </header>
    )
}

export default Header