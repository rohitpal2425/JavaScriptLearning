let a=45;
let b=20;
console.log("The two numbers are:", a ,"and" ,b);
//these are arithmetic  operators
let c=a+b;
console.log("The sum of 'a' and 'b' is :", c);
let e=a-b;
console.log("The difference  of 'a' and 'b' is :", e);
let d=a%b;
console.log("The modulo of 'a' and 'b' is:",d);
console.log("these are unary operators");
console.log("this is increment operation:", a++);
console.log("this is decrement operation on 'b':", b--);
//Comarison operators
console.log("Comaprison operatrs:");
console.log("a==b", a==b);
console.log("a!==b", a!==b);
console.log("a<b", a<b);
console.log("a>b", a>b);
//logical operators
let cond1= a>b; //true
let cond2= a==40; //true
console.log("cond1 && cond2", cond1 || cond2);
console.log("!cond1", !cond1);
//conditional statements
//if-else statement
let age=4;
if(age>18)
{
    console.log("You are eligible for vote");
}
else{
    console.log("You can go home");
}
let num=210;
if(num % 2==0)
{
    console.log(num, "is even");
}
else{
    console.log(num, "is odd");
}
// if-condition
let mode="Dark";
let color;
if(mode=="Dark")
{
    color="White";
}
if(mode=="Light")
{
    color="Black";
}
console.log(color);
//else-if condition
if(age<18)
{
    else if(age>5)
    {
        console.log("This is children");
    }
    else if(age<5)
    {
        console.log("This is Ali thulo manxe");
    }
}
else{
    console.log("this is buddha mannxee");
}
