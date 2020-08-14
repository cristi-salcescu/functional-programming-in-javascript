//MODEL
const initialModel = {
    todos: []
};

//MESSAGES
function LoadTodos(){
    return {
        type: LoadTodos.name,
        payload: {
          request:{
            url:'/todos'
          }
        }
      }
}

//UPDATE
function reducer(model = initialModel, action){
    switch(action.type){
        case `${LoadTodos.name}_SUCCESS`: 
            return { 
                ...model, 
                todos: action.payload.data 
            };
        default:
            return model;
    }
}

export { reducer, LoadTodos };