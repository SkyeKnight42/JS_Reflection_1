

const supportButton = document.getElementById('support_button')
const contactButton = document.getElementById('contact_button')

const searchContainer = document.getElementById('search_container')
const searchInput = document.getElementById('search_box')
const searchButton = document.getElementById('search_button')
let searchState = false

searchButton.addEventListener('click', function() {
    if (window.innerWidth > 975 && window.innerWidth < 1260) {
        if (searchState) {
            FadeOutSearchBar()
            setTimeout(FadeInButtons(), 500)

        } else {
            FadeOutButtons()
            setTimeout(FadeInSearchBar(), 500)
        }
    }
})

window.addEventListener('resize', function() {
    if (searchState && window.innerWidth < 975 || window.innerWidth > 1260) {
        console.log('removing classes')
        searchInput.classList.remove('display_block')
        searchInput.classList.remove('search-fade-in')
        searchContainer.classList.remove('search_width')
        supportButton.classList.remove('display_none')
        contactButton.classList.remove('display_none')
        supportButton.classList.remove('button-fade')
        contactButton.classList.remove('button-fade')
        searchState = false
    }
})

function FadeInSearchBar() {
    searchInput.classList.add('display_block') // Sets display of input to block

    setTimeout(function() {
        searchInput.classList.add('search-fade-in') // Sets opacity to 1 over transition of 1s
        searchContainer.classList.add('search_width') // Sets width
    },500)

    searchState = true;
}

function FadeOutSearchBar() {
    searchInput.classList.remove('search-fade-in')
    searchContainer.classList.remove('search_width')
    searchInput.classList.remove('display_block')

    searchState = false;
}

function FadeInButtons() {
    supportButton.classList.remove('display_none')
    contactButton.classList.remove('display_none')

    setTimeout(function() {
        supportButton.classList.remove('button-fade')
        contactButton.classList.remove('button-fade')
    },500)
}

function FadeOutButtons() {
    supportButton.classList.add('button-fade')
    contactButton.classList.add('button-fade')

    setTimeout(function() {
        supportButton.classList.add('display_none')
        contactButton.classList.add('display_none')
    },500)
}