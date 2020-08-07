function forEach(callback){
    return function(generate){
        let value = generate();
        // eslint-disable-next-line functional/no-loop-statement
        while(value !== undefined){
            callback(value);
            value = generate();
        } 
    }

}

export default forEach;