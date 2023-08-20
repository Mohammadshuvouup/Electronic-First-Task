let hamburger_icon = document.querySelector(".nav-wrapper .hamburger-icon");
let main_navbar = document.querySelector(".main-navbar");

// toggle menu on hamburger-icon click (mobile)
hamburger_icon.addEventListener("click", (e)=>{
    main_navbar.classList.toggle("show")
});