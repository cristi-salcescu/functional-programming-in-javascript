//Identity Law

function identity(n){
    return n;
}

Promise.resolve(1)
    .then(identity)
    //Promise 1
    
//Composition Law

function f(x){
    return x + 1;
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
    .then(logIdentity)

Promise.resolve(1)
    .then(x => g(f(x)))
    .then(logIdentity)

