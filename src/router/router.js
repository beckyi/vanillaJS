//FIXME :
(function(){
console.log("ROUTER")

  window.addEventListener("DOMContentLoaded", (event) => {
  //   //HTML과 script가 로드된 시점에 발생 (before onload)
console.log("DOMContentLoaded!", event);
  });
  
  window.addEventListener("hashchange", (event) => {  
console.log("hashchange!", event);
    const hash_id = event.newURL ? event.newURL.split("#") : "";
    const _module = hash_id && hash_id[1] ? hash_id[1] : "";
    const _dic = Object.keys($dictionary);
    const collect = new $Collector();

    if(_dic.includes(_module)){
      // 1. add DOM element
      collect.render($getElement(_module));
      // 2. add js
      collect.setScript(_module);
    } else {
      collect.initDom();    //init (module list)
      collect.setScript();  //clear js file
    }

    // chrome or IE (https://codediver.tistory.com/33 [코드 다이버])
    // if (script.readyState) { // IE < 11
    // script.onreadystatechange= function () {
    // if (this.readyState == 'complete' || this.readyState == 'loaded') callback();}
    // } else {
    // _script.onload = function() {}
    // }
    // return renderHTML(el, getHashRoute())
  });
})();


//var fs = require('fs'); //__dirname   //TODO: npm할 때
// var files = fs.readdirSync('/src/components/');
// window.onload((event) => {
// console.log("onload!", event);
// });