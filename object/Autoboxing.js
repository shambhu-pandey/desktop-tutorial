/* 

******************Autoboxing*************

* automatic conversion of primitives or string  to objects.
* allows properties and methods to be used on primitives
*example : string have properties and methods like length , toUppperCase , etc;

*/


console.log("pandey ji ".length);
// pandey ji => primitive or string hai aur hm jaise hi . operator use kiye toh usko object bna diya yahi autoboxing hai 
// means string to object  ; 

console.log("shambhu pandey".replace('shambhu','shambhu ji'));
console.log("shambhu pandey ji ".search('p'));
console.log("shambhu pandey ".toUpperCase());
console.log("shambhu pandey".endsWith('y'));
console.log("shambhu pandey".slice(1,4));
