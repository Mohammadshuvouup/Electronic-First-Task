let menu_item = document.querySelectorAll('.menu-bar .menu-list>li');

menu_item.forEach((li)=>{
    li.addEventListener("click",(event)=>{
        let parent = event.target;
        let sub_menu = parent.querySelector(".sub-menu");
        hideSubMenu();
        sub_menu.classList.add("show")
    })
});

function hideSubMenu(){
    menu_item.forEach((li)=>{
       let sub_menu = li.querySelector(".sub-menu");
       if(sub_menu.classList.contains("show")){
        sub_menu.classList.remove("show");
       }

    })
}


