const userDetails = {
  name: "John",
  age: 23,
  isAdmin: false,
};

const subjects = ["English", "Maths", "Physics", "Chemistry"];

const displayMessage = (message) => {
  console.log(message);
};

module.exports = {
  userDetails: userDetails,
  subjects: subjects,
  displayMessage: displayMessage,
};
