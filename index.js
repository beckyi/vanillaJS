const APP = document.getElementById("app");
const LIST = document.createElement("ol");
const FUNC = ["MOMENT", "FILEPATH", "DYNAMICMEMO"];

FUNC.forEach((item)=>{
  const _li = document.createElement("li");
  _li.innerText = item;
  LIST.appendChild(_li);
});

LIST.addEventListener("click", (event)=>{
console.log("CLICK",event);
  event.stopPropagation();
  const hash_id = event.target.innerText;
  window.location.hash = `#${hash_id}`;
});

APP.appendChild(LIST);