const book = {
    title : "How JavaScript Works",
    author : "Douglas Crockford"
};

for (const propName in book) {
    console.log(book[propName])
}

Object.keys(book).forEach(propName => {
    console.log(book[propName])
});

const arr = [1, 2, 3];
for (const element of arr) {
  console.log(element);
}

arr.forEach(element => {
    console.log(element);
});