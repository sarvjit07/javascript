//             //  adding Element//

// const body=document.body
// body.append("hello world","bye")

            /*creating Element*/
 
// const body=document.body
// const div= document.createElement("div")
// body.append(div)    

           //Modifying Element Text
   
//   const body=document.body
//   const div= document.createElement("div")
// //   div.innerText="Hello World"
//   div.textContent="hello world"
//   body.append(div)     

// const body=document.body
// const p=document.createElement("p")
// const strong=document.createElement("strong")
// strong.innerHTML="this is test"
// // p.innerHTML="hello"
// p.append(strong)
// body.append(p)


// const div=document.querySelector('div')
// console.log(div.textContent)
// console.log(div.innerText)
 
                 
             //Modifying Element Text

   
//   const body=document.body
//   const div= document.createElement("div")
// //   div.textContent="<strong>hello world</strong>" 
// div.innerHTML="<strong>hello world</strong>"
// // div.innerText="<strong>hello world</strong>"
//   body.append(div)   
  
               /*ERROR*/


//   const body = document.body
//   const div = document.createElement("div")
// const strong=document.createElement("strong")
// strong.innerText= "Hello this is test"
// div[0].append(strong) 
//   body.append(div)


                //Removing Element


                const body = document.body
                const div=document.querySelector("div")
                const spanhi=document.querySelector("#hi")
                const spanbye=document.querySelector("#bye")
                // spanbye.remove()
                //        // REMOVING ELEMENT ADDED
                // div.append(spanbye)
                // div.removeChild(spanhi)
                spanhi.remove()



                // //Modifying Element Attributes
                // const body = document.body
                // const div=document.querySelector("div")
                // const spanhi=document.querySelector("#hi")
                // const spanbye=document.querySelector("#bye")
                // console.log(spanhi.getAttribute("id"))
