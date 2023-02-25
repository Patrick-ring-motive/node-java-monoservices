const { exec,execSync } = require("child_process");
const fs = require('fs');
var globalObject = global || globalThis || this;
globalObject.globalObject = globalObject;
globalObject.Java={};
Java.loaded=new Promise((resolver) => {Java.loader=resolver;});


void async function javaBuilder(){


var dir=fs.readdirSync('./monoservices/java/');
const dir_length=dir.length;
for(let i=0;i<dir_length;i++){
  if(dir[i].endsWith('.java')){

 await javac(dir[i]);
 const j = dir[i].replace('.java','');
    
 Java[j]=async function(){

   return execAsync('./monoservices/java/java.sh '+j+' '+Array.from(arguments).join(' '));
   
 }   
    
  }
}

Java.loader();



async function execAsync(cmd){
let output='';
    await new Promise((resolver) => {

exec(cmd, (error, stdout, stderr) => {
    if (error) {
      output=error.message;
      resolver(error.message);
      return error.message;
    }
    if (stderr) {  
      output=stderr;
      resolver(stderr);
      return stderr;
    }   
  output=stdout;
  resolver(stdout);
  return stdout;
});
      
    });
return output.trim();
}



async function javac(file){
  
let out = await execAsync('./monoservices/java/javac.sh '+file);
console.log(out);
  
}


}?.();