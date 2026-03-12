//Variable ko kaise banate hai 

/*let name="pawan";
if(true){
  let c=90;
}
console.log(name); 
console.log(c);//error generated

*//*
const account=1234;

console.log(account);
*/
/*var a=10;// change value and declare many time but let value change but not declare two or more time

var a=30;

console.log(a);//scope ke bahar access kr sakte hai var me but let access 
if(true){
  var a=20;
}

function fun(){
  var c=30;
}
var b=40;
console.log(c)
*/


//data types 


//number,string,boolean,undefined,null,bigint,symbole


//number
//let a=10;
//let b=2.36;
//console.log(a,b);
//console.log(typeof a);


//string

let str="Strike is coming ";
let d='Anjali';
console.log(str,d);
console.log(typeof d);
//str[0]=M;//imputable (not change value)
console.log(str[0]);


//boolean
let login=true;
let f=false;
console.log(login,f);
console.log(typeof f);

//undefined
let user;
//const p;
console.log(user);

//big int
let num=2353942342789578458n;
console.log(num);

//null

let weather=null;
console.log(weather);

console.log(typeof weather);

//let weather=current_weather("dwarka");
//25
//null
//undefined

//symbol
const id1=Symbol("id");
const id2=Symbol("id");
console.log(id1==id2);
console.log(typeof id2);

//non primitive data type
//array, object, function

//array
let arr=[10,20,11,"Rohit",true];
console.log(arr);
console.log(typeof arr);

//object

// pawan 123 13 gen
let obj={
  name:"Pawan",
  account:1234,
  age:18,
  category:'gen'
}
console.log(obj);
console.log(obj.age);
obj.name="Tiwari";//mutable object
console.log(obj);
//function
let s = function add(){
  console.log("Hello");

}
//add();        // call function

//in javascript function can store in a variable
s();
console.log(typeof s);


let a=10;
let b=a;

b=20;
console.log(a,b);//original location ko change nhi karta new copy bna deta hai 

let obj2=obj;
obj2.name="Rohan";
obj2.age=21;
console.log(obj);//same data ko copy krte

