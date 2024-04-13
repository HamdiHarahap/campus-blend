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

const contents = document.querySelectorAll('.menu-box');

contents.forEach(content => {
    content.addEventListener('mouseenter', function () {
        this.classList.add('content-e');
        
    });
});