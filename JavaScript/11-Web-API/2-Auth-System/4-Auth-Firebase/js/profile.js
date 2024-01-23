import {
  getDatabase,
  ref,
  onValue,
  update,
} from "https://www.gstatic.com/firebasejs/10.7.2/firebase-database.js";
import {
  getAuth,
  updatePassword,
} from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";
const logout = document.querySelector("#logout");
const message = document.querySelector("#message");
const edit = document.querySelector("#edit");
const updateEle = document.querySelector("#update");
const firstname = document.querySelector("#firstname");
const lastname = document.querySelector("#lastname");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");

const user = new URLSearchParams(location.search);
console.log(user.get("id"));
const id = user.get("id");
const db = getDatabase();
const userRef = ref(db, "usersdata/" + id);
onValue(userRef, (snapshot) => {
  const findUser = snapshot.val();
  sessionStorage.setItem(id, id);
  message.append(` ${findUser?.firstname}, ${findUser?.lastname}`);
  firstname.value = findUser.firstname;
  lastname.value = findUser.lastname;
  email.value = findUser.email;
  password.value = findUser.password;
  confirmPassword.value = findUser.confirmPassword;
});

logout.addEventListener("click", (e) => {
  e.preventDefault();
  sessionStorage.removeItem(id);
  alert("User loggedout successfully");
  window.location.href = "./index.html";
});

updateEle.addEventListener("click", (e) => {
  e.preventDefault();
  if (confirm("Are you sure to update the details?")) {
    document.querySelector("#form").classList.add("was-validated");
    if (
      firstname.value &&
      lastname.value &&
      email.value &&
      password.value &&
      confirmPassword.value
    ) {
      if (password.value === confirmPassword.value) {
        const userdetails = {
          firstname: firstname.value,
          lastname: lastname.value,
          email: email.value,
          password: password.value,
          confirmPassword: confirmPassword.value,
        };
        console.log(userdetails);
        const updates = {};
        updates["usersdata/" + id] = userdetails;
        update(ref(db), updates);
        const auth = getAuth();
        const user = auth.currentUser;
        updatePassword(user, userdetails.password)
          .then(() => console.log("Auth password updated"))
          .catch((error) => alert(error));
        sessionStorage.removeItem(id);
        alert("User updated successfully");
        window.location.href = "./index.html";
      } else {
        alert("Password and Confirm Password must be same");
      }
    } else {
      alert("All fields are mandatory");
    }
  }
});
