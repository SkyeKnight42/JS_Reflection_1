const modalObject = document.querySelector("#modal")
const modalSettings = document.querySelector(".settings_button")
const modalAccept = document.querySelector('.modal_accept_button')
const modalOverlay = document.getElementById("modal_overlay")

// localStorage.setItem('cookie', 'false')

window.addEventListener('DOMContentLoaded', function() {
    if (localStorage.getItem('cookie') == 'true') {
        console.log("Cookie has already been accepted.")
    } else if (localStorage.getItem('cookie') == null || 
    localStorage.getItem('cookie') == 'false') {
        console.log("Cookie has not been accepted.")
        showModal()
        modalAccept.addEventListener('click', () => {
            localStorage.setItem('cookie', 'true')
            disableModal()
        })
    }
})

function showModal() {
    // modalObject.classList.remove('deactive')
    // modalOverlay.classList.remove('deactive')

    modalOverlay.classList.add('active')
    modalObject.classList.add('active')
}

function disableModal() {
    // modalObject.classList.add('deactive')
    // modalOverlay.classList.add('deactive')

    modalOverlay.classList.remove('active')
    modalObject.classList.remove('active')
}




// on page load, load the cookie