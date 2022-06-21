let header_burger_btn = document.getElementById("header-menu-burger-btn");
let header_menu_list = document.getElementById("header-menu-list");

header_burger_btn.addEventListener("click", () => {
    header_menu_list.classList.toggle("menu__list_open");
    header_burger_btn.querySelector('.menu__burger-icon').classList.toggle("menu__burger-icon_close")
});

document.addEventListener("scroll", () => {
    header_menu_list.classList.remove("menu__list_open");
    header_burger_btn.querySelector('.menu__burger-icon').classList.remove("menu__burger-icon_close")
});
