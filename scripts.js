// offvanvas toggle

const offcanvasToggler = document.querySelector(".offcanvas-toggler");
const mainNavigation = document.getElementById("main-navigation");

offcanvasToggler.addEventListener("click", () => {
    offcanvasToggler.classList.toggle("active");
    mainNavigation.classList.toggle("active");
});


//sticky header

const mainHeader = document.getElementById("main-header");


window.onscroll = function (){
    scrollFunction();
};

function scrollFunction (){
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100 ) {
        mainHeader.classList.add("sticky");
    }

    else {
        mainHeader.classList.remove("sticky");
    }
    
};