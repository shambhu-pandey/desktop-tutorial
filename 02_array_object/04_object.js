//singleton

const tinderuser ={}

tinderuser.id="123abc";
tinderuser.name="sammy";
tinderuser.isloggedin =false;

console.log(tinderuser);

console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
// array ke form me object ka  key  aur value ko de deta hai 
console.log(Object.entries(tinderuser));

/* agar property check karna hai ki object me presnt hai nhi toh hm hasOwnProperty lga kar check kar lenge */
console.log(tinderuser.hasOwnProperty('isloggedin'));
console.log(tinderuser.hasOwnProperty('email'));



const regularUser = {
  email : "shambhu@gamil.com",
  fullname: {
    userfullname : {
      firstname: "shambhu",
      lastname:"pandey",
    }
  }
}

console.log(regularUser);
console.log(regularUser.email);
console.log(regularUser.fullname);
console.log(regularUser.fullname.userfullname);
console.log(regularUser.fullname.userfullname.firstname);


//************  if want to concat more than two obj than you can use spread method (...) */

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}

const object5={...obj1,...regularUser};
console.log(object5);
const obj4= {...obj1, ...obj2 , ...obj3};
console.log(obj4);




// **********  Array ke andar object  
const users = [
  {
      id: 1,
      email: "h@gmail.com"
  },
  {
      id: 1,
      email: "shambhu@gmail.com"
  },
  {
      id: 1,
      email: "pandey@gmail.com"
  },
]

console.log(users[1]);
console.log(users[2]);


