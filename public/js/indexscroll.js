document.getElementById("homeNav").classList.add("active");	
document.getElementsByTagName('body')[0].onscroll = function() {
	var y_scroll_pos = window.pageYOffset;
	var about = document.getElementById("about").offsetTop;
	var booking = document.getElementById("booking").offsetTop;
	var contact = document.getElementById("contact").offsetTop;

	if(y_scroll_pos < about) {
		removeClass();
		document.getElementById("homeNav").classList.add("active");	
	}
	if(y_scroll_pos > about-20 && y_scroll_pos<booking)
	{
		removeClass();
		document.getElementById("aboutNav").classList.add("active");
	}

	else if(y_scroll_pos > booking-20 && y_scroll_pos<contact)
	{
		removeClass();
		document.getElementById("bookingNav").classList.add("active");
	}

	else if(y_scroll_pos>contact-20)
	{
		removeClass();
		document.getElementById("contactNav").classList.add("active");
	}
}
function removeClass() {
	document.getElementById("homeNav").classList.remove("active");
	document.getElementById("aboutNav").classList.remove("active");
	document.getElementById("contactNav").classList.remove("active");
	document.getElementById("bookingNav").classList.remove("active");
}