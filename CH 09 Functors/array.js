function increment(n){
    return n + 1;
}

function double(n){
    return n * 2
}

function identity(n){
    return n;
}

function logIdentity(value){
    console.log(value);
    return value;
}

[1, 2, 3]
  .map(identity)
  .map(logIdentity);
  //1
  //2
  //3

[1, 2, 3]
  .map(increment)
  .map(double)
  .map(logIdentity);
  //4
  //6
  //8

[1, 2, 3]
  .map(x => double(increment(x)))
  .map(logIdentity);
  //4
  //6
  //8