
const SHOWING = "noShow";
const user = window.localStorage.getItem("user_name");
const grettingUser = document.getElementById("grettingUser");
const user_name = document.getElementById("user_name");
const formContainer = document.querySelector(".formContainer");

console.log(user, user_name)

const greetingUser = (pUser) => {
  grettingUser.innerHTML = `Hello!!! ${pUser}`;
}

if(user !== null){
  formContainer.classList.add(SHOWING);
  greetingUser(user);
} else {
  formContainer.classList.remove(SHOWING);
  greetingUser("Guest");
}