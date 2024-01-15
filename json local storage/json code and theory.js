/**
 * what is  JSON ?
 
=> javascript object notation : not the same as JS object , but similar 
=> common in network calls and adata storage 
=> JSON.stringify() and JSON.parse()
=> strings are easy to transport over network.
=> JSON requires double quotes. Escaped as \".
=> JSON is data format JS object is a data structure 
 */

// ***********Javascript object***************** 

let product={
  company: 'nike',
  name: 'jeans',
  size: 'm',
};

console.log(product);
console.log(typeof(product));
let str=JSON.stringify(product);
console.log(str);
console.log(typeof(str));

let newproduct=JSON.parse(str);
console.log(newproduct);
console.log(typeof(newproduct));

