//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
     console.log("INNER: ", a);
    
}

 console.log(a);
// console.log(b);  // error because b is not declared 
// console.log(c);  // error because c is not declared 


function one(){

  let name = "shambhu";

  function two(name){
      let name2="  pandey";
      console.log(name+ name2);
  }
  //console.log(name2);// error 
  two(name);
   console.log(name);
}
 //  console.log(name);//error 

one();




///********************************** */

console.log(addone(5));

function addone(num){
  return num+1;
}

console.log(addone(5));


addTwo(5)
const addTwo = function(num){
    return num + 2
}

console.log(addTwo(5));// 7