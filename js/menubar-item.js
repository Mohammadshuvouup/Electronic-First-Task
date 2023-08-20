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

// document.addEventListener('click', (event)=> {
//     let sub_menu = document.querySelector(".sub-menu.show");
//     // let li = document.querySelector(".menu-list li");
//     console.log(event.target)

//     menu_item.forEach((li)=>{
//         if (!li.querySelector(".sub-menu").contains(event.target) || !li.contains(event.target)) {
//             if(sub_menu){
//                 console.log(sub_menu)
//                 sub_menu.classList.remove("show");
//             }
//         } 
//      })  
// });
  


