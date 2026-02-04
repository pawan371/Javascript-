//variable & variable rules
fullname = "Tony Stark";
Age = 24;
price = 99.98;
x = null;
y = undefined;
isfollow= false;
console.log(fullname);
console.log(Age);
console.log(price);
console.log(x);
console.log(y);
console.log(isfollow);
fullname=25;
console.log(fullname);
let fullName="tony stark";
/*let age=34;
let price=990.34;
console.log(fullName);
console.log(age);
console.log(price);*/
let age=23;
/*var age=34;
var age=12;*/
console.log(age);

const PI=3.14;
console.log(PI);

let a;
console.log(a);

/*const b;
console.log(b);*/
{
    let a=5;
    console.log(a);
}
{
    let a=6;
    console.log(a);
}
let b=4;

let price_1=100.5;
console.log(price_1);

let s="symbole";
console.log(s);

//Data type in Js
const student = {
    fullName:"Rahul Kumar",// key
    age: 20,
    cgpa: 6.5,
    isPass: true
}
    console.log(student["age"]);
    console.log(student.age);
    console.log(student.fullName);
    student["age"]=student["age"]+2;
    console.log(student.age);
    student["name"]="Pawan Tiwari";
    console.log(student.name);