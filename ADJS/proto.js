let arr=[]
let obj={}
console.log(arr);

// proto inheritance
let obj1={
    name: 'Bhakti'
}
let obj2={
    __proto__:obj1,
    lastName: 'Patil',
fun:function(){
    console.log(this.name,'',this.lastName)
}
}
let obj3={
    __proto__:obj2
}
obj3.fun()