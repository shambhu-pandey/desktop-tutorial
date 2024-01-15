const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// concat : with the help of concat we can add two string or num;
console.log(marvel_heros.concat(dc_heros));
let total = marvel_heros+dc_heros;
console.log(total);

// *****SPREAD****** : we can add more no of string or num with the help of spread use only ...

const all_new_heros = [...marvel_heros, ...dc_heros,]

 console.log(all_new_heros);

let array1=["shambhu" , "pandey"];
let array2=["pratik" , "aditya"];
let array3=[1,2,3,4];

let array4=array1+array2;
let array5=array4+array3;
console.log(array5);

let array6=[...array1,...array2,...array3];
console.log(array6);



/********************** */
let array =[1,2,3,4,[4,5,77,88,],99,7,6,[4,5,[7,990,12,6],[3,6]]];
// if we want to see separate these all array then you can use flat(infinity);
console.log(array);
console.log(array.flat(Infinity));


/***************************** */
console.log(Array.isArray("hitesh"));
// if you want to print in the for of array then you can use Array.from() or Array.of()
console.log(Array.from("hitesh"));

// *********************string to array****************
let arr="shambhu";
console.log(Array.from(arr));




let score1 = 100;
let score2 =200;
let score3 = 300;
let name="shambhu";

console.log(Array.of(score1, score2, score3,name));



let product={
  name:"shambhu",
  add:"sasaram",
  pin:821107,
};

console.log(product);
console.log(product.name);
console.log(product["name"]);
console.log(product["add"]);
