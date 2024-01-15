// jab username me khali array ho toh kya hoga 
const useremail = []

if (useremail) {
  console.log("Got user email");
} else {
  console.log("Don't have user email");
}

// jab username me khali array ho toh kya hoga 
const userEmail = [ ]

if (userEmail) {
  console.log("Got user email");
} else {
  console.log("Don't have user email");
}

// if you want to check array is empty or not then  you can check by that like 

let username = [];

if(username.length===0){
  console.log("array is empty:");
}
else{
  console.log("array is not empty:");
}

// if you want to check array is empty or not then  you can check by that like 
let usernames = [1,2,3,4,5]

if(usernames.length===0){
  console.log("array is empty:");
}
else{
  console.log("array is not empty:");
}


// if you want to check object  is empty or not then  you can check by that like 

let product = {};
// pahle string banana padta hai phir check karte hai 
if(Object.keys(product).length===0){
  console.log("object is empty:");
}
else{
  console.log("object is not empty:");
}


// if you want to check object  is empty or not then  you can check by that like 


const emptyObj = {name:"shambhu",price:899,}
// pahle string banana padta hai phir check karte hai 
if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}
else{
  console.log("object is not empty:")
;}




// *****************Nullish Coalescing Operator (??) : null undefined**************

let val1;
val1 = 5 ?? 10;
console.log(val1);

let val2 = null ?? 10;
console.log(val2);

let val3 = undefined ?? 99;
console.log(val3);

let val4 = null ?? 11 ?? 22;
console.log(val4);


// *****************Ternary operator********************** 
const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")