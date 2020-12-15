

let burgerLines = document.getElementsByClassName('burger_line')
const burgerButton = document.getElementById('burger_button')
let burgerState = false

burgerButton.addEventListener('click', function() {
    console.log('Button Clicked')

    if (burgerState) {
        burgerLines[1].style.opacity = "1"
        burgerLines[0].classList.remove('tilt_left')
        burgerLines[2].classList.remove('tilt_right')
        burgerState = false

    } else {
        burgerLines[1].style.opacity = "0"
        burgerLines[0].classList.add('tilt_left')
        burgerLines[2].classList.add('tilt_right')
        burgerState = true
    }
})
