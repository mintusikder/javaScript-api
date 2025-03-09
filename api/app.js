const person = {
  name: "mintu",
  age: 20,
  school: "k.m",
  status: true,
};

const newPerson = JSON.stringify(person);
console.log(newPerson);

const pers = JSON.parse(newPerson);
console.log(pers);
