class product {
  constructor(name, price, brand, malik) {
    (this.name = name), (this.price = price), (this.brand = brand);
    this.malik = malik;
  }

  details() {
    console.log("ami details", this.name);
  }
}

const iphone = new product("apple", "2324", "mack", "Mintu");
// console.log(iphone)
iphone.details();

const xiaomi = new product("redmi", 2000, "xiaomi", " jani na");
console.log(xiaomi);
