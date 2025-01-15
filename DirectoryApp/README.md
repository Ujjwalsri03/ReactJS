# Directory App

## Description

This web application provides an interface with two main tabs:
1. **Add New Person**: Allows users to add details of a person, validate the data, and store it in local storage.
2. **Retrieve Information**: Allows users to search for a person by their Aadhaar number and retrieve their details.

---

## Features

### Add New Person Tab
1. **Dynamic Table Creation**: 
   - A table with columns: Name, Date of Birth, Aadhaar Number, Mobile Number, Age.
   - Age is auto-calculated based on the entered Date of Birth.

2. **Dynamic Row Addition**:
   - A button at the bottom to create a new row with empty input fields.

3. **Row-Level Actions**:
   - **Save**: Saves the row data to local storage after validating input fields.
   - **Delete**: Deletes the row from the table. If the row is saved, it will also be removed from local storage.

4. **Validations**:
   - Aadhaar Number: Must be exactly 12 digits.
   - Mobile Number: Must be exactly 10 digits.
   - All fields must be filled before saving.

5. **Local Storage Format**:
   The saved data in local storage follows the format:
   ```json
   {
     "people": [
       {
         "name": "John Doe",
         "dob": "2000-01-01",
         "aadharNumber": "123456789012",
         "mobileNumber": "9876543210",
         "age": 25
       }
     ]
   }
# Add New Person and Retrieve Information Web App

## Description

This web application provides an interface with two main tabs:
1. **Add New Person**: Allows users to add details of a person, validate the data, and store it in local storage.
2. **Retrieve Information**: Allows users to search for a person by their Aadhaar number and retrieve their details.

---

## Features

### Add New Person Tab
1. **Dynamic Table Creation**: 
   - A table with columns: Name, Date of Birth, Aadhaar Number, Mobile Number, Age.
   - Age is auto-calculated based on the entered Date of Birth.

2. **Dynamic Row Addition**:
   - A button at the bottom to create a new row with empty input fields.

3. **Row-Level Actions**:
   - **Save**: Saves the row data to local storage after validating input fields.
   - **Delete**: Deletes the row from the table. If the row is saved, it will also be removed from local storage.

4. **Validations**:
   - Aadhaar Number: Must be exactly 12 digits.
   - Mobile Number: Must be exactly 10 digits.
   - All fields must be filled before saving.

5. **Local Storage Format**:
   The saved data in local storage follows the format:
   ```json
   {
     "people": [
       {
         "name": "John Doe",
         "dob": "2000-01-01",
         "aadharNumber": "123456789012",
         "mobileNumber": "9876543210",
         "age": 25
       }
     ]
   }
