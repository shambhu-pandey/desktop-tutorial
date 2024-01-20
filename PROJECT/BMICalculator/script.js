let form = document.querySelector('form');

form.addEventListener('submit' , function (e) {
      e.preventDefault();

  let height = parseInt(document.querySelector('#height').value);

let weight= parseInt(document.querySelector('#weight').value);

let result=document.querySelector('.result');

if(height===" " || isNaN(height) || height===0){
   result.innerHTML=`please enter valid ${height}`;
}

else if(weight===" " || isNaN(weight) || weight===0){
  result.innerHTML=`please enter valid ${weight}`;
}

else{
  const bmi = (weight/((height*height)/10000)).toFixed(2);
  result.innerHTML=`<span>${bmi}</span>`;
}


});