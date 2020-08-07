const words = [
    'ability',
    'calculate',
    'calendar',
    'double',
    'door'
  ];

function startsWith(term){
    return function(word){
        return word.startsWith(term);
    }
}

function trace(value){
    console.log(value);
    return value;
}

words
.filter(startsWith('a'))
.forEach(trace);