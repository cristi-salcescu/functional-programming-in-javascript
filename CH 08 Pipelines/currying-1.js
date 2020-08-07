const words = [
    'ability',
    'calculate',
    'calendar',
    'double',
    'door'
  ];

function startsWith(word, term){
    return word.startsWith(term);
}

function trace(value){
    console.log(value);
    return value;
}

words
.filter(w => startsWith(w, 'a'))
.forEach(trace);