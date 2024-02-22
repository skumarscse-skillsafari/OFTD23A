export function userReducer(users, action) {
  // action => {type: , payload: }
  console.log(users);
  console.log(action);
  switch (action.type) {
    case "ADD_USER":
      return [...users, action.payload];
    case "DELETE_USER":
      return users.filter((user) => user.id !== action.payload);
    case "UPDATE_USER":
      return users.map((user) =>
        user.id === action.payload.id ? action.payload : user
      );
    default:
      return users;
  }
}
