const name="hitesh";
const repoCount= 50;

console.log(name+repoCount + " value");
// but upper method is normally we are not used 
console.log(`my name is ${name} and my repoCount is ${repoCount}`);

// we can declare string using this method also .
const gamename = new String('hitesh-hc-com');

console.log(gamename[0]);
console.log(gamename[6]);


/********************************************* */
let string ="hiteshkumar";
console.log(string.length);

// charAt : its find the character when we give position.
console.log(string.charAt(2));
console.log(string.charAt(999));

// indexOf : its give the index value of character
//syntax:
//indexOf(searchElement)
//indexOf(searchElement, fromIndex)

console.log(string.indexOf('i'));

const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(beasts.indexOf('bison'));


// Start from index 2
console.log(beasts.indexOf('bison', 2));

console.log(beasts.indexOf('giraffe'));

const array = [2, 9, 9];
array.indexOf(2); // 0
array.indexOf(7); // -1
array.indexOf(9, 2); // 2
array.indexOf(2, -1); // -1
array.indexOf(2, -3); // 0

const array1= [NaN];
array.indexOf(NaN); // -1

//substring : agar hmko char chahiye toh 
//syntax:
//substring(indexStart)
//substring(indexStart, indexEnd)

const string2 = 'Mozilla';

console.log(string2.substring(1, 3));
// Expected output: "oz"

console.log(string2.substring(2));
// Expected output: "zilla"


console.log(string2.substring(0,4));

//trim: its remove the blankspace;

let str ="         shambhu     ";
console.log(str);
console.log(str.trim());

// replace : if you want to replace something and want to add in the place .

const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('chou','/'));

// includes : if you want to check its present or not 

console.log(url.includes("ht"));
console.log(url.includes("pandey"));
console.log(url.includes("/"));


// split : 

let str1 = "shambhu apndey";
console.log(str1.split(' '));
console.log(str1.split(''));

let str3 = "shamb*hu *apndey";
console.log(str1.split('*'));



/*  
substring() extracts characters from indexStart up to but not including indexEnd. In particular:

If indexEnd is omitted, substring() extracts characters to the end of the string.

If indexStart is equal to indexEnd, substring() returns an empty string.

If indexStart is greater than indexEnd, then the effect of substring() is as if the two arguments were swapped; see example below.

Any argument value that is less than 0 or greater than str.length is treated as if it were 0 and str.length, respectively.

Any argument value that is NaN is treated as if it were 0.

*/

const anyString = "Mozilla";

console.log(anyString.substring(0, 1)); 
console.log(anyString.substring(1, 0)); 

console.log(anyString.substring(0, 6)); 

console.log(anyString.substring(4));
console.log(anyString.substring(4, 7));
console.log(anyString.substring(7, 4));

console.log(anyString.substring(0, 7)); 
console.log(anyString.substring(0, 10)); 



/* The difference betwenn substring() aand substr()

There are subtle differences between the substring() and substr() methods, so you should be careful not to get them confused.

The two parameters of substr() are start and length, while for substring(), they are start and end.

substr()'s start index will wrap to the end of the string if it is negative, while substring() will clamp it to 0.

Negative lengths in substr() are treated as zero, while substring() will swap the two indexes if end is less than start.

Furthermore, substr() is considered a legacy feature in ECMAScript, so it is best to avoid using it if possible.

*/

const text = "Mozilla";
console.log(text.substring(2, 5)); // "zil"
console.log(text.substr(2, 3)); // "zil"

/* difference bw substring() and slice()

The substring() and slice() methods are almost identical, but there are a couple of subtle differences between the two, especially in the way negative arguments are dealt with.

The substring() method swaps its two arguments if indexStart is greater than indexEnd, meaning that a string is still returned. The slice() method returns an empty string if this is the case.

*/

const text1 = "Mozilla";
console.log(text1.substring(5, 2)); // "zil"
console.log(text1.slice(5, 2)); // ""

/**If either or both of the arguments are negative or NaN, the substring() method treats them as if they were 0. */

console.log(text.substring(-5, 2)); // "Mo"
console.log(text.substring(-5, -2)); // ""

/**slice() also treats NaN arguments as 0, but when it is given negative values it counts backwards from the end of the string to find the indexes. */

console.log(text.slice(-5, 2)); // ""
console.log(text.slice(-5, -2)); // "zil"




const myFish = ["angel", "clown", "trumpet", "sturgeon"];
 const t =myFish.splice (0,2,"parrot" ,"anemone" , "blue");
 console.log(t);
 console.log(myFish);

