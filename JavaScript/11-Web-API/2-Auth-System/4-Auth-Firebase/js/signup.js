import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";
import {
  getDatabase,
  ref,
  set,
} from "https://www.gstatic.com/firebasejs/10.7.2/firebase-database.js";

const firstname = document.querySelector("#firstname");
const lastname = document.querySelector("#lastname");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");
const register = document.querySelector("#register");

register.addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector("#form").classList.add("was-validated");
  if (
    firstname.value &&
    lastname.value &&
    email.value &&
    password.value &&
    confirmPassword.value
  ) {
    if (password.value === confirmPassword.value) {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
          const db = getDatabase();
          set(ref(db, "usersdata/" + user?.uid), {
            firstname: firstname?.value,
            lastname: lastname?.value,
            email: email?.value,
            password: password?.value,
            confirmPassword: confirmPassword?.value,
          });
          alert("User created successfully");
          setTimeout(() => {
            window.location.href = "./index.html";
          }, 5000);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode);
          console.log(errorMessage);
        });
    } else {
      alert("Password and Confirm Password must be same");
    }
  } else {
    alert("All fields are mandatory");
  }
});
