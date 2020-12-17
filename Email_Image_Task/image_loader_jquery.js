
$preview_image = $('#preview_image')
$placeholder_image = $('#placeholder')
$add_button = $('#add_button')
$new_image_button = $('#new_button')
$email_input = $('#email_input')
$email = null
var email_array = []
var imageURL

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
        imageURL = 'https://picsum.photos/id/' + data.id + '/500/500'
        $preview_image.attr('src', imageURL)
        $placeholder_image.attr('class', 'placeholder preview_image hide')
        imageID = id
    })
}

function validateEmail() {
    var _email = $email_input.val()
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/

    if (regex.test(_email)) {
        $email = $email_input.val()
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
        console.log($email_image_container)

        // does the email element already exist

        if (jQuery.inArray($email, email_array) >= 0) {
            $image_container = $('#' + $email)
            $image_container.append('<img src="' + imageURL + '">')
        } else {
            console.log($email)
            var imageContainer = '<div class="image_container id="' +$email + '><img src="' + imageURL + '"></div>' 
            var emailContainer = '<div class="email_container"><p>'+ $email +'</p>' + imageContainer + '</div>'
            $email_image_container.append(emailContainer)
            email_array.push($email)
        }

        previewImage()
    }

})

$new_image_button.click(function() {
    previewImage()
})