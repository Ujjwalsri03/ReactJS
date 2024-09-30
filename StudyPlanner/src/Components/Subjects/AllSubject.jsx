// import React from 'react';

// function Subject({ subject, updateHours }) {
//   return (
//     <div className="subject">
//       <span>{subject.name}</span>
//       <button onClick={() => updateHours(-1)} disabled={subject.hours === 0}>
//         -
//       </button>
//       <span>{subject.hours} hours</span>
//       <button onClick={() => updateHours(1)}>+</button>
//     </div>
//   );
// }

// export default Subject;


import React from 'react'
import styles from "./AllSubject.module.css"

function Subject({subject, updateHours}) {
  return (
    <div className={styles.output}>
        <div className={styles.nameDiv}>{subject.name}</div>
        <div className={styles.outputBtns}>
            <button onClick={() => updateHours(-1)}
            disabled={subject.hours === 0}
            className={styles.minus}
            >
                -
            </button> 
            <span>{subject.hours} Hours</span>
            <button className={styles.minus} onClick={() => updateHours(1)}>
                +
            </button>
        </div>
    </div>
  )
}

export default Subject
