"use strict"


// let name = "Ilham";

// let result = [...name]

// // console.log(result);

// let  nums1 = [1,2,3,4,5];

// let nums2 = [6,7,8,9];

// let res = [...nums1,...nums2]

// // console.log(res);

// function showNums(...number){
//     console.log(number);
// }

// function test(){
//     arguments.forEach(element => {
//         console.log(arguments);
//     });
    
// }
// test(1,2,3,4,5)
// showNums(1,2,3,4,5)


// let h1 = document.getElementsByTagName("h1");

// let elems = document.getElementsByClassName("test")

// for (const item of elems) {
//     console.log(item);
// }

// let elem = document.getElementById("salam")

// console.log(elem);

// let elem = document.querySelectorAll("h1");
// console.log(elem);

let elem = document.querySelector(".text");
// console.log(elem.innerHTML);
// console.log(elem.innerText);


// elem.innerHTML = "<h1>Salam</h1>";
// elem.innerText = "<h1>Salam</h1>";


// elem.style.color="red";
// elem.style.backgroundColor="blue";
// elem.style.padding = "50px"



//  elem.className = "salam";

// elem.classList.add("salam");
// elem.classList.remove("test2")

// if(elem.classList.contains("test2")){
//     elem.classList.remove("test2")
// }

// let btn = document.querySelector(".add");
// console.log(btn);
// let firstElem = document.querySelector(".first")
// let secondElem = document.querySelector(".second")
// let box = document.querySelector(".text")


// firstElem.addEventListener("click",function(){
//     // alert("salamlar")
//     // box.style.backgroundColor = "red";
//     // box.classList.add("first-color");
//     if(!box.classList.contains("first-color")){
//         box.classList.remove("second-color")
//         box.classList.add("first-color")

//     }
// }) 

// secondElem.addEventListener("click",function(){
//     // alert("Necesen")
//     // box.style.backgroundColor = "yellow";
//     if(!box.classList.contains("second-color")){
//         box.classList.remove("first-color")
//         box.classList.add("second-color")

//     }
// }) 
let ul = document.querySelector("ul")

// console.log(ul);

document.querySelector(".add").addEventListener("click",function(){
    let input = document.querySelector(".input-text")
    let text = input.value;
    if(text.trim() == ""){
      document.querySelector(".validation").classList.remove("d-none")
        return;
    }else{
        document.querySelector(".validation").classList.add("d-none")
    }
    let li = document.createElement("li");
    li.className = "list-group-item";
    li.innerText = text;
    ul.append(li);
  
    input.value = "";
   

  
  
})