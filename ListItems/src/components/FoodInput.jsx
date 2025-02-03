import React from 'react'
import Styles from './FoodInput.module.css'

const FoodInput = ({handleOnchange}) => {
   
  return (
    <input type="text" placeholder='Enter Item name ' className={Styles.input} onKeyDown={handleOnchange}/>
  )
}

export default FoodInput