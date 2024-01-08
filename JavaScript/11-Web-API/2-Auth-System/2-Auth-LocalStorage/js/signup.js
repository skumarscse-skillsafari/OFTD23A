const firstName = document.querySelector("#firstname");
const lastName = document.querySelector("#lastname");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");
const submitBtn = document.querySelector("#submit-btn");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
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
  } else {
    alert("Password and Confirm Password not same");
  }
});
