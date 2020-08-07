const products = [
  {id:1, name: 'apple'},
  {id:2, name:'mango'}
];

const id = 1;
let product;
for(let i=0; i<products.length; i++){
  if(products[i].id === id){
    product = products[i];
    break;
  }
}

console.log(product)


const product1 = products.find(p => p.id === id);
console.log(product1)