function bhakti(para){
    console.log(para)
}
bhakti(22,77,88,13)
// we can not get multiple values in single variables
// using rest parameters we can collect multiple values in single parameter
// please find below

function fun(...para1){
    console.log(para1)
}
fun(22,55,13,50)