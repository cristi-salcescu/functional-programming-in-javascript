function update(model, action){
  switch(action.type){
    case 'GenerateNumber' : {
      const command = { name: 'Random.generate', resultMessage : 'SetNumber' };
      return [model, command];
    }
    case 'SetNumber' : {
      const newModel = { ...model, number: action.payload };
      const command = { name: 'Cmd.none' };
      return [newModel, command];
    }
    default : {
      const command = { name: 'Cmd.none' };
      return [model, command];
    }
  }
}

const [model, command] = update({}, 'GenerateNumber');
console.log(model);
console.log(command);
//{}
//{name: "Cmd.none"}