// promise create kar rhe hai aur ek variable me hold kar de rhe hai 
// promise ek call back bhi leta hai mtlb fn aur uske andar resolve aur reject hota hai 
const promiseOne = new Promise(function(resolve , reject ){
  // Do an async task 
  // DB calls  , cryptography , network 

setTimeout(function(){                                 // setTimeout ek call back leta hai 
console.log("Async task is completed");
resolve();                                         // resolve() se  .then() connect ho gya without resolve connect nhi hoga 
} , 1000)
})

// ab hm promise ko consume karne ja rhe hai 

promiseOne.then(function(){
console.log('promise consumed');
})



// hme jaruri nhi hai ki variable me hold karna  hi padega promise ko without variable me hold kiye bhi hm kar sakte hai 

new Promise(function(resolve , reject){
setTimeout(function(){
 console.log('Async Task  2 ');
  resolve();   // connect kar liye .then() ko 
} , 1000 );
}).then(function(){            // hm direct then ko connect kar diye kyuki variable me toh hold nhi kiye the so.
console.log(" Async 2 resolved ")
})


const promiseThree = new Promise(function(resolve , reject){
// ho sakta hai  data network se aya ho ya file se toh 
setTimeout(function(){
 resolve({user : "shambhu" , email : "shambhu@gmail.com"});
} , 1000)
})

promiseThree.then(function(user){    // function me pass kar diye  jo resolve me aya hai 
console.log(user);
}) 


const promiseFour  = new Promise(function(resolve , reject){
// ab hm error ko dekar dekh rhe hai ( true aur false  dono kar ke dekhenege )
let error = false ;   // true 

setTimeout(function(){
if(!error){   //  jab error nhi ho toh 
 
 resolve({username : "shambhu" , email : "example@gmail.com"});
}
else{
 reject('ERROR: Something went wrong ');
}
},1000)
})

promiseFour.then((user)=>{
console.log(user);
return user.username;   // hm yha par return karwa diye aur ye return wala agla .then() me chal jaayega
}).then((username)=>{
console.log(username);
}).catch((error)=>{                 // reject wala yha par aayega 
console.log(error);

}).finally(()=> console.log('the promise is either resolved or reject'));   // finally ye bta dega ki resolve ya reject huya




const promiseFive  = new Promise(function(resolve , reject){

let error = true ;   

setTimeout(function(){
if(!error){   //  jab error nhi ho toh 
 
 resolve({username : "shambhu" , email : "example@gmail.com"});
}
else{
 reject('ERROR: Something went wrong using async ');
}
},1000)
})

// ek hmare pass aur ek syntax hota hai async await ka  yah .then()  , .catch() jaisa hi hai but yah thoda der wait karta hai kaam ka hone ka agar oo ho jaata hai taab hi aage badhta hai nhi toh oo whi par error de deta hai 
// but gracefully (badhiya ) hm catch  handle nhi kar paate hai 


// async function consumePromiseFive(){

//    const response = await promiseFive ;
//    console.log(response);
// }

// consumePromiseFive();   // call karaya hai async ko jisko comment kiye hai upar 

// agar promiseFive me error false rhega toh yah response de dega but abhi toh error true hai toh async await isko handle nhi kar paayega bina try aur catch block  ke  yah kewal resolve hoga taab hi aise kaam karega but in case error aa jayega toh bina try aur catch ke kaam nhi karega  .... AAP ek baar error ko true aur false kar ke dekh lijiye  (taab tak mai ab async ko comment kar deta hu  aur try aur catch block use kar ke dekhata hu )


async function consumePromiseFive(){
try {
const response = await promiseFive ;
console.log(response);
}
catch(error){
console.log(error);
}
}

consumePromiseFive();

// ab hm try aur aur catch bna diya toh ab ye error aayega taab bhi handle kar lega aur resolve hoga taab bhi . 





// async function getAllUsers(){
//   try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')

//   const data = await response.json()
//   console.log(data);
//   } catch (error) {
//     console.log("E : ", error);
//   }

// }

// getAllUsers();




fetch('https://jsonplaceholder.typicode.com/users')

.then((response)=>{
return response.json()
})
.then((data)=>{
console.log(data);
})
.catch((error)=>console.log(error));