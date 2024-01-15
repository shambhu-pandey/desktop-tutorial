
let a=5;
let b=a;

console.log(` a=${a} and b=${b}`);
 a=8;
 console.log(`a=${a} and b=${b}`);// yha par dono me same value nhi aya but object ke Case me dekhte hai ki kya hota hai 



 /**
   1. object work based on references , not actual data 
   2. copying an object copies the refernces , not the actual data 
   3. when comparing with == or === you are comparing references ,not content .
   4. changes to one references  affects all copies 
  */
 let x={ num: 5};
 let y=x;

 console.log(`x=${x.num} and y=${y.num}`);
  x.num=8;
  console.log(`x=${x.num} and y=${y.num}`); // object ke Case  me dono me change ho gya 

/************************************************************************************************* */
// object ke case me equal to operator hmesha false hi ata hai aage padhenge ki kyu
let p={pop: 'shambhu'};
let q={pop:'shambhu'};

console.log(p==q);
console.log(p===q);