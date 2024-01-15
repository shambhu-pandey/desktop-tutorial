/* reduce () method : - we use reduce method when we want to add cart total price then we can use reduce value 
aacumulator take  first intial value and then add with other number and in next iteration accumulation value is total of accumulation and current value .

*/


const array1 = [1, 2, 3, 4];


const initialValue = 0;

const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);

console.log(sumWithInitial);
// Expected output: 10


//************************************************************************************** */

const myNums = [1,2,3] ;

const myTotal = myNums.reduce(function( accumulator , curval) {
  console.log(` ${ accumulator} and ${ curval}`);
  return accumulator + curval;
} , 0  );  // 0 is the initialisation we can initialise directly.

console.log(myTotal);


const mytotal = myNums.reduce(( accumulator , curval) => {
  console.log(` acc: ${ accumulator} and currentValue : ${ curval}`);
  return accumulator + curval;
} , 4 ); 

console.log(mytotal);




//************************************************************************************** */

// calculate  total price of the course .

const shoppingCart = [
  {
      itemName: "js course",
      price: 2999
  },
  {
      itemName: "py course",
      price: 999
  },
  {
      itemName: "mobile dev course",
      price: 5999
  },
  {
      itemName: "data science course",
      price: 12999
  },
]

// solution 
let totalPrice = shoppingCart.reduce( (acc , item) => 
{
  console.log(` acc: ${ acc} and price is ${item.price}`)
   return acc + item.price;
} ,0);

console.log(totalPrice);


