import React, { useState, useEffect } from 'react';
import styles from './AddPerson.module.css'

function AddPerson() {
  const [rows, setRows] = useState([]);
  const [isRowVisible, setIsRowVisible] = useState(false);
  const [savedPersons, setSavedPersons] = useState([]);

  useEffect(() => {
    // Load saved persons from localStorage when component mounts
    const savedData = JSON.parse(localStorage.getItem('persons')) || [];
    setSavedPersons(savedData);
  }, []);

  const calculateAge = (dob) => {
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  const handleInputChange = (e, index, field) => {
    const value = e.target.value;
    const updatedRows = [...rows];
    updatedRows[index][field] = value;

    if (field === 'dob') {
      updatedRows[index].age = calculateAge(value);
    }

    setRows(updatedRows);
  };

  const addRow = () => {
    setIsRowVisible(true); // Show input row
    setRows([
      ...rows,
      { name: '', dob: '', aadhar: '', mobile: '', age: '' },
    ]);
  };

  const saveRow = (index) => {
    const row = rows[index];

    if (!row.name || !row.dob || !row.aadhar || !row.mobile) {
      alert('Please fill in all fields.');
      return;
    }
    if (row.aadhar.length !== 12) {
      alert('Aadhar number must be 12 digits.');
      return;
    }
    if (row.mobile.length !== 10) {
      alert('Mobile number must be 10 digits.');
      return;
    }

    const existingData = JSON.parse(localStorage.getItem('persons')) || [];
    const updatedData = [...existingData, row];
    localStorage.setItem('persons', JSON.stringify(updatedData));
    alert('Data saved!');

    // Update the state with the saved data to display it on the UI
    setSavedPersons(updatedData);

    setIsRowVisible(false); // Hide input row after saving
  };

  return (
    <div className={styles.container}>
      <div className={styles.AddTxt}>
        <h2>Add New Person</h2>
      </div>

      {isRowVisible && ( // Conditionally show input form
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Date of Birth</th>
              <th>Aadhar Number</th>
              <th>Mobile Number</th>
              <th>Age</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={index}>
                <td>
                  <input
                  className={styles.input}
                    type="text"
                    placeholder='Enter name'
                    value={row.name}
                    onChange={(e) => handleInputChange(e, index, 'name')}
                  />
                </td>
                <td>
                  <input
                  className={styles.input}
                    type="date"
                    placeholder='Enter DOB'
                    value={row.dob}
                    onChange={(e) => handleInputChange(e, index, 'dob')}
                  />
                </td>
                <td>
                  <input
                  className={styles.input}
                    type="text"
                    placeholder='Enter your Aadhar no.'
                    value={row.aadhar}
                    onChange={(e) => handleInputChange(e, index, 'aadhar')}
                  />
                </td>
                <td>
                  <input
                  className={styles.input}
                    type="text"
                    value={row.mobile}
                    placeholder='Mobile No. '
                    onChange={(e) => handleInputChange(e, index, 'mobile')}
                  />
                </td>
                <td>{row.age}</td>
                <td>
                  <button className={styles.saveBtn} onClick={() => saveRow(index)}>Save</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <h2 className={styles.savedTxt}>Saved Persons</h2>
      {savedPersons.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Date of Birth</th>
              <th>Aadhar Number</th>
              <th>Mobile Number</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            {savedPersons.map((person, index) => (
              <tr key={index}>
                <td>{person.name}</td>
                <td>{person.dob}</td>
                <td>{person.aadhar}</td>
                <td>{person.mobile}</td>
                <td>{person.age}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No persons saved yet.</p>
      )}

        <button className={styles.addBtn} onClick={addRow}>Add Person</button>
    </div>

    
  );
}

export default AddPerson;