
$preview_image = $('#preview_image')
$placeholder_image = $('#placeholder')
$add_button = $('#add_button')
$new_image_button = $('#new_button')
$email_input = $('#email_input')
var email

$( document ).ready(function() {
    previewImage()
})

// console.log($preview_image)

function previewImage() {
    var accessKey = 'XAtVdRNagvmx4_-hzujS5jq9N3BXMNBWE1MoQPBhhA0'
    var url = "https://api.unsplash.com/photos/random/?client_id=" + accessKey
    var imageURL = ""
    var previousImageURL = ""

    // Set the image
    $.getJSON(url, function(data) {
        imageURL = data.urls.regular
        $preview_image.attr('src', imageURL)
        $placeholder_image.attr('class', 'placeholder preview_image hide')
        console.log(imageURL)
        console.log(previousImageURL)
    })

    // console.log(imageURL)
    // console.log(previousImageURL)
    // If the image is repeating
    do {
        $.getJSON(url, function(data) {
            imageURL = data.urls.regular
            $preview_image.attr('src', imageURL)
            $placeholder_image.attr('class', 'placeholder preview_image hide')
        })
    } while (imageURL = previousImageURL)

    previousImageURL = imageURL

    console.log(imageURL)
    console.log(previousImageURL)   
}

function validateEmail() {
    var _email = $email_input.val()
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/

    if (regex.test(_email)) {
        email = $email_input.val()
        return true
    } else {
        return false
    }

}

$add_button.click(function() {

    // is the email address valid
    if (validateEmail()) {
        // $email_image_container = $('#' + email)
        console.log('---')
        // console.log($('#' + email))
        if ($('#' + email) == error) {
            console.log('pass')
        } else {
            console.log('fail')
        }
    }

})

$new_image_button.click(function() {
    alert( "Handler for .click() called." );
})