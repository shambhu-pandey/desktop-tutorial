let pro={

};

console.log(pro);

let product ={

  company: 'levis',
  item_name: 't-shirt',
  'cloth-types' :'cotton',      // this type of key values we can not access using dot operaror    because variable or key is string  so here we can use Bracket operator 
  price: 1200,  // we can price value as number or string both 
};

console.log(product);
console.log();
console.log(typeof product );
console.log(typeof(product.company));
console.log(product.company);
console.log(product.item_name)
console.log(product.price);
//console.log(product.cloth-types);// we can not access using dot operartor so here we can use Bracket operaor 

product.company="puma";   // value upadate;
console.log(product);

product.size='m';    //  new property added 
console.log(product)


let propertyName ='cloth-types';
 console.log(product.propertyName);   // here we can not access by dot operator 
console.log(product[propertyName]);


// ********************We can access object by using Bracket [''] **************

console.log(product);
console.log(product['company']);
console.log(product['item_name']);
console.log(product['price']);
console.log(product['cloth-types']);

//  **************************************Delete  values *********************** 

delete product.company;
console.log(product);

delete product['price'];
console.log(product)