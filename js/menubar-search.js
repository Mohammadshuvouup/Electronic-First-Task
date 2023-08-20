let search_icon = document.querySelector(".menu-bar .search-icon");
let search_wrapper = document.querySelector(".navbar-container .searchbar-wrapper") 
let menu_bar = document.querySelector(".navbar-container .menu-bar")
let close_icon = document.querySelector(".searchbar-wrapper .close-icon")

// search-icon click functionality
search_icon.addEventListener("click", (e) => {
    search_wrapper.classList.add("show");
    menu_bar.classList.add("hide");
});

// close searchbar feature
close_icon.addEventListener("click",(e)=>{
    search_wrapper.classList.remove("show");
    menu_bar.classList.remove("hide")
});