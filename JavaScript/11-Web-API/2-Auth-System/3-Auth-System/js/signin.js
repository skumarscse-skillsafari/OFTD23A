const email = document.querySelector("#email");
const password = document.querySelector("#password");
const form = document.querySelector("#form");
const login = document.querySelector("#login");

login.addEventListener("click", (e) => {
  e.preventDefault();
  form.classList.add("was-validated");
  if (email.value && password.value) {
    const storedUsers = Object.values(localStorage);
    console.log(storedUsers);
    const storedUsersArr = storedUsers.map((user) => JSON.parse(user));
    console.log(storedUsersArr);
    const findUser = storedUsersArr.find((user) => {
      if (user.email === email.value && user.password === password.value) {
        return user;
      } else {
        alert("User not found");
      }
    });
    if (findUser) {
      sessionStorage.setItem(findUser.id, JSON.stringify(findUser));
      alert("User loggedin successfully");
      window.location.href = `./profile.html?id=${findUser.id}`;
    }
  }
});
