// const grandparent=document.getElementById("grandparent-id")
// grandparent.style.background="#333"


// const grandparent=document.getElementById("grandparent-id")
// changecolor(grandparent)
// function changecolor(element){
// grandparent.style.background="#333"
// }


// const grandparent =document.getElementById("grandparent-id")
// // const parent=Array.from(document.getElementsByClassName("parent"))
// const child=Array.from(document.getElementsByClassName("child"))
// // parent.forEach(changeColor)
// changeColor(child[1])
// console.log(parent)
// function changeColor(element){
//  element.style.background="#333"
// }


// const grandparent = document.querySelector("#grandparent-id")
// changeColor(grandparent)
// function changeColor(element){
//       element.style.background="#333"
//      }


// const parent=document.querySelector(".parent")
// changeColor(parent)
// function changeColor(element){
//        element.style.background="#333"
//             }


// const grandparent = document.querySelector(".grandparent")
// const parent = Array.from(grandparent.children)
// parent.forEach(changeColor)
// function changeColor(element){
//         element.style.background="#333"
//             }



//  const grandparent = document.querySelector(".grandparent")
// const parent = Array.from(grandparent.children)
// const parentOne=parent[0]
// const children=parentOne.children
// changeColor(children[0])
// function changeColor(element){
//              element.style.background="#333"
//             }



// const grandparent = document.querySelector(".grandparent")
// const childOne = grandparent.querySelector(".child")
// changeColor(childOne)
// function changeColor(element){
//              element.style.background="#333"
//             }


// const grandparent = document.querySelector(".grandparent")
// const children = grandparent.querySelectorAll(".child")
// children.forEach(changeColor)
// function changeColor(element){
//              element.style.background="#333"
//             }



// const childOne = document.querySelector("#child-one")
// changeColor(childOne)
// function changeColor(element){
//              element.style.background="#333"
//             }


// const childOne = document.querySelector("#child-one")
// const parent=childOne.parentElement
// changeColor(parent)
// function changeColor(element){
//              element.style.background="#333"
//             }



// const childOne = document.querySelector("#child-one")
// const parent=childOne.parentElement
// const grandparent=parent.parentElement
// changeColor(grandparent)
// function changeColor(element){
//              element.style.background="#333"
//             }




// const childOne = document.querySelector("#child-one")
// const grandparent=childOne.closest(".grandparent")
// changeColor(grandparent)
// function changeColor(element){
//              element.style.background="#333"
//             }



// const childOne = document.querySelector("#child-one")
// const childTwo=childOne.nextElementSibling
// changeColor(childTwo)
// function changeColor(element){
//              element.style.background="#333"
//             }



const childOne = document.querySelector("#child-one")
const childTwo=childOne.nextElementSibling
changeColor(childTwo.previousElementSibling)
function changeColor(element){
             element.style.background="#333"
            }
