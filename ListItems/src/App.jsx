import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import FoodItems from './components/FoodItems'
import ErrorMsg from './components/ErrorMsg'
import Container from './components/Container'
import FoodInput from './components/FoodInput'


const App = () => {
    // let foodsName = [ 'Tamato', 'Ghee', 'Panner', 'mushroom'];

    let[foodsName, setFoodsName] = useState(['Dal', 'Rice', 'Patato'])
    let [text , setText] = useState("New items ");
    let emptyMsg = "FoodItems are empty please add some item."

    const handleOnchange = (event) => {
        if(event.key === 'Enter'){
            let newFoodItem = event.target.value;
            let newFoodsName = [...foodsName, newFoodItem];
            setFoodsName(newFoodsName)
        }
        // console.log(event.target.value)
        // setText(event.target.value);
    }

   
  return (
    <Container>
        <h1>Healthy Food</h1>
        <ErrorMsg items={foodsName} msg={emptyMsg} />
        <FoodInput handleOnchange={handleOnchange}></FoodInput>
        <FoodItems items={foodsName} ></FoodItems>
    </Container>
  )
}

export default App