const signupForm = document.querySelector("#signup-form");
const firstName = document.querySelector("#firstname");
const lastName = document.querySelector("#lastname");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");
const submitBtn = document.querySelector("#submit-btn");

submitBtn.addEventListener("click", (e) => {
  signupForm.classList.add("was-validated");
  e.preventDefault();
  if (
    firstName.value &&
    lastName.value &&
    email.value &&
    password.value &&
    confirmPassword.value
  ) {
    if (password.value === confirmPassword.value) {
      const userDetails = {
        id: Math.random().toString(16).split(".")[1],
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        password: password.value,
        confirmPassword: confirmPassword.value,
      };
      console.log(userDetails);
      localStorage.setItem(userDetails.id, JSON.stringify(userDetails));
      alert("User created successfully");
      // window.location.reload();
      firstName.value = "";
      lastName.value = "";
      email.value = "";
      password.value = "";
      confirmPassword.value = "";
      signupForm.classList.remove("was-validated");
    } else {
      alert("Password and confirm password must be same");
    }
  } else {
    alert("Fields should not be empty");
  }
});
