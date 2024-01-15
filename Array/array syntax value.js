/* 
   ***************  what is array  *******************
* An Array is just a list of values.
* Index: starts with '0'
* Array are used for storing multiple values in a single variable.


1. use [] to create a new array , [] encloses a list of values
2.  accessing values : use [] with index
3. Syntax Rules: 
      braclets start and end the array 
      values separated by commas 
      can span multiple lines 

 ***** Array can hold any value , including arrays.
 
 ***** typeof  operator on array return object 
*/

let num=[1, 2,3 ,4,5 ,6,7 ,8];
 num.sort((x,y)=>x-y);
 docuemnt.write(num);
console.log(num);
console.log(num[0]);
console.log(num[1]);
console.log(num[5]);

// we can hold any types of datatype value 
let array=[1 , 'kg' , 'shambhu' ,true , null ,{ likes: '1 million'}];

console.log(array);
console.log(typeof(array));
console.log(array[0]);
console.log(array[2]);
console.log(array[4]);

let  num1=[7,8,9,1,3,2,];
num1.sort();
console.log(num1)

let age=15;

