const backToTop = document.querySelector(".back-to-top")
const observerTarget = document.querySelector("header");
const observer = new IntersectionObserver((enteries, observer) => {
    enteries.forEach((entry) => {
        if(!entry.isIntersecting){
            backToTop.classList.add("shown");
            
        }else{
            backToTop.classList.remove("shown");
        }
    });
});

observer.observe(observerTarget)
/*window.addEventListener("scroll", () => {
    
    if(window.scrollY >= 900){
        backToTop.style.visibility = "visible";
    }
    else{
        backToTop.style.visibility = "hidden";
    }
});*/