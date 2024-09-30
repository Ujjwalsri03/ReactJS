import React, { useState, useEffect } from 'react';
import Subject from './Components/Subjects/AllSubject';
import AddSubjectForm from './Components/AddSubject/AddSubject';

function App() {
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    const storedSubjects = localStorage.getItem('subjects');
    if (storedSubjects) {
      setSubjects(JSON.parse(storedSubjects));
    }
  }, []);

  
  const addSubject = (name, hours) => {
    const updatedSubjects = [...subjects, { name, hours }];
    setSubjects(updatedSubjects);
    localStorage.setItem('subjects', JSON.stringify(updatedSubjects)); // Store in localStorage
  };

  // Function to update hours for a subject
  const updateHours = (index, plusMinus) => {
    const newSubjects = [...subjects];
    newSubjects[index].hours += plusMinus;
    setSubjects(newSubjects);
    localStorage.setItem('subjects', JSON.stringify(newSubjects)); // Update in localStorage
  };

  return (
    <div
      className="App"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '3rem',
        boxShadow: '0px 0px 7px black',
        width: '50%',
        margin: 'auto',
        marginTop: '6rem',
        borderRadius: '5px',
      }}
    >
      <h1
        style={{
          paddingBottom: '1.4rem',
          fontFamily: 'monospace',
          fontSize: '35px',
          fontStyle: 'oblique',
        }}
      >
        Self Study Planner
      </h1>
      <AddSubjectForm addSubject={addSubject} />
      {subjects.map((subject, index) => (
        <Subject
          key={index}
          subject={subject}
          updateHours={(delta) => updateHours(index, delta)}
        />
      ))}
    </div>
  );
}

export default App;
