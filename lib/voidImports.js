var globalObject = global || globalThis || this;
globalObject.globalObject = globalObject;

if(!globalObject.voidImportList){
globalObject.voidImportList = [];
}

globalObject.imports = function (){

return Promise.all(globalObject.voidImportList);
  
}

globalObject.emport = function(promis){

  globalObject.voidImportList.push(promis);
  
}


/**  

voidImports is a script I devised to export promises from scripts
and wait for them to finish before continuing. Forget dynamic imports, node modules,
or es modules. voidImports is where it is at.

**/