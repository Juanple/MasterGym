const rightMenuOpen=document.querySelector("header .rightMenuOpen button");
const rightMenu=document.querySelector(".rightMenu");
const rightMenuClose=document.querySelector(".rightMenu .rightMenuClose i");
const body=document.querySelector("body");

// Menu de la derecha nav
rightMenuOpen.addEventListener("click",function(){
    rightMenu.style.display="flex";
    body.style.overflow="hidden";
})

rightMenuClose.addEventListener("click",function(){
    rightMenu.style.display="none";
    body.style.overflow="visible";
});



