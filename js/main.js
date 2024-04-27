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
const menuList = document.querySelector('.nav-bar ul')
const closeIcon = document.querySelector('.close-icon')

menuIcon.addEventListener('click', function () {
    menuList.classList.toggle('slide-in');
    menuList.classList.remove('slide');
    menuList.style.visibility = 'visible'
    menuList.style.height = 'auto'
    menuIcon.style.visibility = 'hidden'
    menuIcon.style.width = '0'
    closeIcon.style.visibility = 'visible'
    closeIcon.style.width = 'auto'
})

closeIcon.addEventListener('click', function () {
    menuList.classList.toggle('slide');
    menuList.classList.remove('slide-in');
    menuList.style.visibility = 'hidden'
    menuIcon.style.visibility = 'visible'
    menuIcon.style.width = 'auto'
    closeIcon.style.visibility = 'hidden'
    closeIcon.style.width = '0'
})

const navigations = document.querySelectorAll('.navigasi')

navigations.forEach((navigation) => {
    navigation.addEventListener('click', function () {
        menuList.classList.toggle('slide');
        menuList.classList.remove('slide-in');
        menuIcon.style.visibility = 'visible';
        menuIcon.style.width = 'auto';
        closeIcon.style.visibility = 'hidden';
        closeIcon.style.width = '0'; 
    })
})

const contents = document.querySelectorAll('.menu-box');

contents.forEach((content) => {
    content.addEventListener('mouseenter', function () {
        this.classList.add('show')
    })
})