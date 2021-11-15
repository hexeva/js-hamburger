const myHamburger = document.querySelector('.header-right > a');
// console.log(myHamburger);



myHamburger.addEventListener ('click', function () {

    let clickHamburger = document.querySelector('.hamburger-menu');


    clickHamburger.classList.add('.active');
    console.log(clickHamburger);
});

