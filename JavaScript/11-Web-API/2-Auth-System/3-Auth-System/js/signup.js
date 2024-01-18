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
      const userdetails = {
        id: Math.random().toString(16).split(".")[1],
        firstname: firstname.value,
        lastname: lastname.value,
        email: email.value,
        password: password.value,
        confirmPassword: confirmPassword.value,
      };
      console.log(userdetails);
      localStorage.setItem(userdetails.id, JSON.stringify(userdetails));
      alert("User created successfully");
      //   window.location.href = "./index.html";
    } else {
      alert("Password and Confirm Password must be same");
    }
  } else {
    alert("All fields are mandatory");
  }
});
