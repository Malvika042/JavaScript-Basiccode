// memory
//STACK(PRIMITIVE -> we get copy of the variable ) HEAP(NON-PRIMITIVE-> we get the reference of the variable, changes reflected to original values)

// let myName = "Malvika"
// let anotherName = myName
// anotherName = "Mallu"
// console.log(myName);
// console.log(anotherName);

// let score = "33"
// console.log(typeof score);
// console.log(typeof (score));

// let valueinNumber = Number (score)
// console.log(typeof valueinNumber);
// console.log(valueinNumber);
// "33" => number 

// let score = "33abc"   // this string is not converted into the number and giving the value NAN
// // NOT A NUMBER
// console.log(typeof score);
// console.log(typeof (score));

// let valueinNumber = Number (score)
// console.log(typeof valueinNumber);
// console.log(valueinNumber);


// let score = 0   // this string is not converted into the number and giving the value NAN
// // NOT A NUMBER
// console.log(typeof score);
// console.log(typeof (score));

// let valueinNumber = Boolean (score)
// console.log(typeof valueinNumber);
// console.log(valueinNumber);   // giving true

/********************Strings********* */
const name = "malvika"
const repocount = 50

//console.log(name  +  repocount  +  "value");

// console.log(`hello my name is ${name} and my repo count is ${repocount}`);
 const getName = new String('mal-vik-aaa-a') //new way to declare string
// console.log(getName[0]);
// console.log(getName.__proto__); // object which is empty now

// console.log(getName.length);
// console.log(getName.toUpperCase());

// console.log(getName.charAt(2));
// console.log(getName.indexOf('a'));
const newString = getName.substring(0,4)
console.log(newString);

const anotherString = getName.slice(8,2)  // can have negative and positive values
console.log(anotherString);

const newstringOne = "     malvika     "
console.log(newstringOne);
console.log(newstringOne.trim());

const url = " https://malvika.com/malvika%20singh"
console.log(url.replace('%20', '-')) //convert %20 into '-'
console.log(url.includes('mal')) //check if it is present or not
console.log(getName.split('-'))  //tell different strings which are splitted by the -
