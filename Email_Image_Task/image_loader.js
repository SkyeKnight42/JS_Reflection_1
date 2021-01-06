
const AccessKey = 'XAtVdRNagvmx4_-hzujS5jq9N3BXMNBWE1MoQPBhhA0'
const PrivateKey = 'cY0OyVXeasSHJPZ_Dpv1kO70VdzEEHqIaFX5QmYXrjU'

const imageContainer = document.getElementById('image_container')

const addItemButton = document.getElementById('add_button')
const newImageButton = document.getElementById('new_button')
const inputField = document.getElementById('email_input')
const emailError = document.getElementById('email_error')
const APIError = document.getElementById('API_error')
const placeholderImage = document.getElementById('placeholder')
const APIImage = document.getElementById('preview_image')

emailError.style.color = 'white'
APIError.style.color = 'white'

let testedEmail
let imageURL
let imageDescription
previewImage()

addItemButton.addEventListener('click', () => {
    validateEmail(inputField.value)

    previewImage()
})

newImageButton.addEventListener('click', () => {
    previewImage();
})

function validateEmail(emailInput) {
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if (emailInput.match(mailformat)) { //Validate Email

        emailError.style.color = 'white'

        // If email is valid, store the variable for once an image has successfully been retrieved from the API
        testedEmail = document.getElementById(emailInput) 

        // searchPhotos(emailInput)
        if (testedEmail) {
            addImagetoBox(imageURL, emailInput)
        } else {
            createImageBox(imageURL, emailInput)
        }

    } else {
        emailError.style.color = 'red'
    }
}

function createImageBox(_image, _email, _alt) {
    let image = _image
    let email = _email
    let alt = _alt

    const imageBox = document.createElement('div')
    imageBox.classList.add('image_box')
    imageBox.id= email
    imageContainer.appendChild(imageBox)

    const emailText = document.createElement('p')
    emailText.textContent = email
    const smallImage = document.createElement('img')
    smallImage.src = image
    smallImage.alt = imageDescription
    smallImage.classList.add('image')

    imageBox.appendChild(emailText)
    imageBox.appendChild(smallImage)
}

function addImagetoBox(_image, _email) {
    let image = _image
    let email = _email

    const imageBox = document.getElementById(email)
    imageBox.insertAdjacentHTML("beforeend", `<img src="${image}" class="image">`)

    const smallImage = document.createElement('img')
    smallImage.src = image
    smallImage.alt = imageDescription
    smallImage.classList.add('image')

    imageBox.appendChild(smallImage)
}

function previewImage() {
    const url = "https://api.unsplash.com/photos/random/?client_id="+AccessKey
    fetch(url)
        .then(function (data) {
            APIError.style.color='white'
            return data.json()
        })
        .then(function(data) {
            imageURL = data.urls.regular
            imageDescription = data.description
            // console.log(data.description)
            APIImage.src = imageURL
            APIImage.classList.add('show')
            APIImage.classList.remove('hide')
            placeholderImage.classList.add('hide')
            placeholderImage.classList.remove('show')
            APIImage.alt = imageDescription
        })
        .catch(function() {
            // console.log("Fail")
            APIError.textContent = "API Error"
            APIImage.classList.add('hide')
            APIImage.classList.remove('show')
            placeholderImage.classList.add('show')
            placeholderImage.classList.remove('hide')
        })
}



// function searchPhotos(_email) {
//     const url = "https://api.unsplash.com/photos/random/?client_id="+AccessKey
//     const email = _email
//     fetch(url)
//         .then(function (data) {
//             return data.json()
//         })
//         .then(function(data) {
//             console.log(data)

//             if (testedEmail) {
//                 addImagetoBox(data.urls.regular, email)
//             } else {
//                 createImageBox(data.urls.regular, email)
//             }
//         })
// }