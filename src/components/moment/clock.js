const DAY = document.getElementById("tickDay");
const CLOCK = document.getElementById("ticktok");
let today = new Date();
const fillChar = (pSTr, pChar, pLength)=>{
  return pSTr.toString().padStart(pLength, pChar);
};
const dayChar = (num)=>{
  return num === 1
    ? "MON"
    : num === 2
    ? "TUE"
    : num === 3
    ? "WED"
    : num === 4
    ? "THU"
    : num === 5
    ? "FRI"
    : num === 6
    ? "SAT"
    : "SUN"; // num === 0
};

DAY.innerHTML = `${today.getFullYear()}.${fillChar(today.getMonth() + 1,"0", 2)}.${fillChar(today.getDate(), "0", 2)}.${dayChar(today.getDay())}`;

const ticktokTime = () => {
  today = new Date();
  CLOCK.innerText = `${fillChar(today.getHours(), "0", 2)}:${fillChar(today.getMinutes(), "0", 2)}:${fillChar(today.getSeconds(), "0", 2)}`;
}

console.log(CLOCK);

const itv = setInterval(ticktokTime, 1000);

window.addEventListener('beforeunload', (event)=>{
  clearInterval(itv);
});