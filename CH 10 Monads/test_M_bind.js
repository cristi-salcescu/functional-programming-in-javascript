import M from './M-bind';

function logIdentity(n){
    console.log(n);
    return n;
}

function f(){
    return M.unit(2)
}

function g(){
    return M.unit(3)
}

//1. bind(unit(x), f) ≡ f(x)
M.unit(1)
    .bind(f)
    .map(logIdentity)
    //M 2

//2. bind(m, unit) ≡ m

M.unit(1)
    .bind(M.unit)
    .map(logIdentity)
    //M 1

//3. bind(bind(m, f), g) ≡ bind(m, x ⇒ bind(f(x), g))

M.unit(1)
    .bind(f)
    .bind(g)
    .map(logIdentity)
    //M 3

M.unit(1)
    .bind(x => f(x).bind(g))
    .map(logIdentity)