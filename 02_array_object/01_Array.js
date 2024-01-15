const myarr = [0, 1, 2, 3, 4, 5, "shambhu"]
const myHeors = ["shaktiman", "naagraj"]

// we can declare array by this method also 
const myArr2 = new Array(1, 2, 3, 4)
console.log(myarr[1]);

// array method
//push();
myArr2.push(99);
console.log(myArr2);
myArr2.push(100);
console.log(myArr2);

// pop();
myArr2.pop();
console.log(myArr2);


// unshift() and shift()

let arr = [1,4,5,7,8,9];
console.log(arr);
arr.unshift(100);
console.log(arr);

arr.shift();
console.log(arr);


//includes();
console.log(arr.includes(8));
console.log(arr.includes(100));

// indexOf();
console.log(arr.indexOf(4));

// join()
let newArray = arr.join();
console.log(arr);
console.log(newArray);


// **************slice() and splice() **********

// ******slice  it return with start and value and 1 less to endvalue

let array=["apple","micromax","blackberry","redmi","shambhu","pandey"]

console.log(array.slice(0));
console.log(array.slice(1));
console.log(array.slice(2));
console.log(array.slice(4));
console.log(array.slice(0,4));
console.log(array.slice(0,4));
console.log(array.slice(2,5));
console.log(array.slice(-2,6));
console.log(array.slice(-2,-3));
console.log(array.slice(-5,-4));
console.log(array.slice(-6,-2));

console.log(array.slice(-7,-2));
console.log(array.slice(-65,-2));
console.log(array.slice(-6));
console.log(array.slice(-4,-1));


const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));

console.log(animals.slice(2, 4));


console.log(animals.slice(1, 5));


console.log(animals.slice(-2));


console.log(animals.slice(2, -1));

console.log(animals.slice());



// *******splice:  it return with start value and end with last value (means last endindex also included );


const myArr = [0, 1, 2, 3, 4, 5]

console.log("A", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B" , myArr);

const myn2=myArr.splice(1,3);
console.log("C" ,myArr);
console.log(myn2);


let arrray=[1,2,3,4,5];
console.log(arrray);
console.log(arrray.splice(2,0,"shambhu" , "pandey"));
console.log(arrray);


let num = [99,98,97,96,95];
console.log(num.splice(1,3,"shambhu"));
console.log(num);


