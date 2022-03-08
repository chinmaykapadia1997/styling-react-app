import FormComponent from './Components/FormComponent';
import ListComponent from './Components/ListComponent';
import './App.css';
import { useState } from 'react';

function App() {

  const [goals, setGoals] = useState('');
  const addGoal = enteredText =>{
    setGoals(oldGoals=>{
      const newGoals = [...oldGoals];
      newGoals.push({text: enteredText, id: Math.random().toString()})
      return newGoals;
    });
  }

  return (
    <div className="App">
      <h2>Welcome to React App Styling </h2>
      <FormComponent addValue={addGoal}/>
      <ListComponent/>
    </div>
  );
}

export default App;
