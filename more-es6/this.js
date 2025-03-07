// const person = {
//   name: "mintu",
//   action: function () {
//     console.log(this.name);
//   },
// };
// person.action();

class Person {
  #status;
  constructor(name, age, status) {
    this.name = name;
    this.age = age;
    this.#status = status;
  }
  sleep() {
    console.log(`${this.name} sleep at 10PM`);
  }
  action() {
    console.log(this.#status);
  }
}
const mintuSikder = new Person("mintn", 12, "single");
mintuSikder.action();
