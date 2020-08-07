//MODEL
const initialModel = {
    number: 0
};

//MESSAGES
function Increment(){
    return {
        type : Increment.name
    }
}

function Decrement(){
    return {
        type : Decrement.name
    }
}

//UPDATE
function reducer(model = initialModel, action){
    switch(action.type){
        case Increment.name: 
            return { ...model, number: model.number + 1 };
        case Decrement.name: 
            return { ...model, number: model.number - 1 };
        default:
            return model; 
    }
}

export { reducer, Increment, Decrement };