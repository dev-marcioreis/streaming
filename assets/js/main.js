// Open / Close menu navbar
const openMenuBtn = document.getElementById('open')
const closeMenuBtn = document.getElementById('close')
const menuNavbar = document.querySelector('.navbar__menu')
const overlay = document.querySelector('.overlay')

const openMenu = () => {
    menuNavbar.style.right = '.1rem'
    openMenuBtn.style.display = 'none'
    closeMenuBtn.style.display = 'block'
}

openMenuBtn.addEventListener('click', openMenu)

const closeMenu = () => {
    menuNavbar.style.right = '-100%'
    closeMenuBtn.style.display = 'none'
    openMenuBtn.style.display = 'block'
}

closeMenuBtn.addEventListener('click', closeMenu)
overlay.addEventListener('click', closeMenu)


// Close menu navbar when clicking any option
if(window.innerWidth <= 992) {
    document.querySelectorAll('.navbar__menu .menu__item .menu__link').forEach(navItem => {
        navItem.addEventListener('click', () => {
            closeMenu()
        })
    })
}


// Change menu navbar color when scrolling
window.addEventListener('scroll', () => {
    document.querySelector('.header').classList.toggle('scrolling', window.scrollY)
})


// FAQ
const toggles = document.getElementsByClassName('toggle');
const contentDiv = document.getElementsByClassName('faq__content');
const icon = document.getElementsByClassName('icon')

for(let i = 0; i < toggles.length; i++){

    toggles[i].addEventListener('click', () =>{

        if(parseInt(contentDiv[i].style.height) != contentDiv[i].scrollHeight) {

            contentDiv[i].style.height = contentDiv[i].scrollHeight + "px";
            toggles[i].style.color = "#fcc82c"
            icon[i].style.transform = 'rotate(180deg)'
      
        } else{
            contentDiv[i].style.height = "0px";
            toggles[i].style.color = "#fff";
            icon[i].style.transform = 'rotate(0deg)'

        }

    });
}