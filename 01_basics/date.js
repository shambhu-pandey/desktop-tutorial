let myDate = new Date();
console.log(myDate);

console.log(myDate.toString());
console.log(myDate.toLocaleString());
console.log(myDate.toDateString());
console.log(myDate.toJSON());

console.log(typeof myDate);

// let myCreateDate = new Date(2023, 10, 12);
// console.log(myCreateDate);
let myCreateDate = new Date(2023, 10, 12, 1, 15 ,13);
console.log(myCreateDate);

let myCreatedate=new Date("2023-11-12");
console.log(myCreatedate);

let myCreatedDate = new Date("01-14-2023")
console.log(myCreatedDate )
console.log(myCreatedDate.toLocaleString());


let myTimestamp =Date.now();

console.log(myTimestamp );
console.log(myCreatedDate.getTime());
// second me 
console.log(Math.floor(Date.now()/1000));





let newdate=new Date();
console.log(newdate);
console.log(newdate.toString());
console.log(newdate.getDate());
console.log(newdate.getDay());
console.log(newdate.getFullYear());
console.log(newdate.getMonth()+1);
console.log(newdate.getHours());
console.log(newdate.getMinutes());

// `${newDate.getDay()} and the time `


console.log(newdate.toLocaleString('default' ,{
  weekday : "narrow",

}))

console.log(newdate.toLocaleString('default' ,{
  weekday : "long",

}))

console.log(newdate.toLocaleString('default' ,{weekday : "short", month:"long"}))



let my_new_date = new Date("01-15-2024");

console.log(my_new_date);
console.log(my_new_date.toLocaleString('default' ,{weekday : "long",}));


console.log(my_new_date.toLocaleString('default' ,{weekday : "long", month : "long",date:"long"}));