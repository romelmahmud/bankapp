document.getElementById("btn-submit").addEventListener("click", function () {
  const emailField = document.getElementById("email");
  const email = emailField.value;
  const passwordField = document.getElementById("password");
  const password = passwordField.value;

  if (email === "baaper@sontan.com" && password === "12345") {
    window.location.href = "bank.html";
  } else {
    alert("wrong Credentials");
  }
});
