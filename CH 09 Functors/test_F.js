import F from './F';

function increment(n){
    return n + 1;
}

function double(n){
    return n * 2
}

function identity(n){
    return n;
}

function logIdentity(value){
    console.log(value);
    return value;
}

//identity laws
F(1).map(identity).map(logIdentity);

//composition laws
F(1).map(increment).map(double).map(logIdentity);
F(1).map(n => double(increment(n))).map(logIdentity);

//chain
F(1)
    .map(increment)
    .map(increment)
    .map(double)
    .map(logIdentity)