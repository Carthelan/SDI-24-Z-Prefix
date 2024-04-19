import React, { useState, useEffect } from 'react';
import './Inventory.css'

function Inventory() {
    const [allInventory, setAllInventory] = useState([])

    useEffect(() => {
        fetch('http://localhost:3001/data/inventory')
        .then(res => res.json())
        .then(data => setAllInventory(data))
    }, [])
    
    if (allInventory.length === 0) {
        return (
            <p>Still Loading</p>
        )
    }
    console.log(allInventory.length)
    console.log(typeof allInventory)
 

    return (
        <div className='inventoryContainer'>
            {allInventory.map((item) => {
            return (
                <div className='itemContainer'>
                    <p className='infoContainer'>
                    Item Name: {item.item_name}
                    </p>
                    <p className='infoContainer'>
                    Description: {item.description}
                    </p>
                    <p className='infoContainer'>
                    Quantity: {item.quantity}
                    </p>
                </div>
                )
            })}
       </div>
    )
}

export default Inventory;