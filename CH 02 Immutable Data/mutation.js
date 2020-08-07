const counter = { 
  value: 1 
};

counter.value = 2;
delete counter.value;
Object.assign(counter, { value: 2 });

//Modifying properties of existing object not allowed.