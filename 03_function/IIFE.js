//********** immediately Invoked Function Expressions (IIFE)*******/


function chai(){
  console.log("DB CONNECTED");
}
chai();

// is same as using (IIFE)

// named IIFE
( function chaii(){
  
  console.log("DB CONNECTED");
} )();


// without named IIFE 

( (name) => {
  console.log(`DB CONNECTED TWO ${name}`);
})('hitesh');



function one (){
  console.log("one");
  two();
}
function two (){
  console.log("two");
  three();
}
function three(){
  console.log("three");
}

one();
two();
three();