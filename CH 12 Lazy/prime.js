function isPrime(number){
    if (number <= 1){
        return false;
    }

    for (let i=2; i<=number/2; i++)
    {
       if (number % i === 0 )
        return false;
    }
    
    return true;
 }

 for(let i=0; i<10; i++){
   if(isPrime(i)){
      console.log(i)
   }
 }