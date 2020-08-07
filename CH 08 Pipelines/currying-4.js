import { curry } from 'lodash/fp';

const words = [
    'ability',
    'calculate',
    'calendar',
    'double',
    'door'
  ];

const startsWith = curry(function(term, word) {
    return word.startsWith(term);
});

function trace(value){
    console.log(value);
    return value;
}

words
.filter(startsWith('a'))
.forEach(trace);