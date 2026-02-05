//alert("warning"); One time pop up
//console.log(alert);

//let name=prompt("hello");
//console.log(name);//take input from user
//  Get user to input a number using promt ("Enter a number:"). Check if the number is a multiple of 5 or not.


let Number=prompt("Enter a number:");
if(Number % 5 === 0){
    console.log(Number," is a multiple of 5.");
}
else {
    console.log(Number," is Not a multiple of 5.");
}


//writ a code which can give grades to students according to their scores: 80-100, A 70-89,B 60-69,C 50-59,D 0-49,F .

let mark=prompt("Enter your marks");
if(mark <= 100 && mark >=90)
   grade = "A";

else if(mark <= 89 && mark >=70)
    grade = "B";

else if(mark <= 69 && mark >=60)
    grade = "C";
else if(mark <= 59 && mark >=50)
    grade = "D";
else if(mark <= 49 && mark >=0)
    grade = "F";

console.log("According to your marks your grade is ",grade);