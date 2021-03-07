
const $dictionary = {
  MOMENT: "MOMENT",
  FILEPATH: "FILEPATH",
  DYNAMICMEMO: "DYNAMICMEMO"
};

const $IHTML = {
  [$dictionary.MOMENT]: `<div class="baseground">
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
  </div>`,
  [$dictionary.FILEPATH]: `<div>FILEPATH</div>`,
  [$dictionary.DYNAMICMEMO]: `<div>DYNAMICMEMO</div>`,
};

const $JSCRIPT = {
  [$dictionary.MOMENT] : ["clock","input"],
  [$dictionary.FILEPATH] : ["index"],
  [$dictionary.DYNAMICMEMO] : ["index"],
}

const $getElement = (module) => {
  const element = document.createElement("div");

  element.id = `${module.toLowerCase()}_Wrapper`;
  element.classList.add("wrapper");
  element.innerHTML = $IHTML[module];

  return element;
}