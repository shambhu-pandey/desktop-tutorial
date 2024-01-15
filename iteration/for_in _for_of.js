// for of is used to iterate over the value in an iterable object , such as an array or a string . it allows you to access the values of the object directly , without having to use an index. 

// here is an example of using for-of to loop over the character in a string .

const myname = "shambhu pandey";

for(let char of myname){
  console.log("my char is :" + char);
}

// here is an example of using for-of to loop over the Array .

let array = [1,2,3,4,5,6,7,"pandey"];

for(let arr of array){
  console.log("my array is :" +  arr);
}






// on the otherhand , for in is used to iterate over the enumerable properties of an object . it allows you to access the keys of the object , rather than the values.


const object = { a: 1, b: 2 , c: 3};
object.d =4;
for(let key in object){
   console.log(`my key is  ${key} `);
}

// for in 
const mylucknum = [1,2,3,4,5,6,7,"pandey"];
for(let key in mylucknum){
  console.log(`the keys are  ${key}`);
}



// hm for of se bhi object ki key nikaal sakta hu 

let object2 = { a: 1, b: 2 , c: 3};
object2.d=4;

for(let key of Object.keys( object2 )){
  console.log(key);
}



/************************************************/

const myObject ={

  js: 'javascript',
  js: 'javascript',
  cpp: 'C++',
  rb: "ruby",
  swift: "swift by apple"
}

for(const key in myObject){
  console.log(key);
}

// jo key ka value hai oo bhi de dega 

for(const key in myObject){
  console.log(myObject [key]);
}

for(const key in myObject){
  console.log( `${key} Shortcut is for ${myObject[key]}`);
}



// array par for in lga rhe hai .
const programming = ["js", "rb", "py", "java", "cpp"]

// index nikaal lenge aise 
for(const key in programming){
  console.log(key);
}

// ab value kaise nikaalenge 
for(const key in programming){
  console.log(programming[key]);
}

for(const key in programming){
  console.log(`${key} :- ${programming[key]}`)
}

// for _ of for [ array , map , set ,string ] to iterate over values;

// for_in  for an array to iterate over a key;

// for _ in for objects to enumerate its (object 's) properties;


