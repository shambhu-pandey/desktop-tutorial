
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
three();


 console.log( "this is the all three fn call ")

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