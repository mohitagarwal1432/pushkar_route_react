document.getElementById("tourNav").classList.add("active");	
document.getElementsByTagName('body')[0].onscroll = function() {
	console.log("yes");
	var y_scroll_pos = window.pageYOffset;
	var contact = document.getElementById("contact").offsetTop;

	if(y_scroll_pos < contact) {
		removeClass();
		document.getElementById("tourNav").classList.add("active");	
	}
	else if(y_scroll_pos > contact-20)
	{
		removeClass();
		document.getElementById("contactNav").classList.add("active");
	}
}
function removeClass() {
	document.getElementById("tourNav").classList.remove("active");
	document.getElementById("contactNav").classList.remove("active");
}