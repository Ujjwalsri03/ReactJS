import { useReducer } from 'react';
import EmployeeList from './components/EmployeeList/EmployeeList';
import TeamList from './components/TeamList/TeamList';
import employeeJson from './static/employee.json';
import './App.css';

// Reducer function to manage the state
const reducerFn = (state, action) => {
  console.log("Reducer called with action: ", action);

  switch (action.type) {
    case "ADD_TO_TEAM_LIST":
      const employeeToAdd = action.payload;

      // Check if the employee is already in the team list
      const alreadyInTeam = state.teamList.some(emp => emp.id === employeeToAdd.id);
      if (alreadyInTeam) {
        return state;  // Do nothing if the employee is already in the list
      }

      // Add the employee to the team list
      return { ...state, teamList: [...state.teamList, employeeToAdd] };

    case "REMOVE_FROM_TEAM_LIST":
      // Remove the employee from the team list
      const updatedTeamList = state.teamList.filter(emp => emp.id !== action.payload.id);
      return { ...state, teamList: updatedTeamList };

    case "CALCULATE_AVERAGE_AGE":
      const totalAge = state.teamList.reduce((sum, emp) => sum + emp.age, 0);
      const averageAge = (totalAge / state.teamList.length || 0).toFixed(2);
      return { ...state, averageAge };

    case "SORT_LIST_BY_AGE":
      // Sort team members by age
      const sortedTeamList = [...state.teamList].sort((a, b) => a.age - b.age);
      return { ...state, teamList: sortedTeamList };

    default:
      return state;
  }
};

// Initial state for the app
const initState = {
  employeeList: employeeJson,
  teamList: [],
  averageAge: 0
};

function App() {
  // Using useReducer for state management
  const [state, dispatch] = useReducer(reducerFn, initState);

  return (
    <>
      <h1>Employee Management App</h1>
      <div style={{
        display: "flex",
        gap: "2rem",
        justifyContent: "center"
      }}>
        {/* Employee List Component */}
        <div style={{ border: "2px solid black", padding: "1rem", width: "45%" }}>
          <EmployeeList employees={state.employeeList} dispatch={dispatch} />
        </div>

        {/* Team List Component */}
        <div style={{ border: "2px solid black", padding: "1rem", width: "45%" }}>
          <TeamList employees={state.teamList} averageAge={state.averageAge} dispatch={dispatch} />
        </div>
      </div>
    </>
  );
}

export default App;
