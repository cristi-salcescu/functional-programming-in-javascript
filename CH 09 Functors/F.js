function F(value){

    function map(f){
        const newValue = f(value);
        return F(newValue);
    }

    return {
        map
    }
}

export default F;
