function a()
{
    console.log('Function A');
}
function b()
{
    console.log('Function B');
    // for(i=1;i<10;i++)
    // {
    //     console.log(i);
    // }
}
function c()
{
    console.log('Function C');
}
a()
// async function
setTimeout(b,10)
c()

// sync callback function
function calculator(myCallback)
{
    myCallback()
}

function addition()
{
    console.log('Hi Addition')
}
// async callback function
setTimeout(calculator,3000,addition)  
// calculator(addition)
console.log('hi calculator function')