
$preview_image = $('#preview_image')
$placeholder_image = $('#placeholder')
$add_button = $('#add_button')
$new_image_button = $('#new_button')
$email_input = $('#email_input')
var inputEmail
var email = null
var email_array = []
$imageURL = null

$( document ).ready(function() {
    previewImage()
})

function previewImage() {
    var imageID = null
    var id

    // Prevents the last image being repeated
    do {
        id = Math.floor(Math.random()*1000)
    } while (imageID == id)

    $.getJSON('https://picsum.photos/id/' + id + '/info', function(data) {
        $imageURL = 'https://picsum.photos/id/' + data.id + '/500/500'
        $preview_image.attr('src', $imageURL)
        $placeholder_image.attr('class', 'placeholder preview_image hide')
        imageID = id
    })
}

function validateEmail() {


    var _email = $email_input.val()
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/

    if (regex.test(_email)) {
        var uncutEmail = String(_email)
        var cutEmail = ''
        inputEmail = _email
        for (var x = 0; x < uncutEmail.length; x++) {
            if (uncutEmail.charAt(x) != '@' || uncutEmail.charAt(x) != '.') {
                cutEmail += uncutEmail.charAt(x)
            }
        }

        email = String(cutEmail)
        return true
    } else {
        return false
    }

}

$add_button.click(function() {

    // is the email address valid
    if (validateEmail()) {

        // email has passed validation
        $email_image_container = $('#email_image_container')

        // does the email element already exist
        // if (jQuery.inArray('hello', email_array) >= 0) {
        if (jQuery.inArray(email, email_array) >= 0) {
            var id = '#' + email
            $additionalImageElement = `<img src="${$imageURL}">`
            $imageContainer = $('#skyexwarrengmailcom')
            // console.log($imageContainer)
            $imageContainer.append($additionalImageElement)

        } else {

            $imageElement = `<img src="${$imageURL}">`
            // $imageContainer = `<div class="image_container" id="hello">${$imageElement}</div>` 
            $imageContainer = '<div class="image_container" id="skyexwarrengmailcom">' + $imageElement + '</div>'
            $emailContainer = '<div class="email_container"><p>' + inputEmail + '</p>' + $imageContainer + '</div>'
            $email_image_container.prepend($emailContainer)
            email_array.push(email)
            // email_array.push('hello')

        }

        previewImage()
    }

})

$new_image_button.click(function() {
    previewImage()
})