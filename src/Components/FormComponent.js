import React, { useState } from "react";
import ListComponent from "./ListComponent";
import "./FormComponent.css";

const FormComponent = (props) => {
  const [value, updatedValue] = useState("");

  const inputHandler = (data) => {
    updatedValue(data.target.value);
  };

  const addHandler = (e) => {
    e.preventDefault();
    //console.log(value);
   props.addValue(value);
    
  };

  return (
    <div className="container-fluid">
      <form onSubmit={addHandler}>
        <div class="input">
          <label for="exampleFormControlInput1" class="form-label">
            Enter Text :-
          </label>
          <input
            type="text"
            class="form-control"
            placeholder="Enter the value"
            onChange={inputHandler}
          />
        </div>
        <div className="btn-submit">
          <button type="submit" className="btn btn-success" onClick={props}>
            SUBMIT
          </button>
        </div>
      </form>
      <ListComponent/>
    </div>
  );
};

export default FormComponent;
