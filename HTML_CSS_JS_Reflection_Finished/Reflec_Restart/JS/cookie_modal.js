const modalObject = document.querySelector("#modal")
const modalSettings = document.querySelector(".settings_button")
const modalAccept = document.querySelector('.modal_accept_button')
const modalOverlay = document.querySelector("#overlay")

// localStorage.setItem('cookie', 'false')

window.addEventListener('DOMContentLoaded', () => {
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
    modalObject.classList.remove('deactive')
    modalOverlay.classList.remove('deactive')
}

function disableModal() {
    modalObject.classList.add('deactive')
    modalOverlay.classList.add('deactive')
}




// on page load, load the cookie