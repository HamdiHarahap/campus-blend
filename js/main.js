feather.replace();

const foodButton = document.getElementsByClassName('food')
const drinkButton = document.getElementsByClassName('drink')
const drink = document.querySelector('.collection-drink')
const food = document.querySelector('.collection-food')

foodButton[0].addEventListener('click', function () {
    drink.style.display = 'none'
    food.style.display = 'flex'
})

drinkButton[1].addEventListener('click', function() {
    food.style.display = 'none'
    drink.style.display = 'flex'
})

const menuIcon = document.querySelector('.menu-icon')
const navMenu = document.querySelector('.nav-bar ul')
const navClose = document.querySelector('.close-icon')

menuIcon.addEventListener('click', function () {
    navMenu.style.visibility = 'visible'
    navMenu.style.height = 'auto'
    menuIcon.style.visibility = 'hidden'
    menuIcon.style.width = '0'
    navClose.style.visibility = 'visible'
    navClose.style.width = 'auto'
})

navClose.addEventListener('click', function () {
    navMenu.style.visibility = 'hidden'
    menuIcon.style.visibility = 'visible'
    menuIcon.style.width = 'auto'
    navClose.style.visibility = 'hidden'
    navClose.style.width = '0'
})


const contents = document.querySelectorAll('.menu-box');

contents.forEach((content) => {
    content.addEventListener('mouseenter', function () {
        this.classList.add('content-e')
    });
});