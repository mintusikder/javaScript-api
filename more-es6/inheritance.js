class Vehical {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  move() {
    console.log("ami colte pari");
  }
}

class Bus extends Vehical {
  constructor(name, price, seat) {
    super(name, price);
    this.seat = seat;
  }
  routs() {
    console.log("dhaka to cox");
  }
}

const greenLine = new Bus("mintu", "3000", 40)
console.log(greenLine)

class Track extends Vehical {
  constructor(name, price, load) {
    super(name, price);
    this.load = load;
  }
}
