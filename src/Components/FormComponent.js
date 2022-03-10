import React, { useState } from "react";

import "./FormComponent.css";

const FormComponent = (props) => {
  const [value, updatedValue] = useState("");
  const [valid, isValid] = useState(true);          // For displaying validation.

  const inputHandler = (event) => {
    console.log("input value",event.target.value);
    if (event.target.value.trim().length > 0) {
      isValid(true);
    }
    updatedValue(event.target.value);
  };

  const addHandler = (e) => {
    e.preventDefault();
    if (value.trim().length === 0) {
      isValid(false);
      return;
    }
    //console.log(value);
    props.addValue(value);
    updatedValue("");
  };
  //.log(props.contentData);
  return (
    <div className="container-fluid">
      <form onSubmit={addHandler}>
        <div class={`input ${!isValid ? 'invalid' : ''}`}>
          <label
            for="exampleFormControlInput1"
            class="form-label"
            style={{ color: !valid ? "red" : "black" }}
          >
            Enter Text :-
          </label>
          <input
            type="text"
            class="form-control"
            placeholder="Enter the value"
            onChange={inputHandler}
            style={{ background: !valid ? "beige" : "white" }}
          />
        </div>
        <div className="btn-submit">
          <button type="submit" className="btn btn-success">
            SUBMIT
          </button>
        </div>
      </form>
      
    </div>
  );
};

export default FormComponent;
