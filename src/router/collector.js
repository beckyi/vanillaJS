class $Collector {
  constructor(){
    this.APP = document.getElementById("app");
    this.script_area = document.getElementById("ADD_SCRIPT");
  }

  initDom (){
    const LIST = document.createElement("ol");
    const FUNC = Object.keys($dictionary);

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

    this.render(LIST);
  }

  //add child element
  render(element){
    this.APP.innerHTML = ""; //init
    this.APP.appendChild(element);
  }

  //add js file
  setScript(module){
    this.script_area.innerHTML = ""; //init
    if(module){
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
}