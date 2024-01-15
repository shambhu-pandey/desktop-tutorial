// Stack [primitive]  , Heap [non primitive]

/* *********************primitive ***********
 primitive data type apna copy deta hai dusre ko isliye agar hm change karenge dusre wala me toh pahle par asar nhi padega */
let num1 = 10;
let num2 = num1;
console.log(num1);
console.log(num2);

num2= 20;
console.log(num1);
console.log(num2);


/* *******************Non -primitive ***********
 non - primitive data type apna refernece (original value ) deta hai dusre ko isliye agar hm change karenge dusre wala me toh pahle  wala par bhi asar  padega */


 let userone ={    
  email:"user@google.com",
  phone_no: 6200891968,
 };

 userTwo =userone;
 console.log(userone);
 console.log(userTwo);

 userTwo.email="shambhupandey1008@gmail.com";
 console.log(userone);
 console.log(userTwo);

