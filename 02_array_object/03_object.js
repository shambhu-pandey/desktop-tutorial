//object Litrels

const mySym = Symbol("key1")

const JsUser = {
    name: "Hitesh",
    "full_name": "Hitesh Choudhary",
    /* if you want to add mySym in object then you can write in [mySym] this form . and with the bracket we can access it. */
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email)
console.log(JsUser["email"])
// console.log(JsUser["full name"])
console.log(JsUser[mySym])
console.log(JsUser["full_name"])

console.log(JsUser);
JsUser.email = "hitesh@chatgpt.com";
console.log(JsUser);

// if you want don't change in object then you can freeze it . if you freez once then you can not update key.

Object.freeze(JsUser);


JsUser.email = "hitesh@microsoft.com"
 console.log(JsUser);// here no change in email because we already freeze object . 


 JsUser.greeting = function(){
  console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
  console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greetingTwo());
console.log(JsUser.greeting());


