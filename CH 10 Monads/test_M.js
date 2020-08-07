import M from './M';

function logIdentity(n){
    console.log(n);
    return n;
}

function incrementAsM(n){
    return M(n+1)
}

M(1)
    .flatMap(incrementAsM)
    .map(logIdentity)
    //M(2)
