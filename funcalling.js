// call by value
function fun(a){
    console.log('Result is ',a);
}
let m=50;
fun(m);
fun(100)

// call by reference
function ref(a){
    console.log('Result is ',a);
}
let b=[11,44,63,77,85]
ref(b)
let employee={
    name:"Bhakti",
    salary:20000
}
ref(employee)