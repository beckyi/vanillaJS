(function(){
  console.log("ROUTER")

  window.addEventListener("DOMContentLoaded", (event) => {
    //HTML과 script가 로드된 시점에 발생 (before onload)
    console.log("DOMContentLoaded!", event);
  });
  window.addEventListener("hashchange", (event) => {  
  console.log("hashchange!", event);
    const hash_id = event.newURL ? event.newURL.split("#") : "";
    const _module = hash_id && hash_id[1] ? hash_id[1].toLowerCase() : "";
    const script_area = document.getElementById("ADD_SCRIPT");
    script_area.innerHTML = ""; //init
    
    if(_module){
      const _script = document.createElement("script");

      _script.setAttribute("type", "text/javascript");
      _script.setAttribute("src", `./src/components/${_module}/index.js`);
      _script.setAttribute("async", "");
      // _script.setAttribute("crossorigin", "anonymous");
  
      script_area.appendChild(_script); //add js
    } else {

    }

    // chrome or IE (https://codediver.tistory.com/33 [코드 다이버])
    // if (script.readyState) { // IE < 11
    // script.onreadystatechange= function () {
    // if (this.readyState == 'complete' || this.readyState == 'loaded') callback();}
    // } else {
    // _script.onload = function() {}
    // }
    // return renderHTML(el, getHashRoute())
  })
  console.log("ROUTER2")
  

  const temp = new Router();
  console.log(temp, temp.setScript("TEST"));
})();


//var fs = require('fs'); //__dirname   //TODO: npm할 때
// var files = fs.readdirSync('/src/components/');
// window.onload((event) => {
// console.log("onload!", event);
// });