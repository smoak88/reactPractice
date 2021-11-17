import Card from "../UI/Card";

const AddUser = (props) => {
  const addUserHandler = (event) => {
    event.preventDefault();
  };

  return (
    <Card>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" />
        {/* htmlFor hooks up with the input id to help with screen readers and stuff */}
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number" />
        <button type="submit">Add User</button>
      </form>
    </Card>
  );
};

export default AddUser;
