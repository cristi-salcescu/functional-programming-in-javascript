function M(value){

    function map(f){
        const newValue = f(value);
        return M(newValue);
    }

    function ap(otherMonad){
        const f = value;//The value must be a function
        const newValue = otherMonad.map(f);
        return newValue;
    }

    return {
        map,
        ap
    }
}

function logIdentity(n){
    console.log(n);
    return n;
}


function add(x){
    return function(y){
        return x + y;
    }
}

M(1)
    .map(add) //The value is now a function
    .ap(M(2))
    .map(logIdentity)

M(2)
    .map(add) //The value is now a function
    .ap(M(1))
    .map(logIdentity) 

function multiply(x){
    return function(y){
        return function(z){
            return x * y * z;
        }
    }
}

M(2)
    .map(multiply) //The value is now a function
    .ap(M(3)) //The value is still a function
    .ap(M(4))
    .map(logIdentity) 