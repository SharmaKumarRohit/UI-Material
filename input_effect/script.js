const password = document.getElementById("password");
const img = document.querySelector(".toggle");

img.addEventListener("click", () => {
  if (password.type === "password") {
    password.type = "text";
    img.src = "eye-line.png";
  } else {
    password.type = "password";
    img.src = "eye-off-line.png";
  }
});
