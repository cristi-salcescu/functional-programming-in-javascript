const words = [
    'ability',
    'calculate',
    'calendar',
    'double',
    'door'
  ];

const stopTo = 'double';
for(let word of words){
    if(word === stopTo){
        break;
    }

    console.log(word);
}

words.every(w => {
  if(w.startsWith(stopTo)){
    return false;
  } else {
    console.log(w);
    return true;
  }
});