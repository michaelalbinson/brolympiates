"use strict";
$('#chores').on('click', function() {
	var msg = $('#messages');
	var header = $('#headimg');
	msg.fade();
	header.toggle({'effect': 'scale', 
					'percent': 20})


});

$('#messages').on('click', function() {

})