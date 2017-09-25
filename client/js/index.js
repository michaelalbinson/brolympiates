"use strict";

var isLarge = false;
var selected;
var scnd;
var isHeaderShrunk = false;

jQuery(document).ready(function() {
    $('#chores').on('click', function() {
        if (selected === 'msg') {
            toggleSecondary('#choreBank');
            return selected = "chr";
        }

        toggleHeader();
        toggleSecondary('#choreBank');
        selected = selected ? undefined : 'chr';
    });

    $('#messages').on('click', function() {
    	if (selected === "chr") {
            toggleSecondary('#messageBank');
            return selected = "msg";
        }

        toggleHeader();
        isHeaderShrunk = !isHeaderShrunk;
        toggleSecondary('#messageBank');
        selected = selected ? undefined : 'msg';
    });
});

function toggleHeader(secondary) {
    var small = {height: "100px"};
    var large = {height: "300px"};
    var header = $('#headimg');

    header.animate((isLarge===true) ? large : small);
    isLarge = !isLarge;
}

function toggleSecondary(toToggle) {
	if (toToggle === '#messageBank' && scnd !== '#messageBank') {
		$('#messageBank').animate({
			left: '0'
		}, 500 );
		$('#cent').animate({
			left: '-150%'
		}, 500 );
		$('#choreBank').animate({
			left: '-300%'
		}, 500 );
		scnd = toToggle;
	} else if (toToggle === '#choreBank' && scnd !== '#choreBank') {
		$('#messageBank').animate({
			left: '300%'
		}, 500 );
		$('#cent').animate({
			left: '150%'
		}, 500 );
		$('#choreBank').animate({
			left: '0'
		}, 500 );
		scnd = toToggle;
	} else {
		$(this).animate({
			left: '-150%'
		}, 500 );
	}
}