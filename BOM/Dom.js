// // q1
// let images=['file:///D:/SDE%2013/HTML5/images/mobile.jpg','file:///D:/SDE%2013/ad/images1/barley-field-g510b4bc0a_1920.jpg','file:///D:/SDE%2013/HTML5/images1/seeds.jpg']
// for(localUrl of images)
// {
// //created img
// let createImage=document.createElement('img')
// //add attributes
// createImage.setAttribute('height','300px')
// createImage.setAttribute('width','300px')
// createImage.setAttribute('src',localUrl)
// //modify attribute
// //append image   in body 
// document.body.appendChild(createImage)
// console.log(createImage)
// }

// q2
let marks = parseInt(prompt('Enter Your marks'))
if (marks >= 40) {
    document.querySelector("#pass").innerHTML = "Congratualtion,U are passed!!"
    let result = document.querySelector("#pass")
    result.style.backgroundColor = "green"
    console.log(result)
}
else if (marks < 40) {
    document.querySelector("#pass").innerHTML = "Sorry,U are failed!!"
    let result1 = document.querySelector("#pass")
    result1.style.backgroundColor = "red"
    console.log(result1)
}