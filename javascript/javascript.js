let headerIcon = document.querySelector(".header__icon");
let headerMenuList = document.querySelector(".header__nav-menu-list");

/*Evento Menú RWD*/
headerIcon.addEventListener("click", ()=>{
    headerMenuList.classList.toggle("show");
});