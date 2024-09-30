import React, { useState, useEffect } from 'react';
import Subject from './Components/Subjects/AllSubject';
import AddSubjectForm from './Components/AddSubject/AddSubject';


function App() {
  
  const [subjects, setSubjects] = useState([]);

  

  useEffect(() => {
    localStorage.setItem('subjects', JSON.stringify(subjects));
  }, [subjects]);

  useEffect(() => {
    const storedSubjects = JSON.parse(localStorage.getItem('subjects'));
    if (storedSubjects) {
      setSubjects(storedSubjects);
    }
  }, []);

  const addSubject = (name , hours) => {
    setSubjects([...subjects, { name, hours }]);
  };

  // Function to update hours for a subject
  const updateHours = (index, plusMinus) => {
    
    const newSubjects = [...subjects];

    const subjectToUpdate = newSubjects[index];
  
    subjectToUpdate.hours += plusMinus;

    setSubjects(newSubjects);
  };

  return (
    <div className="App" 
     style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '3rem',
      boxShadow: '0px 0px 7px black',
      width: '50%',
      margin: 'auto',
      marginTop: '6rem',
      borderRadius:'5px'
    }}>
      <h1 
      style={{
        paddingBottom: '1.4rem',
        fontFamily:'monospace',
        fontSize: '35px',
        fontStyle: 'oblique'
      }}
      > Self Study Planner</h1>
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
