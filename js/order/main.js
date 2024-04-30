feather.replace()

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

const solds = document.querySelectorAll('.out')

solds.forEach((sold) => {
    sold.addEventListener('click', function () {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "item not available!",
        });
    })
})

const availables = document.querySelectorAll('.available')

availables.forEach((available) => {
    available.addEventListener('click', function () {
        Swal.fire({
            title: "Good job!",
            text: "item added successfully!",
            icon: "success"
        });
    })
})