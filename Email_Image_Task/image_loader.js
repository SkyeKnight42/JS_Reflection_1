const userContainer = document.getElementById('email_image_container')

const addItemButton = document.getElementById('add_button')
const newImageButton = document.getElementById('new_button')
const inputField = document.getElementById('email_input')
const emailError = document.getElementById('email_error')
const APIError = document.getElementById('API_error')
const placeholderImage = document.getElementById('placeholder')
const APIImage = document.getElementById('preview_image')

let emailErrorString = "Invalid Email"
let apiErrorString = "API Error"


let failCount = 0
let passedEmail
let uncutEmail
let imageValues = []
let usedEmails = []

document.addEventListener('DOMContentLoaded', function() {
    previewImage()
})

addItemButton.addEventListener('click', function() {
    if (failCount == 0 ) {
        validateEmail(inputField.value)
    }

})

newImageButton.addEventListener('click', function() {
    failCount = 0
    previewImage()
})

function validateEmail(emailInput) {
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if (emailInput.match(mailformat)) { //Validate Email

        // Remove the @
        passedEmail = emailInput.replace(/@/g, '')
        uncutEmail = emailInput
        emailError.textContent = ''

        if (arrayContains(passedEmail)) {
            addImagetoBox(imageURL, emailInput)
        } else {
            createImageBox()
        }

    } else {
        emailError.textContent = emailErrorString
    }
}

function createImageBox() {

    // Create the main container
    let user_images = document.createElement('div')
    user_images.classList.add('user_images')
    user_images.id = passedEmail
    userContainer.appendChild(user_images)

    // Add the email text
    let email_text = document.createElement('p')
    email_text.textContent = passedEmail
    user_images.appendChild(email_text)

    // Create the image container
    let image_container = document.createElement('div')
    image_container.classList.add('image_container')
    image_container.id = passedEmail + '_image_box'
    user_images.appendChild(image_container)

    // Create the image
    let image = document.createElement('img')
    image.src=imageValues[5]
    image.classList.add('mini_image')
    image.alt = "Photograph by: " + imageValues[1]
    image_container.appendChild(image)
    usedEmails.push(passedEmail)
    previewImage()
}

function addImagetoBox() {
    // Create the image
    let image = document.createElement('img')
    image.src=imageValues[5]
    image.classList.add('mini_image')
    let image_container = document.getElementById(passedEmail + '_image_box')
    image_container.appendChild(image)
    previewImage()

}

function previewImage() {
    inputField.textContent = ''
    do {
        id = Math.floor(Math.random()*100)
        imageURL = 'https://picsum.photos/id/' + id + '/500/500'
        var urlString = 'https://picsum.photos/id/' + id + '/info'

        let xmlhttp = new XMLHttpRequest()

        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {

                let response = String(xmlhttp.responseText)
                response = response.substring(1, response.length-2)
                
                let cutResponse = response

                // Remove all "
                cutResponse = cutResponse.replace(/"/g, '')

                // add a comma to end the final data value
                cutResponse += ','

                for (let x = 0; x < 6; x++) {
                    let value = ''
                    let colonPosition = null
                    let commaPosition = null
                    for (let y = 0; y < cutResponse.length; y++) {

                        // find first available : 
                        if (cutResponse.charAt(y) == ':' && colonPosition == null) {
                            colonPosition = y
                        }
                        // find first available , after the :
                        if (cutResponse.charAt(y) == ',' && colonPosition != null) {
                            commaPosition = y
                        }
                        if (colonPosition != null && commaPosition != null) {
                            break;
                        }
                    }

                    value = cutResponse.substring(colonPosition+1, commaPosition)
                    cutResponse = cutResponse.slice(commaPosition+1, cutResponse.length)
                    imageValues[x] = value
                }

                APIImage.alt = "Photograph by " + imageValues[1]
                APIImage.src=imageValues[5]
                APIError.textContent = ''
                failCount = 0;

            } else {
                APIError.textContent = apiErrorString
                APIImage.src = 'error_image.jpg'
                APIImage.alt = "API Failed"
                failCount++;
            }
        }

        xmlhttp.open("GET", urlString, true);
        xmlhttp.send();
    } while (failCount < 5)
}

function arrayContains(value) {
    for (let x = 0; x < usedEmails.length; x++) {
        if (usedEmails[x] === value) {
            return true
        }
    }
    return false
}