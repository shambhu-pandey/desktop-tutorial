// const user = {

//   username: "shambhu",
//   price: 999,

//   welcomemessage: function(){
//     console.log(`username is ${this.username} and price is ${this.price}`);

//   }

// }

// user.welcomemessage();
// user.username="sams";
// user.welcomemessage();





const user = {

  username: "shambhu",
  price: 999,

  welcomemessage: function(){
    console.log(`username is ${this.username} and price is ${this.price}`);

    console.log(this);

  }

}

// user.welcomemessage();
// user.username="ram";
// user.welcomemessage();

// console.log(this);



/*************************************************************************************** */

function chai(){

  let username = "hitesh";
  console.log(this.username);
}

chai();

// is same as 

const aurcode = function(){

  let username = "hitesh";
  console.log(this.username);
}
aurcode();



// is same as 

const  chaii = () => {
  let username="hitesh";
  console.log(this);
}

chaii();



// when you are using arrow fn and bracket then you should return  value is mandatatory .
const addtwo =(num1 ,num2) => {
  return num1+num2;
}

console.log(addtwo(4,5));

// is same as no need to use bracket 
const addthree = (num1 ,num2, num3) =>  num1+num2+num3;

console.log(addthree(4,5,6));



// is same as here we are using paranthesis 
const addThree = (num1 ,num2, num3) =>  (num1+num2+num3);

console.log(addThree(4,8,9));


///
const print = () => ("hello");

console.log(print());


// is same as 
const print1 = () =>{
   return "hello";
}

console.log(print());


// here we are going to use object in arrow function so we need paranethesis ();

const userDetail  = () => ({username : "shambhu", id: 1234, });

console.log(userDetail());


// it is also true we are passing here parameter and in inside give object 
const userDetails  = (num1 , num2) => ({username : "shambhu", id: 1234, });

console.log(userDetails(8,8));