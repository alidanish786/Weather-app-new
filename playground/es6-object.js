//object property shorthand

const name="Danish"
const userAge=90;

const data={
    name,
    age:userAge
}

// console.log(data)

//object destructuring

const product={
    label:'Davinci',
    price:30,
    stock:100,
    salePrice:undefined
}

// const {label:prodLabel,price,rating=5} =product;
// console.log(prodLabel)
// console.log(price)
// console.log(rating)

const transaction=(type,{label,price})=>{
    console.log(label)
    console.log(price)
}

transaction('save',product);
