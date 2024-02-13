const products = [
    {id: "p01", name: "Mobile", price: 22000},
    {id: "p02", name: "Keyboard", price: 1000},
    {id: "p03", name: "Mouse", price: 500},
    {id: "p04", name: "Laptop", price: 50000},
    {id: "p05", name: "Headphone", price: 100}
]

// Dispaly all
// products.forEach( product => console.log(`${product.name} has a price of Rs ${product.price}`))

// Apply 10% discount to all the product
// let newProducts = products.map( product => {
//     product.price = product.price - product.price*0.1
//     return product
// })
// let newProducts = products.map(product => ({...product, price:  product.price - product.price*0.1}))
// console.log(newProducts);

// Delete Headphone
// let newProducts = products.filter( product => product.id !== "p05" )
// console.log(newProducts);

// Most Valuabale Product
// let mvProduct = products.reduce((mvp, product) =>{
//     if(product.price > mvp.price){
//         return product
//     } else {
//         return mvp
//     }
// }, products[0])
// let mvProduct = products.reduce((mvp, product) => product.price > mvp.price ? product : mvp, products[0])
// console.log(mvProduct);

// Sort the array based on price
// products.sort((p1, p2) => p1.price -p2.price)
// Alphabetically
products.sort((p1, p2) => p1.name.localeCompare(p2.name))
console.log(products);