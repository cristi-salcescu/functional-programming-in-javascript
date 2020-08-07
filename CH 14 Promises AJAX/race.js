const dictionariesPromise = fetch('http://localhost:3000/dictionaries').then(toJson);
const todosPromise = fetch('http://localhost:3000/todos').then(toJson);

function logIdentity(x){
  console.log(x);
  return x;
}

function toJson(response){
  return response.json();
}

Promise.race([
  dictionariesPromise,
  todosPromise
]).then(logIdentity);

