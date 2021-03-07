export default class Collector {
  constructor(){
    console.log("start Collector");
  }

  setScript(param){
    console.log(param)
  }

  render(htmlText){
    const APP = document.getElementById("app");
    APP.innerHTML = ""; //init
    APP.innerHTML = htmlText;
  }
}