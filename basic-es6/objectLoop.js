const person = {
  name: "Mintu",
  age: 33,
  country: "BD",
};

// console.log(person['name'])

for (let key in person) {
//   console.log(key);
// console.log(`key : ${key} value : ${person[key]}`)
}


for(let key of Object.entries(person)){
    // console.log(key)
}
for(let [key , value] of Object.entries(person)){
    console.log(`key: ${key} value: ${value}`)
}
