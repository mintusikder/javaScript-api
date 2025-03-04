const person ={
    name : "Mintu",
    age : 33,
    country: "BD"
}
Object.seal(person)
Object.freeze(person)
person.status = "Not Found"
person.age = 20

console.log(Object.keys(person))
console.log(Object.values(person))
console.log(Object.entries(person))