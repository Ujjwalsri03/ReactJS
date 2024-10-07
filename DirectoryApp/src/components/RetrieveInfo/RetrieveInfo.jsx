import React, { useState } from 'react';
import styles from './Retrieve.module.css'
function RetrieveInformation() {
  const [aadharNumber, setAadharNumber] = useState('');
  const [person, setPerson] = useState(null);

  const handleRetrieve = () => {
    const savedData = JSON.parse(localStorage.getItem('persons')) || [];
    const foundPerson = savedData.find((p) => p.aadhar === aadharNumber);

    if (foundPerson) {
      setPerson(foundPerson);
    } else {
      setPerson(null);
      alert('No match found');
    }
  };

  const handleDelete = () => {
    const savedData = JSON.parse(localStorage.getItem('persons')) || [];
    const updatedData = savedData.filter((p) => p.aadhar !== aadharNumber);

    if (updatedData.length !== savedData.length) {
      localStorage.setItem('persons', JSON.stringify(updatedData));
      alert('Person deleted successfully');
      setPerson(null);
      setAadharNumber('');
    } else {
      alert('Person not found or already deleted.');
    }
  };

  return (
    <div className={styles.container}>
      <h1>Retrieve Information</h1>
      <div className={styles.searchInput}>
        <label>
          Aadhar Number:
          <input
            type="text"
            placeholder='Enter Aadhar no. to search'
            value={aadharNumber}
            onChange={(e) => setAadharNumber(e.target.value)}
          />
        </label>
        <button className={styles.retrieveBtn} onClick={handleRetrieve}>Retrieve</button>
      </div>

      {person && (
        <div className={styles.SearchOutput}>
          <h3>Person Details:</h3>
          <p>Name: {person.name}</p>
          <p>Date of Birth: {person.dob}</p>
          <p>Aadhar Number: {person.aadhar}</p>
          <p>Mobile Number: {person.mobile}</p>
          <p>Age: {person.age}</p>
          <button className={styles.deleteBtn} onClick={handleDelete}>Delete</button>
        </div>
      )}
    </div>
  );
}

export default RetrieveInformation;
