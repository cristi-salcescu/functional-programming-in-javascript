import M from './M';

function f(){
    return M(2)
}

function g(){
    return M(3)
}

function logIdentity(n){
    console.log(n);
    return n;
}

//Left identity: M(x).flatMap(f) === f(x)
M(1)
    .flatMap(f)
    .map(logIdentity);
    //M(2)

f(1)
    //M(2)

//Right identity: m.flatMap(M) === m
M(1)
    .flatMap(M)
    .map(logIdentity);
    //M(1)

//Associativity
M(1)
    .flatMap(f)
    .flatMap(g)
    .map(logIdentity)
    //M(3)

M(1)
    .flatMap(n => f(n).flatMap(g))
    .map(logIdentity)
    //M(3)