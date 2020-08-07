import { List } from 'immutable';

const emptyList = List();
console.log(emptyList);
// List []

const list = List([
    { name: 'Rhodes' },
    { name: 'Malaga' }
]);
console.log(list)
// List [{ name: 'Rhodes' }, { name: 'Malaga' }]

//Editing
const newList = list.set(0, { name: 'Riomaggiore' });
console.log(newList)
// List [{ name: 'Riomaggiore' }, { name: 'Malaga' }]
console.log(list === newList);
//false

//Adding
const newList2 = list.push({name: 'Funchal'});
console.log(newList2)
// List [{ name: 'Rhodes' }, { name: 'Malaga' }, { name: 'Funchal' }]

const newList3 = list.concat([{name: 'Funchal'}]);
console.log(newList3)
// List [{ name: 'Rhodes' }, { name: 'Malaga' }, { name: 'Funchal' }]


//Deleting
const newList4 = list.delete(0);
console.log(newList4)
// List [{ name: 'Malaga' }]


//Clear
const newList5 = list.clear();
console.log(newList5)
// List []