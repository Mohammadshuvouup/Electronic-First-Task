let menu_item = document.querySelectorAll('.menu-bar .menu-list .menu-list-item');

// menu-item : expand submenu on clicking menu-item
menu_item.forEach((li)=>{
    li.addEventListener("click",(event)=>{
        let parent = event.target;
        let sub_menu = parent.querySelector(".sub-menu");
       
        hideSubMenu();
        sub_menu.classList.add("show")
    })
});

// hide submenu if opened
function hideSubMenu(){
    menu_item.forEach((li)=>{
       let sub_menu = li.querySelector(".sub-menu");
       if(sub_menu.classList.contains("show")){
        sub_menu.classList.remove("show");
       }

    })
}

// close sub-menu when clicked outside the menu
document.addEventListener('click', (event)=> {
    let sub_menu = document.querySelector(".sub-menu.show");

    if (sub_menu !== event.target && !event.target.classList.contains("menu-list-item")) {
        if(sub_menu){
            sub_menu.classList.remove("show"); 
        }
    }  
});
  


