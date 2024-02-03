/*      VARIABLE  :-   
   we can declare variable by three  types 
     1. var 
     2. let 
     3. const


     *********  variable rule ***********

     1. cannot be a reserved keyword  like( if else, else , let var const  )

     2. meaningful :- variable name 
     3. cannot start with a number
     4. cannot contain space or '_' 
     5. use camelcase ( means first word start with small and last word  start with large)   example  firstName, ageOfStudent;

 */


  //   ------------***********let variable  ******----------------
if(true){
let a="love"; // let variable 
console.log(a);

}

let _aa=89;
console.log(_aa);

let namelast="pandey";
console.log(namelast);

let p;
console.log(p);   // undefined

console.log( 'hello duniya    6');
//console.log(a);       // it will not execute because let ka scope loop tak rhi rhta hai loop se baahr kaam nhi karega // var khi par bhi kaam karta hai 

let a=7;
console.log(a);
//   let a=9;    // error throw because same name let a already declared
  


//---------------**************    var variable    ***********--------------

var c="babbar";
console.log(c);

var c="shambhu";  // var se hm baar baar redeclare kar sakte hai 
console.log(c);

var c=1008;         // var se hm baar baar redeclare kar sakte hai 
console.log(c);

var  d =1006;
console.log(d);

//************-------------  const variable declaration ********* *---------------/

const r=55;
console.log(r);

const name="shambhu pandey  ji ";
console.log(name);

const n='shambhu pandey  ji ';
console.log(name);

/*  error throw because 'r' has already been declared
const r=90;
console.log(r);
 
*/

/*   error throw because already same  a variable declared in program 
const a=55;
console.log(a);
*/









/*  
   ************------------  primitive datatype *********---------------

      1. string :- 'love babbar' , sequence of character
      2. number :- 1,2 ,3 4, 5, 55.66. 7.8.  (all int float  double are in number  category )
      3. boolean :- true ,false 
      4. undefined :- let a; console.log(a)  => undefined
      5. null :- isnull;
      6. bigInt : const bigNumber = 345673947295790284759n;
      7.  symbol : const id = Symbol('123');

*/
const bigNumber = 345673947295790284759n;
console.log(typeof bigNumber);

const  outside =null;
console.log(typeof outside);


/*  *********---------------Dynamic typing---------------*********** 

  same name of variable me differnt datatype ka value store karwa sakte hai same type ka nhi
  jaise ek baar string karwa diye toh phir string nhi ho sakta  but int , bool ho sakta hai  

  */

  // example of dynamic datatype 

let str="pandey ji ";
console.log(str);

 str=6;
console.log(str);

str=true;
console.log(str);

str="shambhu";   // ho sakta hai but galat hai aise 
console.log(str);
   
/*  ******************************--------------------------------------------------------*************** 
    ------------- ********* ******Reference types ************---------------
    1. objects;
    2. arrays
    3. functions

    */





    /*     ---------------**********objects**********---------

// object creation

    let person={
        name:"shambhu";
        age:18;
        regno:"22bca0028";

    }

// how to access object 
   1 method : (DOT NOTATION)  person.name , person.age, person.regno
   2method : ( BRACKET NOTATION) person['age'], person['name'], person['regno']

    */
    
   let person={
    name:"shambhu",
    age:18,
    regno:"22bca0028"
};


console.log(person.name);
console.log(person.age);


 /*   **************  --------------  Arrays :- data structure used to contain a list of items 
   
 
 let name=["love ", "babbar"];
 */
 let name1=["love ", "babbar", 4];

console.log(name1);




 /* *******************------------------Operators-----------*************
   
    1. arithmetic
    2. assignment
    3.comparison
    4.bitwise
    5.logical
 

    1. arithmetic:-  + ,- , * , / , % , **(power)
 */

    let num1=10;
    let num2=5;

console.log("arithmetic operation:");
    console.log(num1+num2);
    console.log(num1-num2);
    console.log(num1*num2);
    console.log(num1/num2);
    console.log(num1%num2);


    /* preincrement    ++x  , --x,   then first increment or decrement the value and then use the value (pahlehi increment ya decrement  ho jaayege )
        postincrement  x++, x-- , first use the value and then increment or decrement   */
    console.log(++num1);
    console.log(num1++);
    // console.log(++num1)
    console.log(num1++);


  /*   **********************---------------------ASSIGNMENT OPERATOR ***************----------------------

     a=a+b  => ko hm a+=b;    likhte hai 
     a=a-b  => ko hm   a-=b;   likhte hai 

  */
  
    console.log("adding using assignment oper");
    console.log(num1+=num2);



    /*   ***********************------------------------ Comparison operator ****************----------------

    > ,>= ,< , <= , == , ===


      EQUALITY OPERATOR 
    == (loose equality  )  => ONLY VALUE CHECK KAARTA HAI DATATYPE INT ME HAI YA STRING ME YA FLOAT ME USKO COMPARE NHI KARTA 
    ===( strict operator )    => DATATYPE AUR VALUE DONO CHECK KARTA HAI AGAR VALUE SAME HO AUR DATATYPE TAAB HI TRUE RETURN KAREGA 


    */
   
    let x=5;
    let y="5";
    console.log(x==y);   // true because value same 
    console.log(x===y);   // false because value same only  return type not same 





    /***********************-----------  Ternanary operator -------------------******************* */

    let age=17;
    let status =(age>=18)?'yes you can give vote' : 'no you can not give  vote';
    console.log(status);



let xx = 100;
let yy = 200;

console.log(xx+yy);