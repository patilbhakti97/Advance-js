// eg 1
function fun()
{
    return 2023; 
}

let b=fun();
console.log(b)

// eg2
function higherOrd(){
    return function(){console.log('This is higher order function')};
}
let c=higherOrd();
console.log(c)

// eg 3
function bhakti(){
    console.log('This is main function');
    return function(){console.log('This is higher order function')};
}
let result=bhakti();
result()

// eg 4
function main(){
    console.log('This is main function');
    return function(){console.log('This is higher order function')}; 
    // upper line is called as higher order
}
main()()
