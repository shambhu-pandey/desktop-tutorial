/*
1. Array.isArray() checks if a variable is an array .
2. length: property holds the size of the array 
3. common methods:
   .push /pop : add remove to end (RHS)
   . shift/unshift : add or remove from front (LHS).
   .splice: add or remove element.
   .toString : convert to string 
   .sort: sort elemnts
   .valueOf: get array itself

   4. arrays also use references like objects.
   5. De-structing also works for Arrays.

*/


let num=[1,2,3,4,'shambhu', 'pandey', true];

console.log(num);

// Array.isArray() checks if a variable is an 
console.log(Array.isArray(num));
// console.log(Array.isArray(num2));  false 

//length: property holds the size of the array 
console.log(num.length);

// push/pop
num.push('pandey ji');
console.log(num);

//pop
console.log(num.pop());
console.log(num);


//shift/unshift

num.unshift(0);
console.log(num);

console.log(num.shift());
console.log(num);


//  .splice: add or remove element.

let str=[1,2,3,4,5,6];
console.log(str);
console.log(str.splice(1,3));

// toString
// basically yah array ka value hi show kar deta hai 
let num1=[1,2,3,4];
console.log(num1);

// sort
let num2=[1,7,8,2,3,4];
num2.sort();
console.log(num2);
console.log(num2.valueOf());


//4. arrays also use references like objects.

let arr=[1,2,3,4,5,6];
console.log(arr);

arr2=arr;
arr2[2]=99;
console.log(arr);
console.log(arr2);


const myFish = ["angel", "clown", "trumpet", "sturgeon"];
 const t =myFish.splice (0,2,"parrot" ,"anemone" , "blue");
 console.log(t);
 console.log(myFish);