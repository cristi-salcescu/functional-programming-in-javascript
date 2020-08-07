function range(from, to){
    let count = from;
    return function(){
      if(count < to){
        const result = count;
        count += 1;
        return result;
      } else {
        return undefined;
      }
    }
  }
  
export default range;