const menuList = document.querySelector(".menu-list");
const hamBurger = document.querySelector(".hamburger");

hamBurger.addEventListener('click', function(){
   hamBurger.classList.toggle('active');
   menuList.classList.toggle('active');
})
