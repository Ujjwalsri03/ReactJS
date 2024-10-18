import React from 'react'
import styles from './TeamList.module.css'

function TeamList(props) {
  return (
    <>
      <h1 className={styles.header}>Team List</h1>
      <div>
        <span className={styles.avgAge}>Average Age: {props.averageAge}</span>
        <br />
        <button onClick={() => props.dispatch({ type: "CALCULATE_AVERAGE_AGE", payload: {} })} className={styles.button}>
          Calculate Average Age
        </button>
        <button onClick={() => props.dispatch({ type: "SORT_LIST_BY_AGE", payload: {} })} className={styles.button}>
          Sort by Age
        </button>
      </div>
      {props.employees.map((data) => (
        <div key={data.id} className={styles.teamCard}>
          <span>{data.first_name} {data.last_name} - {data.age} years old.</span>
          <button onClick={() => props.dispatch({ type: "REMOVE_FROM_TEAM_LIST", payload: data })} className={styles.removeButton}>
            REMOVE
          </button>
        </div>
      ))}
    </>
  )
}

export default TeamList;
