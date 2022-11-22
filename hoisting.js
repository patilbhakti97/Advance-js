// // var hoisting
fun();
function fun(){
    console.log(d);
    {
        d=180;
        var num=200;
    }
    var d;
}

fun1();
function fun1(){
    
    console.log(e);
    {
        var num=200;
    }
    e=180;
    var e;
}

fun2();
function fun2(){
    f=180;
    console.log(f);
    {
        var num=200;
    }
    var f;
}

// let and const hoisting
hoist1();
function hoist1(){
let b;
console.log(b);
{
    b=180;
    var num=200;
}
}

hoist2();
function hoist2(){
let c;
console.log(c);
{
    var num=200;
}
c=180;
}

hoist();
function hoist(){
let a;
a=180;
console.log(a);
{
    var num=200;
}
}
