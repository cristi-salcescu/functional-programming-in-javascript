
//Left Identity
//M(x).flatMap(f) === f(x)

Promise.resolve(1)
  .then(f)
  .then(logIdentity);
  //Promise 2

f(1)
  //Promise 2

//Right Identity
//monad.flatMap(M) === monad

function unit(value){
  return Promise.resolve(value)
}

Promise.resolve(1)
  .then(unit)
  .then(logIdentity);
  //Promise 1

//Associativity
//m.flatMap(f).flatMap(g) ==== m.flatMap(x => f(x).flatMap(g))

function f(x){
  return Promise.resolve(x + 1);
}

function g(x){
  return Promise.resolve(x * 2);
}

function logIdentity(value){
  console.log(value);
  return value;
}

Promise.resolve(1)
  .then(f)
  .then(g)
  .then(logIdentity);

Promise.resolve(1)
  .then(x => f(x).then(g))
  .then(logIdentity);

