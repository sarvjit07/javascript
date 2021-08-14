// const grandparent=document.getElementById("grandparent-id")
// grandparent.style.background="#333"


// const grandparent=document.getElementById("grandparent-id")
// changecolor(grandparent)
// function changecolor(element){
// grandparent.style.background="#333"
// }


const grandparent =document.getElementById("grandparent-id")
// const parent=Array.from(document.getElementsByClassName("parent"))
const child=Array.from(document.getElementsByClassName("child"))
// parent.forEach(changeColor)
changeColor(child[1])
console.log(parent)
function changeColor(element){
 element.style.background="#333"
}


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