// if (false) {
//     console.log("I am inside if Block")
//     console.log("I am still inside if Block")

// }else if(true){
//     console.log("I am still inside Elseif Block")

// }
// else{
//     console.log("I am still inside Else Block")

// }

//LCD

var whoIsHere='user'
if (whoIsHere==='user') {
    console.log('Greeting message for user')
    console.log('Allow access to view all courses ')    
}
else if  (whoIsHere==='Teacher') {
console.log('Greeting message for TEACHER')
console.log('Allow access to his courses')
}else{
    console.log('MESSAGE:please verify your Email')
}


// Grade problem

// students marks:
// 10-amazing
// 5-good
// 3-poor
// 0-fail

let marks=5
if (marks==10) {
    console.log('Amazing')
}
else if (marks==5) {
    console.log('Good')
}
else if (marks==3) {
    console.log('Poor')
}
else if (marks==0) {
    console.log('Fail')
    
}
else('Result not found')