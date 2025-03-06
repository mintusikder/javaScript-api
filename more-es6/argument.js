function sum(a, b, c) {
  const newArr = [...arguments];
  console.log(newArr);
}

sum(10, 20, 30, 40, 50, 60, 70);


const person ={ name: "mintu", age: 10}

function sum(obj){
    obj.name ="Hero alom"
}
sum(person)
console.log(person)