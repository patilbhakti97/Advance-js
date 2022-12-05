// lexical scope: use to resolve the variablr names when function is created inside another function.
// child function accessed its parent function's variable.
function fun(){
    let a=100;
    function fun1(){
        let b=200
        console.log('addition:',a+b);
    }
    fun1();
}
fun();

// closure:a function after execution still persist its state.
// it provides access to outer scope of fun from inside the inner fun,even after the outer fun has closed.
let x;
function f(){
    x=400;
    console.log("x:",x);
}
f();
console.log('After execution',x)

let y;
function f1()
{
    let z=250;
    y=200;
    return function f3(){
        z=y+10;
    }
    f3()
}
f1()
console.log('after execution',y)

// currying: we can break or separate argument list in individual fun and call it together.
function student(obj)
{
    return function(key){
        return obj[key]
    }
}
let details={
    Name: 'Bhakti',
    Rollno: 30,
    class: 'BE/A',
    mail: 'patilb123@gmail.com'
}
let info=student(details)('Rollno')
console.log(info);

function Multi(A)
{
    return function(B){
        return A*B;
    }
}
let store=Multi(12)(5);
// let ans=store(2);
// console.log(ans);
console.log(store)
