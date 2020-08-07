const courses = [
  {
    title: '2',
    author: '2'
  },
  {
    title: '3',
    author: '3'
  },
  {
    title: '1',
    author: '1'
  }  
];

function by(name){
    return function(a, b){
        return a[name].localeCompare(b[name]);
    }
}

courses
    .slice().sort(by('author'));