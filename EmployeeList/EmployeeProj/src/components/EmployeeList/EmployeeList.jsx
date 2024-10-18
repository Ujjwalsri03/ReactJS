import React from 'react'
import styles from './EmployeeList.module.css'

function EmployeeList(props) {
  return (
    <>
      <h1 className={styles.header}>Employee List</h1>
      {props.employees.map((data) => (
        <div key={data.id} className={styles.employeeCard}>
          <span>{data.first_name} {data.last_name} - {data.age} years old.</span>
          <button
            onClick={() => props.dispatch({ type: "ADD_TO_TEAM_LIST", payload: data })}
            className={styles.addButton}
          >
            ADD
          </button>
        </div>
      ))}
    </>
  )
}

export default EmployeeList;
