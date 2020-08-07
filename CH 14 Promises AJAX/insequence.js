function fetchDictionaries(){
    return fetch('http://localhost:3000/dictionaries')
        .then(toJson);
}

function fetchTodos(){
    return fetch('http://localhost:3000/todos')
        .then(toJson);
}

function logIdentity(x){
  console.log(x);
  return x;
}

function toJson(response){
  return response.json();
}

fetchDictionaries()
    .then(fetchTodos)
    .then(logIdentity);

