//MODEL
const initialModel = {
    number: 0
};

//COMMANDS
function GenerateNumber(){
    return function(dispatch){
        const number = Math.floor(Math.random() * 100);
        dispatch(SetNumber(number));
    }
}

//MESSAGES
function SetNumber(number){
    return {
        type : SetNumber.name,
        number
    }
}

//UPDATE
function reducer(model = initialModel, action){
    switch(action.type){
        case SetNumber.name: 
            return { ...model, number: action.number };
        default:
            return model; 
    }
}

export { reducer, GenerateNumber };