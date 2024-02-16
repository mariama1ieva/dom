"use strict"
let ul = document.querySelector("ul")
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
    let icon = document.createElement("i");
    li.className = "list-group-item";
   
    li.classList.add("list-group-item","align-icon" );
   
    icon.innerHTML = "<i class='fa-solid fa-xmark fa-xl' style='color: #000000;'></i>";
    icon.className = "cancel";
    li.innerText = text;
    ul.append(li);
    li.append(icon)
    icon.addEventListener("click",function(){
      ul.removeChild(li)
   })
    input.value = "";
   

  
  
})