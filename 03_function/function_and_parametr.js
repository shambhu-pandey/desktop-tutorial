// function


function myName(){
  console.log("h");
  console.log("i");
  console.log("t");
  console.log("e");
  console.log("s");
  console.log("h");
}

myName();
myName();


//  function with adding two number

function addTwoNumber(num1 ,num2){
  console.log(num1+num2);
}

addTwoNumber(4,5);


// adding two with return 
function addTwoNumber(num1 ,num2){
     
  return num1+num2;
}

let a =10;
let b=20;

const result =addTwoNumber(a,b);
console.log(result);


// adding more no with return 

function myCartBill( ...num1){
  
  return num1;

}

console.log(myCartBill(10,20,30,40,50));

// or 

function myCartBill( val1,val2, ...num1){
  
  return num1;

}

console.log(myCartBill(10,20,30,40,50));



// function with return statement 
// here we set default value 
function loginUserMessage(name="sams"){

  if(!name)
  {
    console.log("please enter name:");
      return 
  } 
  return `${name} just logged in`;

}
console.log(loginUserMessage("shambhu" ));
console.log(loginUserMessage( ));
console.log(loginUserMessage(""));



function loginUserMessage(name ){

  if(name==undefined)
  {
    console.log("please enter name:");
      return 
  } 
  return `${name} just logged in`;

}
console.log(loginUserMessage("shambhu" ));
console.log(loginUserMessage( ));
console.log(loginUserMessage("    "));



/*************************************now we are going to pass object in function".*****************/

let product ={

  company: "levis",
  price: 1200,
  item : "jeans",
};

function myWishlist(myObject){
  
  return `company is ${myObject.company} , price is ${myObject.price} and item is ${myObject.item}`;
}
// we can call object by normal method or other method also 
console.log(myWishlist(product));

// we can call a function by this method also like that when we call a function then we can pass a object in argument type.

console.log(myWishlist({
  company: "levis",
  price: 1200,
  item : "jeans",
}))




// *************************** Now WE ARE GOING TO PASS ARRAY IN  FUNCTION ****************************

let myArray = [10,20,30,40];

function myNumber(array){
  // we want to access index 3 value ;
       return array[3];
}

console.log(myNumber(myArray));

// we can call a function by this method also like that when we are pass in the place of array we can pass array value .

console.log(myNumber([10,20,30,40]))

