// let arr=[0,1,2,3,4,5]
// for(u of arr){
//     console.log(u)
// }

// let obj={}
// for(v of obj){
//     console.log(v)
// }

// iterable
let obj1=
{
    [Symbol.iterator]:function()
{
    count=0;
    let iterator={
        next:function fun(){

        count++
    if(count==1){
        return{value:"One",done:false}
    }
    else if(count==2){
        return{value:"Two",done:false}
    }
    else if(count==3){
        return{value:"Three",done:false}
    }
    else if(count==4){
        return{value:"Four",done:false}
    }
    else{
        return{value:"Five",done:true}
    }
}
    }
    return iterator;
}
}
for(y of obj1){
    console.log(y)
}