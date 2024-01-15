 // **********  code for destructing*********

let product={

  company: 'mango',
  item_name: 'cotton striped t-shirt',
  price:1200,
  email: "shambhupandey",
};
//destructing 
// let company =product.company;
// console.log(company);   // mango

// //is same as 
// let { company }=product;
// console.log(company);

//we can extract more than one property at once.
let { company ,price}=product;
console.log(company,price);

//  in the place of key name we can give own name and access the  key to use own name

const  {email : em} =product;

console.log(em);
console.log(email);