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

// we can give other name also of company when we will do destructuring of object .

// let {company:com}=product;
// console.log(com) // mango

//we can extract more than one property at once.
let { company ,price}=product;
console.log(company,price);

//  in the place of key name we can give own name and access the  key to use own name

const  {email : em} =product;

console.log(em);
console.log(email);



//  API  JSON : if we will give own work to other in hand called API  

// JSON in form of object and array 
// both key and value is in string .
{
  "name" : "shambhu",
  "email" : "shambhu@11gmail.com",
}

[
  {},
  {},
  {},
]