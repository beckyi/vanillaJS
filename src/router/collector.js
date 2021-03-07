class $Collector {
  constructor(){
    console.log("start Collector");
  }

  setScript(param){
    console.log(param)
  }

  render(element){
    const APP = document.getElementById("app");
    APP.innerHTML = ""; //init
    APP.appendChild(element);
  }
}