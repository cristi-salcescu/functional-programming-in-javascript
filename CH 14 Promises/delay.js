function delay(interval){
    return new Promise(function(resolve){
        return setTimeout(resolve, interval);
    });
}

function logDone(){
    console.log('Done');
}

delay(1000)
    .then(logDone);