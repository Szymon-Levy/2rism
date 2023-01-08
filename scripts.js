// offvanvas toggle

const offcanvasToggler = document.querySelector(".offcanvas-toggler");
const mainNavigation = document.getElementById("main-navigation");

offcanvasToggler.addEventListener("click", () => {
    offcanvasToggler.classList.toggle("active");
    mainNavigation.classList.toggle("active");
});

// close offcanvas when menu item clicked

const menuPositions = document.querySelectorAll("#main-navigation ul li");

if (menuPositions){
    menuPositions.forEach(item => {
        item.addEventListener("click", () =>{
            offcanvasToggler.classList.remove("active");
            mainNavigation.classList.remove("active");
        })
    })
}


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


//animations intersection observer

const animatedElements = document.querySelectorAll(".animate__animated");

const animationsObserver = new IntersectionObserver(elements => {
    elements.forEach( element => {
        if(element.isIntersecting){
            let animationAttribute = element.target.getAttribute("data-anim");
            element.target.classList.add(animationAttribute);
        }
    });
});

animatedElements.forEach(element => {
    animationsObserver.observe(element);
});