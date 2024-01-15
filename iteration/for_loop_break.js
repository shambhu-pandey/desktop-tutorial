// for loop 

for(let i=0;i<10;i++){
  console.log(i);
}

// printing table 
for(let i=1;i<=10;i++){
  let n=5;
  console.log(`${n}*${i} = ${n*i}`)
}



// if you want to print 1 to 15 table then 

for(let i=1; i<=15;i++){
  console.log(` this is ${i} table`);
  for(let j=1; j<=10;j++){
      console.log(`${i}*${j} = ${i*j}`);
  }
}





//******************************Array*****************************************

// if you want to print all array to many times then 
let myarray =["shambhu", "pandey ", "pratik","priyanshu"];

for(let i =0;i<=myarray.length;i++){
  console.log(myarray)
}


//if you want to print only one times then you can use this method 
let myarray1 =["shambhu", "pandey ", "pratik","priyanshu"];

for(let i =0;i<=myarray1.length;i++){
  console.log(myarray1[i]);
}





// ************break************
for(let i=1;i<=10;i++){
  if(i==5){
  console.log(` 5 is the best number: `);
  break;
  }
  console.log(`value of i is ${i}`);
}






//************continue ************* */
for(let i=1;i<=10;i++){
  if(i==5){
  console.log(` 5 is the best number: `);
  continue;
  }
  console.log(`value of i is ${i}`);
}
