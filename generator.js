function* fun(){
    yield "Bhakti",
    yield "Patil",
    yield "ddmmyyyy"
    yield "pb@gmail.com"
}
let obj=fun();
for(k of obj){
    console.log(k);
}