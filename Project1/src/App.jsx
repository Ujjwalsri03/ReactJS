import React from 'react'
import styles from './App.module.css'
import Display from './components/Display'
import ButtonsContainer from './components/ButtonsContainer'
import Container from './components/Container'

const App = () => {
  
  return (
    <Container>  
      <div className={styles.calculator}>
       <Display></Display>
        <ButtonsContainer></ButtonsContainer>
      </div>
    </Container>
  )
}

export default App
