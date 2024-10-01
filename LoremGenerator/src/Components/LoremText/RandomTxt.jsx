import React from 'react'
import styles from './Random.module.css'

function RandomTxt({text}) {
  return (
    <div className={styles.loremTxt}>
        {text.map((paragraph, index) => (
        <p className={styles.text} key={index}>({index + 1 }){paragraph}</p>
        ))}
    </div>
  )
}

export default RandomTxt