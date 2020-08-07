const isValid = true;

if(isValid) {
    doSomething()
}

// short circuit
isValid && doSomething()
  
function doSomething(){
    console.log("side-effect");
}