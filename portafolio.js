const menu=document.querySelector(".menu");
const burguerb=document.querySelector(".burguer-button")
burguerb.addEventListener("click",aparecer)
function aparecer(){
if(menu.classList.contains("isActive")){
    menu.classList.remove("isActive")
}else{
    menu.classList.add("isActive")
}}