let result = document.querySelector('.result');


setInterval(function() {
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  result.innerHTML=date.toLocaleTimeString();
},1000);

