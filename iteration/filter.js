


 //******************************FILTER******* */

//  1).  using this array find no which is greatest nad equal to 4.

 const myNums = [1,2,3,4,5,6,7,8,9,10];

// let newnums = myNums.filter(function (num) {
//   return num>=4;
// })

// hm isko arrow function se bhi kar sakte hai easily one line me 

let newnums= myNums.filter( (num) => num>=4 )   // hm yha par num  maan liye hai sab array ke element ko .isliye num likhe hai .

console.log(newnums);


// hm isko for each loop se bhi kar sakte the but return nhi karega bs isko hmlog print kra sakte hai 

myNums.forEach( (num) => {
    if(num>=4){
      console.log(num);
    }
})




//  2).important question  on the basis of user requirement use filter method and return data .

const books = [
  { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
  { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
  { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
  { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
  { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
  { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
  { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
  { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
  { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

// if a user want to search history book detail then .

let historyBook = books.filter( (book)  => book.genre === 'History' )  // hm book maan liye hai sabko isliye book pass kiye hai .


console.log(historyBook);

// hm isko normally function se bhi  kar sakte the .but jab hm scope { } use kar rhe hai taab return karana padega .

let userbook = books.filter( function (book ) {
   return book.genre === 'History';
})
console.log(userbook);



// if a user want to search  book detail of publish which is greater or equal to 1995 and book genre is science  then .

let userBook = books.filter( (book) =>
{
  return book.publish>=1995 && book.genre==='Science';
} )

console.log(userBook);

// hm isko normal fn se bhi kar sakte the .
