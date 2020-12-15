

let burgerLines = document.getElementsByClassName('burger_line')
const burgerButton = document.getElementById('burger_button')
const side_menu = document.getElementById('side_menu')
const menu_overlay = document.getElementById('menu_overlay')
let push_items = document.getElementsByClassName('push-this')

let burgerState = false

burgerButton.addEventListener('click', function() {
    console.log('Button Clicked')
    console.log(window.scrollY)

    if (burgerState) {
        SideMenuOff()
    } else {
        SideMenuOn()
    }
})

menu_overlay.addEventListener('click', function() {
    SideMenuOff()

})

function SideMenuOn() {
    burgerLines[1].style.opacity = "0"
    burgerLines[0].classList.add('tilt_left')
    burgerLines[2].classList.add('tilt_right')
    side_menu.classList.add('side_menu_transform')
    menu_overlay.classList.add('active')
    burgerState = true

    document.body.style.position = 'fixed'
    document.body.style.top = `-${scrollY}px`

    for (let x = 0; x < push_items.length; x++) {
        push_items[x].classList.add('push-left')
    }
}

function SideMenuOff() {
    burgerLines[1].style.opacity = "1"
    burgerLines[0].classList.remove('tilt_left')
    burgerLines[2].classList.remove('tilt_right')
    side_menu.classList.remove('side_menu_transform')
    menu_overlay.classList.remove('active')
    burgerState = false

    document.body.style.position = ''
    document.body.style.top = ``

    for (let x = 0; x < push_items.length; x++) {
        push_items[x].classList.remove('push-left')
    }
}