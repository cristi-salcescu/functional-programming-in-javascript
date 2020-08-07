function toJson(response){
  return response.json();
}

function logIdentity(x){
  console.log(x);
  return x;
}

function logError(errorMsg){
  console.error(errorMsg);
}

fetch('https://api.github.ssscom/gists/public')
  .then(toJson)
  .then(logIdentity)
  .catch(logError);