
const $dictionary = {
  MOMENT: "MOMENT",
  FILEPATH: "FILEPATH",
  DYNAMICMEMO: "DYNAMICMEMO"
};

const $IHTML = {
  [$dictionary.MOMENT] : `<div class="baseground">
  <div id="clockContainer">
    <h3 id="tickDay"></h3>
    <h1 id="ticktok"></h1>
  </div>
  <div class="grettingContainer">
      <h2 id="grettingUser"></h2>
      <div class="formContainer">
        <input id="user_name" placeholder="What's your name?"/>
      </div>
  </div>
  </div>`
};

const $JSCRIPT = {
  [$dictionary.MOMENT] : ["clock","input"]
}

const $getDicInform = (module) => {
  const script_area = document.getElementById("ADD_SCRIPT");
  const element = document.createElement("div");

  script_area.innerHTML = ""; //init

  element.id = `${module.toLowerCase()}_Wrapper`;
  element.classList.add("wrapper");
  element.innerHTML = $IHTML[module];

  element.onload = (event) => {
    //HTML과 script가 로드된 시점에 발생 (before onload)
    console.log("wrapper ONLOAD", event)
  };
  
  element.addEventListener("load", (event) => {
    //HTML과 script가 로드된 시점에 발생 (before onload)
    console.log("wrapper load", event)
    $JSCRIPT[module].forEach((name)=>{
      const _script = document.createElement("script");

      _script.setAttribute("type", "text/javascript");
      _script.setAttribute("src", `./src/components/${module.toLowerCase()}/${name}.js`);
      _script.setAttribute("async", "");
      // _script.setAttribute("crossorigin", "anonymous");
  
      script_area.appendChild(_script); //add js

    });
  });

  return element;
}