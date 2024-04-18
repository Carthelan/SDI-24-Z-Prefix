import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie'

function UserProfile() {
    let username = Cookies.get('username')
    return (
        <>
            {console.log(username)}
        </>
    )
}

export default UserProfile