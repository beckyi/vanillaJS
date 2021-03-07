class $Collector {
  constructor(){
    this.APP = document.getElementById("app");
    this.script_area = document.getElementById("ADD_SCRIPT");
  }

  //add child element
  render(element){
    this.APP.innerHTML = ""; //init
    this.APP.appendChild(element);
  }

  //add js
  setScript(module){
    $JSCRIPT[module].forEach((name)=>{
      const _script = document.createElement("script");

      _script.setAttribute("type", "text/javascript");
      _script.setAttribute("src", `./src/components/${module.toLowerCase()}/${name}.js`);
      _script.setAttribute("async", "");
      // _script.setAttribute("crossorigin", "anonymous");
  
      this.script_area.appendChild(_script); //add js
    });
  }
}