function timeout(interval){
    return new Promise(function(resolve, reject){
        return setTimeout(reject, interval);
    });
}

function logFailed(){
    console.log('Failed');
}

timeout(1000)
    .catch(logFailed);