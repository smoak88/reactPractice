import Card from "../UI/Card";
import Button from "../UI/Button";
import { useState, useRef } from "react";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  // Changed code to use refs instead of state, pros and cons to each. With refs we don't save any data, just get the current input value.

  // const [enteredUsername, setEnteredUsername] = useState("");
  // const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;
    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    if (+enteredUserAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (>0).",
      });
      return;
    }

    props.onAddUser(enteredName, enteredUserAge);

    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
    // setEnteredUsername("");
    // setEnteredAge("");
  };

  // const usernameChangeHandler = (event) => {
  //   const username = event.target.value;
  //   setEnteredUsername(username);
  // };

  // const ageChangeHandler = (event) => {
  //   const age = event.target.value;
  //   setEnteredAge(age);
  // };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <>
      {error && (
        <ErrorModal
          onConfirm={errorHandler}
          title={error.title}
          message={error.message}
        />
      )}
      <Card>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            // onChange={usernameChangeHandler}
            // value={enteredUsername}
            ref={nameInputRef}
          />
          {/* htmlFor hooks up with the input id to help with screen readers and stuff */}
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            // onChange={ageChangeHandler}
            // value={enteredAge}
            ref={ageInputRef}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
