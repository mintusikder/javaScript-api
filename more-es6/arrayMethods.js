const products = [
    { id: 1, name: "apple", color: "red", price: 90000 },
    { id: 2, name: "iphone", color: "black", price: 80000 },
    { id: 3, name: "samsung", color: "white", price: 70000 },
    { id: 4, name: "oppo", color: "red", price: 60000 },
    { id: 5, name: "vivo", color: "blu", price: 50000 },
];

const removeItem = products.filter(p=>p.id != 4)
console.log(removeItem)

const newProduct = products.filter(product => product.price > 60000)
// console.log(newProduct)
const product = products.find(p=>p.id === 4)
// console.log(product)
// products.forEach(product =>{
//    if(product.color === "red"){
//     console.log(product)
//    }
// })