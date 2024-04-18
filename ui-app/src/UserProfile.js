import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie'


function UserProfile() {
    const [userItems, setUserItems] = useState([])

    useEffect(() => {
        fetch('http://localhost:3001/data/user/items', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({username: Cookies.get('Username')})
        })
        .then(res => res.json())
        .then(res => setUserItems(res))
    }, []) // add a handler for a response saying '0 items match criteria'

    if(!userItems) {
        return (
            <>
                No Items
            </>
        )
    } 

    console.log(userItems)

    return (
        <div>
        {userItems.map((item) => {
            return(
                <ul>
                    <li>
                        Item Name: {item.item_name}
                    </li>
                    <li>
                        Description: {item.description}
                    </li>
                    <li>
                        Quantity: {item.quantity}
                    </li>
                </ul>
        )})}
        </div>
    )
}

export default UserProfile