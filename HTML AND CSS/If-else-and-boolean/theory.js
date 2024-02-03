/* --------------------- what is booleans ?-----------------
 
=> boolean are a basic data types in javascript
=> two values : can only be true or false 
'true' is a string not a boolean

*/

/* -------------- comparisoan operator ------------ 

=> equality : 
  == checks value equality
  === checks value and data type equality.
 
  => Inequality :
  != checks value inequality
  !== checks value and data type inequality

  => Relational :
  > greater than
  < less than
  >= greater than or equal to 
  <= less thn or equal to .


  *******---------- order of comparison operator is less than arithmetic operators------******

  */

console.log(5<8);
console.log(5>9);

console.log(true);
console.log(6==6);
console.log(6=='6');
console.log(6===6);
console.log(6==='6');

console.log(typeof(true));
console.log(typeof('true'));

  
console.log("check age and then give suggestion:");
let age=18;

if(age>18){
  console.log("you can drive");
}
else{
    console.log("you can not drive use bicycle");
  }
