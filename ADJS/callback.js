function calculator(a,b,myFun)
{
    myFun(a,b)
}
function addition(k,y)
{
    console.log("Addition: ",k+y);
}
function substraction(a,b)
{
    console.log("Substraction: ",a-b);
}
function multiplication(c,d)
{
    console.log("Multiplication: ",c*d);
}
function division(e,f)
{
    console.log("Division: ",e/f);
}
calculator(7,6,addition)
calculator(5,6,substraction)
calculator(10,5,multiplication)
calculator(20,5,division)