const myHamburger = document.querySelector('.header-right > a');



// creo evento al click
myHamburger.addEventListener ('click', 
function () {

    let clickHamburger = document.querySelector('.hamburger-menu');

    clickHamburger.classList.add('active');
    console.log(clickHamburger);
});


const closeX = document.querySelector('.close');

// creo evento al click

closeX.addEventListener ('click',
function () {

    let closeMenu = document.querySelector('.hamburger-menu-active');
    closeMenu.classList.remove('active');
    console.log(closeMenu);
});

