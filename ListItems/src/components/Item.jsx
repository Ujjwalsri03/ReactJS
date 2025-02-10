import React from 'react'
import style from './Item.module.css'

const Item = ({food,bought, handleOnClick}) => {

   
  return (
    
    <li  className={`list-group-item ${bought && 'active'}`}>
    <span>{food}</span>
    <button onClick={handleOnClick} className={style.button}>Buy</button>
    </li>
    
  )
}

export default Item