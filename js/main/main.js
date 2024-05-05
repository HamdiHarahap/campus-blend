feather.replace();

const dropButton = document.querySelector('.dropdown-btn')
const dropContent = document.querySelector('.dropdown-content')
const up = document.querySelector('.up')
const down = document.querySelector('.down')

dropButton.addEventListener('click', function () {
    if (dropContent.style.visibility == 'visible') {
        dropContent.style.visibility = 'hidden'
        down.style.display = 'none'
        up. style.display = 'flex'
    } else {
        dropContent.style.visibility = 'visible'
        down.style.display = 'flex'
        up. style.display = 'none'
    }
})

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

const navigations = document.querySelectorAll('.navigation');
const horizontals = document.querySelectorAll('.hr');

navigations.forEach((navigation, i) => {
    navigation.addEventListener('click', function () {
        menuList.classList.toggle('slide');
        menuList.classList.remove('slide-in');
        menuIcon.style.visibility = 'visible';
        menuIcon.style.width = 'auto';
        closeIcon.style.visibility = 'hidden';
        closeIcon.style.width = '0'; 
    });

    navigation.addEventListener('mouseenter', function () {
        horizontals[i].style.width = '100%';
    });

    navigation.addEventListener('mouseleave', function () {
        horizontals[i].style.width = '0';
    });
});


const contents = document.querySelectorAll('.menu-box');

contents.forEach((content) => {
    content.addEventListener('mouseenter', function () {
        this.classList.add('show')
    })
})