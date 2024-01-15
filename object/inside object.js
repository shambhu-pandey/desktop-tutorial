/* 

* object can contain primitives like numbers and string .
* objects can contain other object and are called nested object 
*function can be object properties 
* functions inside an object are called methods 
* null VALUE: intentionally leaving a property empty


*/


let product={
  comapny:"levis",
  itemName: 'cotton striped tshirt',
  price: 861,

  rating:{
     star: 4.5,
     noOfReviews: 87
  },

  displayPrice: function(){
    console.log(`price of the product is ${product.price}`);
  }
};

console.log(product.displayPrice());   // because function ke baahr access kar rhe hai 
console.log(product.rating)





