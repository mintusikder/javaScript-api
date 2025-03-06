const products = [
  { id: 1, name: "apple", color: "red", price: 90000, brand: "apple" },
  { id: 2, name: "iphone", color: "black", price: 80000, brand: "apple" },
  { id: 3, name: "samsung", color: "white", price: 70000, brand: "samsung" },
  { id: 4, name: "oppo", color: "red", price: 60000, brand: "oppo" },
  { id: 5, name: "vivo", color: "blu", price: 50000, brand: "vivo" },
];

//filter--------------
const product2 = products.filter(p=> p.brand === "apple")
console.log(product2)

//find------------
const singleProduct = products.find(p=> p.id === 3)
// console.log(singleProduct)

//forEach---------------

// products.forEach(p => console.log(p))

//map ----------------
const newProducts = products.map(p=>{
    if(p.brand === "apple"){
        p.price = p.price + 100
    }
    return p
})

// console.log(newProducts)