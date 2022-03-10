import FormComponent from './Components/FormComponent';
import ListComponent from './Components/ListComponent';
import './App.css';
import React, { useState } from 'react';

function App() {

  const [goals, setGoals] = useState([{ data: "Welcome"}]);

  const addGoal = enteredText =>{
    setGoals(oldGoals=>{
      const newGoals = [...oldGoals];
      newGoals.unshift({ data: enteredText })
      return newGoals;
    });
  }

   var content = <p>No data:</p>

  if(goals.length > 0){
    content = <ListComponent items={goals} ></ListComponent>
  }
  return (
    <div className="App">
      <h2>Welcome to React App Styling </h2>
      <FormComponent addValue={addGoal}/>
      <ListComponent items={[]}>{content}</ListComponent>
    </div>

  );
}

export default App;
