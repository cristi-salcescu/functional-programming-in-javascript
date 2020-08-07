const words = [
    'ability',
    'calculate',
    'calendar',
    'double',
    'door'
  ];

const startsWith = term => word => {
    return word.startsWith(term);
}

function trace(value){
    console.log(value);
    return value;
}

words
.filter(startsWith('a'))
.forEach(trace);