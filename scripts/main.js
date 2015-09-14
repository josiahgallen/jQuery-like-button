'use strict';
var count = 0;

var $likeForm = $('#submit');
var $likeButton = $('form > button')

$likeForm.on('submit', function(e){
	e.preventDefault();
	count++;
	if (count !== 1) {
		$likeButton.html(count + ' likes');
	} else {
		$likeButton.html(count + ' like');
	}
});