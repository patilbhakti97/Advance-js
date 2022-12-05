function Bhakti(a,b,c,d){
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
}
let arr=[20,60,30,40]
Bhakti(arr[0],arr[1],arr[2],arr[3])

// in this method we have to take large no. of values for calling when there are large no of variables...
// so simply we use fun(...arr)
function fun(a,b,c,d,e,f){
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
    console.log(e);
    console.log(f);
}
let Array=[10,20,30,40,50,60]
fun(...Array)