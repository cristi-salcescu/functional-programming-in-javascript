const dictionariesPromise = fetch('http://localhost:3000/dictionaries').then(toJson);
const todosPromise = fetch('http://localhost:3000/todos').then(toJson);
const rejectedPromise = Promise.reject('Error');

function toJson(response){
  return response.json();
}

function logIdentity(x){
    console.log(x);
    return x;
}

Promise.allSettled([
  dictionariesPromise,
  todosPromise,
  rejectedPromise
])
    .then(logIdentity)
    //[
    //{status: "fulfilled", value: Array(1)},
    //{status: "fulfilled", value: Array(1)},
    //{status: "rejected", reason: "Error"}
    //]


