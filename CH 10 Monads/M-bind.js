export default (function defineMonad(){
    function M(value){
        function map(f){
            const newValue = f(value);
            return M(newValue);
        }

        function bind(f){
            const newValue = f(value);
            return newValue;
        }

        return {
            map,
            bind
        }
    }

    function unit(value){
        return M(value);
    }

    return {
        unit
    }
})();