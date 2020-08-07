function f(x){
    return Promise.resolve(x + 1);
}

function g(x){
    return x * 2;
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
    .then(x => g(f(x)))
    .then(logIdentity);

//It breaks the Functor Laws


