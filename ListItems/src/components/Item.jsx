import React from 'react'
import style from './Item.module.css'

const Item = ({food, handleOnClick}) => {

   
  return (
    
    <li  className="list-group-item">
    <span>{food}</span>
    <button onClick={handleOnClick} className={style.button}>Buy</button>
    </li>
    
  )
}

export default Item