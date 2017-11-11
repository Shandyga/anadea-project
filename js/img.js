function addImg(el) {
	el.innerHTML = "<img src='images/android.jpg' alt='' >";

	setTimeout(function() {
		el.innerHTML = 'Click me!';
	}, 1000)
}
document.addEventListener('click', function(e) {
	if (e.target.className == 'show-image') {
		addImg(e.target)
	}
}, false)