import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie'
import CreateItem from './Components/CreateItem';
import "./userprofile.css"


function UserProfile() {
    const [userItems, setUserItems] = useState([]);
    const [isToggled, setIsToggled] = useState(false);
    const [itemToggle, setItemToggle] = useState(false)
    const [newItem, setNewItem] = useState({
        user_id: '',
        item_name: '',
        description: ''
})
 
    useEffect(() => {
        fetch('http://localhost:3001/data/user/items', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({username: Cookies.get('Username')})
        })
        .then(res => res.json())
        .then(res => setUserItems(res))
    }, []) // add a handler for a response saying '0 items match criteria'

    function saveButton() {
        console.log((userItems))
        fetch('http://localhost:3001/data/user/items', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userItems)
        })
    }

    function editButton() {
        if (isToggled === true) {
            setIsToggled(false)
        } else {
            setIsToggled(true)
        }
    }

    function newItemButton() {
        if (isToggled === true) {
            setItemToggle(false)
        } else {
            setItemToggle(true)
        }
    }

    function createItem() {
        
    }

    function deleteButton() {

    }


    const handleChange = (e) => {
        const clonedData = [...userItems]
        let itemId = e.target.id - 1
        clonedData[itemId][e.target.name] = e.target.value
        setUserItems(clonedData)
    }

    if(!userItems) {
        return (
            <>
                No Items
            </>
        )
    } 

    {if (isToggled == false) { // stretch goal: Refactor this mess 
        return (
            <div>
                <button onClick={editButton}>Edit Mode On</button>
                {userItems.map((item) => {
                return( 
                    <form>
                        <input type='text' id={item.id} name='item_name'  value={item.item_name} onChange={(e) => handleChange(e)}/>

                        Description :<input type='text' id={item.id} name='description' value={item.description} onChange={(e) => handleChange(e)}/>

                        Quantity: <input type='text' id={item.id} name='quantity' value={item.quantity} onChange={(e) => handleChange(e)}/>

                    </form>

                )})}
                <button onClick={saveButton} title="Save Changes">Save Changes</button>
            </div>
        )
    } else {
        return (
            <div>
                <button onClick={editButton}>Edit Mode Off</button>
                <button onClick={createItem}>Create New Item</button>
                <div>
                    {/* <CreateItem /> */}
                </div>
                {userItems.map((item) => {
                return(
                    <div className='inventoryContainer'>
                        <div className='itemContainer'>
                            <p className='infoContainer'>
                            {item.item_name}
                            </p>
                            <p className='infoContainer'>
                            Description: {item.description}
                            </p>
                            <p className='infoContainer'>
                            Quantity: {item.quantity}
                            </p>
                        </div>
                    </div>
            )})}
            </div>
        )
    }
}}

export default UserProfile