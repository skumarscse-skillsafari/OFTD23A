import { useReducer, useState } from "react";
import { v4 as uuidv4 } from "uuid";
const UserReducer = () => {
  let initialValue = [
    { id: 1, username: "John", age: 23, isAdmin: true },
    { id: 2, username: "Robert", age: 20, isAdmin: false },
    { id: 3, username: "Mary", age: 22, isAdmin: true },
  ];
  const [users, dispatchUsers] = useReducer(userReducer, initialValue);
  const [newUser, setNewUser] = useState({
    id: "",
    username: "",
    age: 0,
    isAdmin: false,
  });

  function userReducer(users, action) {
    // action => {type: , payload: }
    console.log(users);
    console.log(action);
    switch (action.type) {
      case "ADD_USER":
        return [...users, action.payload];
      case "DELETE_USER":
        return users.filter((user) => user.id !== action.payload);
      default:
        return users;
    }
  }

  function handleInput(e) {
    // console.log(e.target.name);
    // console.log(e.target.value);
    console.log(e);
    const { name, value, checked } = e.target; // {name:..., value:...}
    setNewUser((current) => {
      // console.log(current);
      if (e.target.type === "checkbox") {
        return {
          ...current,
          [name]: checked,
        };
      } else {
        return {
          ...current, // {id:.., username:..., age:..., isAdmin:...}
          [name]: value, // username: "John"
        };
      }
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log({ ...newUser, id: uuidv4() });
    dispatchUsers({ type: "ADD_USER", payload: { ...newUser, id: uuidv4() } });
  }
  return (
    <div>
      <h2>User Reducer</h2>
      <form>
        <p>
          <input
            type="text"
            placeholder="Enter username"
            name="username"
            value={newUser.username}
            onChange={handleInput}
          />
        </p>
        <p>
          <input
            type="number"
            placeholder="Enter user age"
            name="age"
            value={newUser.age}
            onChange={handleInput}
          />
        </p>
        <p>
          isAdmin?:{" "}
          <input
            type="checkbox"
            name="isAdmin"
            checked={newUser.isAdmin}
            onChange={handleInput}
          />
        </p>
        <button>Update</button> <button onClick={handleSubmit}>Add</button>
      </form>
      <hr />
      {users.map((user) => {
        return (
          <div key={user.id}>
            <h2>Username: {user.username}</h2>
            <p>User Age: {user.age}</p>
            <p>isAdmin?: {user.isAdmin ? "Yes" : "No"}</p>
            <button>Update</button>{" "}
            <button
              onClick={() =>
                dispatchUsers({ type: "DELETE_USER", payload: user.id })
              }
            >
              Delete
            </button>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default UserReducer;
