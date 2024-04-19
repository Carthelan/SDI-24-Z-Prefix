import React, { useState, useEffect } from 'react';

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
                <div>
                    <p>
                    Item Name: {item.item_name}
                    </p>
                    <p>
                    Description: {item.description}
                    </p>
                    <p>
                    Quantity: {item.quantity}
                    </p>
                </div>
                )
            })}
       </div>
    )
}

export default Inventory;