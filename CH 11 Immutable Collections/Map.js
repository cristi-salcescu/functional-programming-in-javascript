import { Map } from 'immutable';

const countryMap = Map({
    "1": { name: 'Italy'},
    "2": { name: 'Portugal'},
    "3": { name: 'UK'}
});
console.log(countryMap);

console.log(countryMap.get("3"));
//{ name: 'UK' }

const newMap = countryMap.set("2", { name: 'Spain'});
console.log(newMap.get("2"));
//{ name: 'Spain' }

const newMap2 = countryMap.delete("3");
console.log(newMap2.has("3"));
//false
console.log(newMap2.get("3"));
//undefined
