var typed = new Typed(".multiple-text", {
    strings: ["Software Engineer", "Frontend Developer", "Backend Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true

})


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

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    }) ;
};
