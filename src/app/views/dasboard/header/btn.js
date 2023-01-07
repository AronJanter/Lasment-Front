'use strict'
window.addEventListener('load', () => {});


     const menuBtn= document.querySelector("#sidebarToggle")
        const navlinks= document.querySelector(".fas") 
        
        menuBtn.addEventListener('click', ()=>{
            navlinks.classList.toggle('mobile-menu')
        
});