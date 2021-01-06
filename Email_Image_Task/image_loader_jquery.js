
// $preview_image = $('#preview_image')
// $placeholder_image = $('#placeholder')
// $add_button = $('#add_button')
// $new_image_button = $('#new_button')
// $email_input = $('#email_input')
// $api_error_message = $('#API_error')
// $email_error_message = $('#email_error')
const previewImage = document.getElementById('preview_image')
const placeholderImage = document.getElementById('placeholder')
const addButton = document.getElementById('add_button')
const newImageButton = document.getElementById('new_button')
const emailInput = document.getElementById('email_input')
const apiErrorMessage = document.getElementById('API_error')
const emailErrorMessage = document.getElementById('email_error')

var inputEmail
var email = null
var email_array = []
var failCount = 0;
// $returnedData = null
// $imageURL = null

window.addEventListener('DOMContentLoaded', function() {
    newPreviewImage()
})

// $( document ).ready(function() {
//     newPreviewImage()
// })

function newPreviewImage() {
    console.log("failCount: " + failCount)
    var imageID = null
    var id = 0

    // Prevents the last image being repeated
    if (failCount < 5) {
        setTimeout(function() {
            id = Math.floor(Math.random()*1000)
            var urlString = 'https://picsum.photos/id/' + id + '/500/500'
            console.log(urlString)
            let data
            let xmlhttp = new XMLHttpRequest()
            xmlhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    let xmlDoc = xmlhttp.responseXML
                    console.log(xmlhttp.reponse)
                }
            }
            xmlhttp.open("GET", urlString, true)
            xmlhttp.send()
            // let data = xmlhttp.responseURL
            // console.log(data)
            /*
            let xmlhttp = new XMLHttpRequest()
            xmlhttp.onreadystatechange = function() {
                if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                    console.log(xmlhttp.response)
                    let reponse = $(xmlhttp).find('url')
                    console.log( response)

                    $imageURL = 'https://picsum.photos/id/' + id + '/500/500'
                    $preview_image.attr('src', $imageURL)
                    // $preview_image.attr('alt', 'Photograph by: ' + data.author)
                    $placeholder_image.attr('class', 'placeholder preview_image hide')

                    // If the image is not identical to the previous one
                    if (id != imageID) {
                        imageID = id
                        failCount = 0;
                    } else {
                        failCount++;
                    }
                }
            }
            xmlhttp.open("GET" , 'https://picsum.photos/id/' + id + '/info', true)
            xmlhttp.send()
            */
            // $.getJSON('https://picsum.photos/id/' + id + '/info', function(data) {
            //     $imageURL = 'https://picsum.photos/id/' + data.id + '/500/500'
            //     $preview_image.attr('src', $imageURL)
            //     $preview_image.attr('alt', 'Photograph by: ' + data.author)
            //     $placeholder_image.attr('class', 'placeholder preview_image hide')
            //     // If the image is not identical to the previous one
            //     if (id != imageID) {
            //         imageID = id
            //         failCount = 0;
            //         $returnedData = data
            //         console.log($returnedData)
            //     } else {
            //         failCount++;
            //     }
            // }).fail(function() {
            //     console.log('failed')
            //     failCount++
            //     $preview_image.attr('class', 'preview_image hide')
            //     $placeholder_image.attr('class', 'placeholder preview_image')
            //     previewImage()
            // })

            
        }, 200)
    } else {
        // $placeholder_image.attr('class', 'placeholder preview_image')
        // $preview_image.attr('class', 'preview_image hide')
        // $api_error_message.attr('class', 'API_error')
    }

}


function validateEmail() {

    var _email = $email_input.val()
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/

    if (regex.test(_email)) {
        var uncutEmail = String(_email)
        var cutEmail = ''
        inputEmail = _email
        for (var x = 0; x < uncutEmail.length; x++) {
            if (uncutEmail.charAt(x) != '@' && uncutEmail.charAt(x) != '.') {
                cutEmail += uncutEmail.charAt(x)
            }
        }

        email = String(cutEmail)
        // $email_error_message.attr('class', 'transparent')
        return true
    } else {
        // $email_error_message.attr('class', '')
        return false
    }

}

// // $add_button.click(function() {

//     // is the email address valid
//     if (validateEmail() && failCount != 5) {

//         // email has passed validation
//         // $email_image_container = $('#email_image_container')

//         // does the email element already exist
//         if (jQuery.inArray(email, email_array) >= 0) {
//             // $additionalImageElement = `<img src="${$imageURL}" alt="Photograph by: ${$returnedData.author}">`
//             // $imageContainer = $('#'+email)
//             // $imageContainer.append($additionalImageElement)

//         } else {

//             // $imageElement = `<img src="${$imageURL}" alt="Photograph by: ${$returnedData.author}">` 
//             // $imageContainer = `<div class="image_container" id="${email}">${$imageElement}</div>`
//             // $emailContainer = `<div class="email_container"><p>${inputEmail}</p>${$imageContainer} + </div>`
//             // $email_image_container.prepend($emailContainer)
//             // email_array.push(email)
//         }

//         newPreviewImage()
//     }
// })

// // $new_image_button.click(function() {
//     if (failCount != 5) {
//         newPreviewImage()
//     }
// })
