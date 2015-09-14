'use strict';
var count = 0;

var $likeForm = $('#submit');
var $likeButton = $('form > button:first-child');
var $resetButton = $('form > #reset');

$likeForm.on('submit', function(e){
	e.preventDefault();
	count++;
	if (count !== 1) {
		$likeButton.html(count + ' likes');
	} else {
		$likeButton.html(count + ' like');
	}
});

$resetButton.on('click', function(e) {
	e.preventDefault();
	count = 0;
	$likeButton.html('Like');
})

