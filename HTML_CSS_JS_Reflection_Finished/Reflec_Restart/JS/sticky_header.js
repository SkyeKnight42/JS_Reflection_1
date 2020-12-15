
/*!
 * Run a callback after the user scrolls, calculating the distance and direction scrolled
 * (c) 2019 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {Function} callback The callback function to run
 * @param  {Integer}  refresh  How long to wait between scroll events [optional]
 */

const headerElement = document.getElementById("headerElement");

//#region 
// var scrollDistance = function (callback, refresh) {

// 	// Make sure a valid callback was provided
// 	if (!callback || typeof callback !== 'function') return;

// 	// Variables
// 	var isScrolling, start, end, distance;

// 	// Listen for scroll events
// 	window.addEventListener('scroll', function (event) {

// 		// Set starting position
// 		if (!start) {
// 			start = window.pageYOffset;
// 		}

// 		// Clear our timeout throughout the scroll
// 		window.clearTimeout(isScrolling);

// 		// Set a timeout to run after scrolling ends
// 		isScrolling = setTimeout(function() {

// 			// Calculate distance
// 			end = window.pageYOffset;
// 			distance = end - start;

// 			// Run the callback
// 			callback(distance, start, end);

// 			// Reset calculations
// 			start = null;
// 			end = null;
// 			distance = null;

// 		}, refresh || 10);

// 	}, false);
// };
//#endregion

let header_Height = 168

if (document.body.clientWidth < 750) {
	header_Height = 168
} else if (document.body.clientWidth < 975) {
	header_Height = 110
} else {
	header_Height = 210
}

let scrollHeight = 0
window.addEventListener("scroll", () => {
	if (window.scrollY >header_Height) {
		if (window.scrollY < scrollHeight) {
			headerElement.classList.remove("sticky_header")

		} else {
			headerElement.classList.add("sticky_header")
		}
		
		scrollHeight = window.scrollY
	}
	if (window.scrollY < header_Height) {
		headerElement.classList.remove("sticky_header")
	}
})
