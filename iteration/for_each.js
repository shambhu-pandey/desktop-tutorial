
// agar array ka value aur index dono print karana ho toh hm ise use karte hai 

let a =["raamu" , "shyam" , "shambhu" , "pandey"];

// kewal item print kra dega 
a.forEach( function (item){
  console.log(item);
})

// item ke saath index value bhi print karana ho toh 
a.forEach(function(value, index){

  console.log(`${index} : ${value}`);

});

// hm aise bhi kar sakte hai

function printMe(item){
  console.log(item);
}
a.forEach(printMe);


// hm arrow function ke help se bhi kar sakte hai 

a.forEach( ( item ) => {
  console.log(item);
})



const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach( (item , index, array) =>{
  console.log(item , index , array)
})


// suppose that we have to add 100 in all array value then how can we do .

let array= [10,20,30,35,45,55];

array.forEach(function(value, index, arr){
  console.log(arr[0]+100);
  console.log(arr[index]+100);
})

console.log(typeof array);



// *************** VVI*************
// array ke andar object hai aur usko access karna hai toh 

const mycoding =[
  {
    languageName: "javascript",
    languageFileName: "js"
  },

  {
   languageName: "java",
   languageFileName: "java"
  },

  {
    languageName: "python",
    languageFileName: "py"
},


]

mycoding.forEach( (item) => {
  console.log(item.languageName);
})

mycoding.forEach( (item) => {
  console.log(item.languageFileName);
})



// for Each loop return nhi karta hai kuch bs print karata hai isliye aage jaakr hme filte , map ko padhna padhega (ye sab return karta hai )  
const codingLan = ["js", "ruby", "java", "python", "cpp"]

const values = codingLan.forEach( (item) => {
      console.log(item);
      
  } )

console.log(values); // return  nhi kar rha hai for loop  

// phir try karte hai return karwaane ka 
const values1 = codingLan.forEach( (item) => {
  console.log(item);
   return item 
}
 ) 
 console.log(values);// abhi bhi return nhi kar rha hai 


 //************** matlab ki forEach loop return nhi karta hai . */


