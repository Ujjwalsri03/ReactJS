import React, { useState } from 'react';
import styles from './AddSubject.module.css'

function AddSubjectForm({ addSubject }) {
  const [subjectName, setSubjectName] = useState('');
  const [subjectHours, setSubjectHours] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (subjectName.trim() && subjectHours >= 0) {
      addSubject(subjectName, parseInt(subjectHours)); 
      setSubjectName(''); 
      setSubjectHours(0);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="text"
        value={subjectName}
        onChange={(e) => setSubjectName(e.target.value)}
        placeholder="Enter subject name"
        className={styles.Subjectinput}
        required
      />
      <input
        type="number"
        value={subjectHours}
        onChange={(e) => setSubjectHours(e.target.value)}
        placeholder="Enter hours"
        min="0"
        className={styles.Numberinput}
        required
      />
      <button className={styles.AddBtn} type="submit">Add Subject</button>
    </form>
  );
}

export default AddSubjectForm;
