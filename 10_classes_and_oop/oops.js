// object literal 

const user = {
       username : "shambhu",
       loginCount : 8,
       signedIn : true,

      getUserDetail : function(){
        console.log("got user details from databse");
        console.log(`username : ${this.username}`);
      }
}


// console.log(user);
// console.log(user.getUserDetail());
console.log(this);



// new is a keyword , and constructor function 
// constructor function allow : - ek hi object se multiple instances bna sako 


function User_detail(userName , loginCount , isLoggedIn){

  this.userName = userName,
  this.loginCount = loginCount,
  this.isLoggedIn = isLoggedIn

  this.greeting =  function(){
    console.log(`welcome : ${this.username} `);
  }
  return this
}

const userone = new User_detail("shambhu" , 4, true);
const usertwo = new User_detail("pandey" , 7, false);

console.log(userone);
console.log(usertwo);
