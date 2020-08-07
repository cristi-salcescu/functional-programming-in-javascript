function M(value){

    function map(f){
        const newValue = f(value);
        return M(newValue);
    }

    function flatMap(f){
        const newValue = f(value);
        return newValue;
    }

    return {
        map,
        flatMap
    }
}


export default M;