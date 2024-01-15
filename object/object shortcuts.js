/* 
  * De-structing : extract properties from objects easily

*  we can extract more than one property at once.

*/

// **********  code for destructing*********

let product={

  company: 'mango',
  item_name: 'cotton striped t-shirt',
  price:1200,
};
//destructing 
// let company =product.company;
// console.log(company);   // mango

// is same as 
// let { company }=product;
// console.log(company);

//we can extract more than one property at once.
let { company ,price}=product;
console.log(company,price);





// property short hand  
/* jaise ki pahle hi hm price ko  object ke baahr declare kar diye hai aur hm object ke andar value me daalna chahte hai toh   aur key ka naam bhi same dena chahte hai toh hm  ( prices: prices ) likhne ke badle hm kewal prices bhi sakte hai niche wala short hand me whi dikhaya gya hai    */

let prices=1300;
// let item={
//   company: 'nike',
//   item_type:'cotton tshirt',
//   prices : prices,
// };

// is same  as 

let item={
    company: 'nike',
  item_type:'cotton tshirt',
  prices,
};




// property short hand 
/* */

let book={
  name:'s chand',
  author:'d pandey',
  year:2022,

  book_detail : function(){
    console.log(`book_name ${book.name} , author ${book.author},year ${book.year}`);
  }

};
book.book_detail();




// is same as 
// we can assign function as down code 

let book1 = {
  name: 's chand',
  author: 'd pandey',
  year: 2022,

  book_detail() {
    console.log(`book_name ${this.name}, author ${this.author}, year ${this.year}`);
  }
};

book1.book_detail(); // Call the book_detail method to see the output

