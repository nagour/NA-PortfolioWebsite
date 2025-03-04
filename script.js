let navLinks = document.querySelectorAll('header nav a');

// Function to set the active link color to yellow and keep it until another section is clicked
function setActiveLink() {
    // Remove active class from all links
    navLinks.forEach(link => {
        link.classList.remove('active');
    });

    // Get the current page's pathname (excluding query parameters or fragments)
    const currentPage = window.location.pathname.split('/').pop();  // Get the last part of the URL, e.g., "projects.html"

    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');  // Get the href attribute of the link
        const linkPage = linkHref.split('/').pop(); // Get the last part of the link href (to match against the current page)

        // If the current page matches the link's href, add the 'active' class
        if (linkPage === currentPage) {
            link.classList.add('active');
        }
    });
}

// Call setActiveLink function when the page is loaded
document.addEventListener("DOMContentLoaded", setActiveLink);

// Optional: If you have links that redirect to other pages and want to update the active link after a click:
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Wait for the page to load and then update the active link
        setTimeout(setActiveLink, 100);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const hamMenu = document.querySelector(".ham-menu");
    const offScreenMenu = document.querySelector(".off-screen-menu");

    hamMenu.addEventListener("click", () => {
        hamMenu.classList.toggle("active");
        offScreenMenu.classList.toggle("active");
    });
});