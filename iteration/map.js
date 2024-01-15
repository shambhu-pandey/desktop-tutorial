const map = new Map()
map.set('IN',"India");
map.set('USA',"United states of america ");
map.set('Fr',"France");
map.set('IN',"India");

console.log(map);

// for(const key of map) {
//   console.log(map);
// }

// ab yah alag alag array bna dega 

// for(const key of map) {
//   console.log(key);
// }

// agar array nhi banana hai toh 

for(const [key , value] of map){
  console.log(key, ' :-',value);
}



//******************************************** */

// ! map method 
// * the map method creates anew array by applying a provided function to each element of the original array . it transforms each element and returns a new array with the transformed values.



const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// 1).  double all number .
let newnum= myNumbers.map( function (num) {
   return num *2;
} )

console.log(newnum);

// we can also solve using arrow fn .

let newNum = myNumbers.map( (num) => num *2 );
console.log(newNum);

// 2). add 10 in each number .
let newNum1 = myNumbers.map( (num) => num +10 );
console.log(newNum1);

// // 3). if user want to add only at 5th index in 10 then .

// let num =myNumbers.map(function (num) {
//   return num[5]+10;
// })

// we can apply more than one map and filter in question.

const myNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


 let result = myNumber.map( ( num) => num * 10). map(( num) => num +1) . filter((num) => num >=40);
 console.log(result);

 // hmlog  normally function use kar ke bhi kar sakte the  


 