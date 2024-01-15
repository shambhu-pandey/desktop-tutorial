/****************** NUMBER  */
const score =400;
console.log(score);
console.log(score.toFixed(1));

// we can declare number using this method also
const balance=new Number(100);

console.log(balance);
console.log(typeof balance);

console.log(balance.toString());
// we convert it into string we can apply function on string .
console.log(balance.toString().length)
console.log(balance.toFixed(1));
console.log(balance.toFixed(2));



const othernumber = 123.8966;
// iska hm taab use karte hai jaise ki hme point ke baad kitna lena hai ya point tak hi lena hai toh 
console.log(othernumber.toPrecision(3));
console.log(othernumber.toPrecision(4));
console.log(othernumber.toPrecision(2));


const hundreds =100000000000;
// agar jyada zero diya ho aur hmko count karna hai toh indian methods me convert kar ke count kar lenge 
console.log(hundreds.toLocaleString('en-IN'));




/************** ************MATH *********************** */

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.round(4.5));
console.log(Math.round(4.3));

console.log(Math.floor(4.908));
console.log(Math.ceil(4.1));

console.log(Math.min(4,2,6,7,9,1,));
console.log(Math.max(88,66,3,4,665,1,22));


console.log(Math.random());
console.log((Math.random()*10));
console.log((Math.random()*10));
// ab hm last me + 1 karenge kyuki hme value 0 aur 1 ke bhi bich me de sakta hai isliye 0  aur 1 ke bich me value na de islliye 1 add kar denge  

console.log((Math.random()*10)+1);
console.log((Math.random()*10)+1);

// Math.floor lga diye toh ab ye absolute value dega kbhi point me nhi dega 
console.log(Math.floor(Math.random()*10)+1);


// ******************** agar hmko random num  2 number ke bich me generate karwana rhega toh 

const min =10;
const max =20;

console.log(Math.floor(Math.random()*(max-min+1))+min);
console.log(Math.floor(Math.random()*(max-min+1))+min);
console.log(Math.floor(Math.random()*(max-min+1))+min);
console.log(Math.floor(Math.random()*(max-min+1))+min);