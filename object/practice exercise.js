
// 1. create object to represent a product from myntra 

let product={

  company: 'nike',
  size: 'm',
  color: 'black',
  price: 1200,
  name: 'jeans',

};

// 2. create an object with two references and log changes to one object by changin the other one.


// use bracket notation to display delivery-time

let product1={

  company: 'nike',
  size: 'm',
  color: 'black',
  price: 1200,
  name: 'jeans',
  'delivery-time' : '1pm',
};
console.log(product1);

let copyproduct1=product1;

console.log(copyproduct1);

copyproduct1.size='2xl';
console.log(product1);

copyproduct1.company='levis';
console.log(product1);

copyproduct1.price='200';
console.log(product1);
console.log(product);



// 3.use bracket notation to display delivery-time.

console.log(product1['delivery-time'])







// 4. given an object { message : 'good job ' , status : 'complete'},use de-structing to create two variables message and status   }

let  demo={

  message: 'good job',
  status : 'complete',

};

// let {message}=demo;
// console.log(message);

// let {status} =demo;
// console.log(status);

let  {message,status }=demo;

console.log(message , status );







// 5. Add  function isIdenticalProduct to compare two product objects.



function isIdenticalProduct ( product4 , product5 ){

     if(typeof product4!== 'object' || typeof product5 !== 'object'){
      console.warn('parameter passed was not an object');
      return false;
     }
    if(product4==product5){
      return true;
    }

    if(product4.company===product5.company &&
      product4.size===product5.size &&
      product4.color===product5.color &&
      product4.price===product5.price &&
      product4.name===product5.name 
      // product4['delivert-time']==product5['delivery-time']
     )    {    return true ;
     }

    else{
    return false;
  }
}

let product4={

  company: 'nike',
  size: 'm',
  color: 'black',
  price: 1200,
  name: 'jeans',
  'delivery-time' : '1pm',
};

let product5={

  company: 'nike',
  size: 'm',
  color: 'black',
  price: 1200,
  name: 'jeans',
  'delivery-time' : '1pm',
};

let product6={

  company: 'puma',
  size: 'm',
  color: 'white',
  price: 1200,
  name: 'jeans',
  'delivery-time' : '1pm',
};


console.log(isIdenticalProduct( product4 , product5));
console.log(isIdenticalProduct( product4 , product));

console.log(isIdenticalProduct( product4 , product4));
console.log(isIdenticalProduct( product4 , ''));
console.log(isIdenticalProduct( product4 , product6));

console.log(isIdenticalProduct( product4 , prod));

