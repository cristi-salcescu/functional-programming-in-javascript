const n = 3;
let isEven = (n % 2 === 0)
  ? true
  : false;

console.log(isEven);

function getPrice(product){
    return product
            ? product.price
                ? product.price
                : product.lastPrice
            : null       
 }

 console.log(getPrice(null));
 console.log(getPrice({lastPrice: 10}));
 console.log(getPrice({price:5, lastPrice: 10}));