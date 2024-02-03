// alert("hello duniya");

// alert("hello world");
console.log("hello world ");


/***********  JS in console  (math) console can be used as a calculator    **************/
// alert(5+7);
// alert(9*7);



/*************************  DOM manipulation  *****************************
 
   1. change html 
    2.change css 
    3. perform actions



    document.body.innerHtml="welcome";
    document.body.innerhtml='<b> welcome </b>'   // bold kar dega hm yhi par css use kar liye 
    document.getElementsByTagName('b')[0].style.fontsize='40px';

    

    3. perform actions
    // without click on buttom we can enter in website  ex( i am feeling )
    document.getElementByClassName('activity-stream')[1].click()


 */



  /******** with the help of javascript   we can make  Chrome Extensions***************** 

   *  create  features : add new functionalities to chrome 
   *  interact with web :  modify or red webpage content 
   * api access :  use chrome's built in functions
   * user experience : 
   
   */
 


/* practice exercise :
  
question: change facebook page to display " i am learning js"

ans: document.body.innerHTML="i am learning js";  // fb ke page par i am learning javascript aa jaayega 


*/


/* *******************-----------  Strings -------------***********

string can be defined using single quotes ' ' , double quotes " " , backticks ` ` . backticks allow for template literals   (if you want to more text in webpage then you can use backticks)

* with the help of backticks we can make a string .

*/


// console.log(`   shambhu pandey     
//   pandey ji `);   // sucessfully run 


  /*   console.log("shambhu pandey
   pandey ji ");    */   // if we use here single quotes or double quotes then it throw an error   
                            //because single and double quotes allow to write text in single line but backticks allow to write nextline 








/* *****************-------------concatenate string -----------*****************   

console.log("shambhu pandey ");  // shambhu pandey 
console.log("shambhu"+" pandey");  // shambhupandey
console.log(4+5);  // 9
console.log('4'+'5');   45
console.log('shambhu pandey '+1+1+1 + 'pandey ji ');  //shambhu pandey 111pandeyji
console.log("shambhu pandey"+ (1+1+1)+"pandey ji");   //shambhu pandey3pandey ji


*/






/* ------------------********************** Type of operator *****************--------------------
 
console.log(typeof("shambhu"));  //string
console.log(typeof(123));   // number
console.log(typeof("123"));   //string 
console.log(typeof(11==11));  //boolean
console.log(typeof (true));   //boolean

*/





/* *****************------------------ PRACTICE EXERCISE ------------******************    */

// question 1:  at a restaurant you ate : 1 dal   100 rupya , 2 roti  10 rupya each , 1 ice cream 30 rupya , claculate and dispaly the final bill amount

var dal =100;
var roti= 10;
var ice =30;
var twoRoti=10*2;

var totalBill=dal+roti+ice+twoRoti;
    console.log(totalBill)  // document.write( totalBill);

// calculate 18 percent GST on iPhone15  79,990 rupees  and 2 airpods pro 24990 rupees 
let iphone=79990;
let airpods=24990;
// 18 percent gst ;

let bill =(1*79990 +2*24990)*18/100;
console.log(bill);

// question 2: create string using all 3 methods ;

console.log("shambhu pandey ");
console.log('pandey ji');
console.log(`shambhu 
babu `);


  // conactenate string with strings and string with numbers 
console.log("shambhu pandey ");
console.log("shambhu "+"pandey");
console.log("shambhu "+"123");


  /*question 4: create order summary string for our myntra cart

 we can give ans=> in the form of : `your final myntra  bag is 1000`

 display order summary in a popup;
 ans: alert(`your final myntra  bag is 1000`);


 */





 /* IN CSS WE CAN TARGET THE ELEMNTS WITH THE HELP OF  : CLASS AND ID 

     AND IN HTML WE CAN TARGET THE ELEMENTS BY _BLANK ,_SELF AND OTHER . 





/*--------------  WITH THE  HELP OF QUERY SELECTOR WE CAN TARGET THE ELEMENTS ----------------------------------

*****************QUERY Selector     (USED TO TARGET ELEMENT) *********************************----------------------------
  * getElementById:   finds one elements by its id

 *   getElementsByClassName:  finds elemnts by their class ,returns a list

 * querySelector:  Finds the first elemnt that matches a css selector

 * purpose : to interact withor modify webpage elemnt;
  



 *****************  document.getElementById('click-me');   ab jha par bhi click-me name ka  id hoga wha  par point kra dega html code me inspect karne par    but ab getelementbyid getelementbyclassname nhin use hota hai ab simply hm querySelector likh dete hai 




//   document.querySelector('h1');  // h1 tag ko point karayega
//  document.querySelector('#click-me')   // click-me waale id ko point karayega  
 // document.querySelector('.push-me');   // ek hi class ko point karayega
// document.querySelectorAll('.push-me')// ab sara push-me wala class ko point karayega 


*/
