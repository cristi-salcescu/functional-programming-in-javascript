import { List } from 'immutable';

const list = List([
    { name: 'Cascais', country: 'Portugal'},
    { name: 'Sintra ', country: 'Portugal' },
    { name: 'Nerja ', country: 'Spain' },
]);

function inCountry(country){
    return function(destination){
        return destination.country === country;
    }
}

list
    .filter(inCountry('Portugal'))
//List [{ name: 'Cascais', country: 'Portugal' },
// { name: 'Sintra ', country: 'Portugal' }]

const destination = list.find(inCountry('Portugal'));
console.log(destination)
//{ name: 'Cascais', country: 'Portugal' }

const otherDestination = list.findLast(inCountry('Portugal'));
console.log(otherDestination);
//{ name: 'Sintra ', country: 'Portugal' }