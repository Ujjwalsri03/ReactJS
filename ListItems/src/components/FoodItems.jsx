import React from 'react'
import Item from './item'

const FoodItems = ({items}) => {
    const handleBuyButton = (item) =>{
        console.log(`${item} Button clicked`)
    }
  return (
    <ul className="list-group">
            {items.map((item) => <Item key={item} food ={item} handleOnClick={ () => handleBuyButton(item)}/> ) 
            }
    </ul>
  )
}

export default FoodItems